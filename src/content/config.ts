import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      category: z.enum(['academic', 'personal']),
      github: z.string().optional(),
      demo: z.string().optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
      teamSize: z.number().default(1),
    }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
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
