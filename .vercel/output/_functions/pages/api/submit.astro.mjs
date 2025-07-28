import { google } from 'googleapis';
export { renderers } from '../../renderers.mjs';

const prerender = false;
function sanitizeInput(input, maxLength = 200) {
  if (!input) return "";
  return input.toString().substring(0, maxLength).replace(/[<>]/g, "").trim();
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPhone(phone) {
  const phoneRegex = /^[0-9\s\-\(\)\+]{10,15}$/;
  return phoneRegex.test(phone);
}
const POST = async ({ request }) => {
  try {
    let formData = {};
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      formData = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const data = await request.formData();
      for (const [key, value] of data.entries()) {
        formData[key] = value;
      }
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: "Unsupported content type"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const firstName = sanitizeInput(formData.firstName || "", 50);
    const lastName = sanitizeInput(formData.lastName || "", 50);
    const email = sanitizeInput(formData.email || "", 100);
    const phone = sanitizeInput(formData.phone || "", 20);
    const service = sanitizeInput(formData.service || "", 100);
    const message = sanitizeInput(formData.message || "", 1e3);
    const formType = sanitizeInput(formData.formType || "contact", 20);
    const source = sanitizeInput(formData.source || "website", 50);
    const errors = [];
    if (formType === "newsletter") {
      if (!email) errors.push("Email is required");
      else if (!isValidEmail(email)) errors.push("Please enter a valid email address");
    } else {
      if (!firstName) errors.push("First name is required");
      if (!lastName) errors.push("Last name is required");
      if (!email) errors.push("Email is required");
      else if (!isValidEmail(email)) errors.push("Please enter a valid email address");
      if (!phone) errors.push("Phone number is required");
      else if (!isValidPhone(phone)) errors.push("Please enter a valid phone number");
      if (!service) errors.push("Service selection is required");
    }
    if (errors.length > 0) {
      return new Response(JSON.stringify({
        success: false,
        error: errors.join(", ")
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!serviceAccountJson || !spreadsheetId) {
      console.error("Missing required environment variables");
      return new Response(JSON.stringify({
        success: false,
        error: "Server configuration error"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const credentials = JSON.parse(serviceAccountJson);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });
    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const name = formType === "newsletter" ? "Newsletter Subscriber" : `${firstName} ${lastName}`;
    const pageUrl = request.headers.get("referer") || "Direct";
    let rowData;
    if (formType === "newsletter") {
      rowData = [
        timestamp,
        name,
        email,
        "",
        // phone
        "Newsletter Signup",
        // service
        "",
        // message
        formType,
        pageUrl
      ];
    } else {
      rowData = [
        timestamp,
        name,
        email,
        phone,
        service,
        message,
        formType,
        pageUrl
      ];
    }
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:H",
      // Assumes columns A-H for: Timestamp, Name, Email, Phone, Service, Message, Source, Page
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData]
      }
    });
    return new Response(JSON.stringify({
      success: true,
      message: "Form submitted successfully",
      timestamp
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "An error occurred while processing your request. Please try again."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
