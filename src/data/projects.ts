export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'beginner' | 'intermediate' | 'advanced' | 'other';
  github: string;
  demo: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Personal Portfolio on S3",
    description: "Academic project: Built and deployed a static website using Amazon S3 with CloudFront CDN. Learned domain configuration with Route 53 and SSL certificate management.",
    image: "/asset/Personal Portfolio on S3.png",
    technologies: ["Amazon S3", "CloudFront", "Route 53", "SSL/TLS"],
    category: "advanced",
    github: "https://github.com/Thiyagu-2003/portfolio-s3",
    demo: "https://portfolio.demo.com"
  },
  {
    id: 2,
    title: "NOVA-Voice Assistant",
    description: "Academic project: A Python-based voice assistant with a modern PyQt6 GUI, speech capabilities, GIF animations, and advanced scheduling features. Designed to handle tasks like app management, speech interaction, and task automation, this project offers a seamless desktop experience.",
    image: "/asset/voice assistant.jpg",
    technologies: ["Python", "Pyqt6", "Windows OS", "GUI", "Documentation"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/voice-assistance.git",
    demo: "https://github.com/Thiyagu-2003/voice-assistance.git"
  },
  {
    id: 3,
    title: "V-Chat(Instagram Clone)",
    description: "Personal project: A dynamic, full-stack social media web application developed with Django and Django Channels, replicating essential Instagram features such as user authentication, photo sharing, post likes, following system, and real-time chat functionality. This project demonstrates the integration of modern web technologies with scalable backend architecture to deliver an interactive user experience.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Python", "Django", "HTML", "CSS", "Sql-lite", "Bootstrap", "Redis"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/InstaCloneUsingDjango.git",
    demo: "https://github.com/Thiyagu-2003/InstaCloneUsingDjango.git"
  },
];
