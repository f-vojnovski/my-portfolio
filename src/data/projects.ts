export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'This is my first amazing project with lots of cool features.',
    imageUrl: '/project1.jpg'
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'My second project that solves important problems.',
    imageUrl: '/project2.jpg'
  },
];