import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    imageUrl: z.string(),
    techStack: z.array(z.string()).optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};