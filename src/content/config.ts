import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    camera: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
