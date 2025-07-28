import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().or(z.date()),
    author: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog }; 