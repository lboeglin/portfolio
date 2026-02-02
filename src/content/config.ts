import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    category: z.enum(['academic', 'personal']),
    github: z.string().optional(),
    demo: z.string().optional(),
    image: z.string().optional(),
  }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    type: z.enum(['Internship', 'Apprenticeship']),
    startDate: z.string(),
    endDate: z.string().optional(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    report: z.string().optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  experiences,
};