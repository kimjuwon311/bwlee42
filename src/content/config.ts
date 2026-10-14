import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const essays = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const projects = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const learning = defineCollection({
  type: 'content',
  schema: articleSchema,
});

export const collections = {
  essays,
  projects,
  learning,
};

