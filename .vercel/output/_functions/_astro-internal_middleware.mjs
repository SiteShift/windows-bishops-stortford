import { d as defineMiddleware, s as sequence } from './chunks/index_CXdoaDVK.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C532esIC.mjs';
import 'kleur/colors';
import './chunks/astro/server_C8sX5OP2.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const response = await next();
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com; frame-src 'self' https://www.google.com;");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
