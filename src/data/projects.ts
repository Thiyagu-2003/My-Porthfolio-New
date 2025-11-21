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
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Amazon S3", "CloudFront", "Route 53", "SSL/TLS"],
    category: "advanced",
    github: "https://github.com/Thiyagu-2003/portfolio-s3",
    demo: "https://portfolio.demo.com"
  },
  {
    id: 2,
    title: "EC2 Lab Environment",
    description: "University lab project: Set up and configured EC2 instances with security groups and key pairs. Practiced instance management, monitoring, and automated EBS snapshots.",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Amazon EC2", "EBS", "Security Groups", "CloudWatch"],
    category: "beginner",
    github: "https://github.com/Thiyagu-2003/ec2-lab",
    demo: "https://ec2-lab.demo.com"
  },
  {
    id: 3,
    title: "Student Database on RDS",
    description: "Capstone project component: Created Amazon RDS MySQL database for student management system. Configured automated backups and learned about Multi-AZ deployments.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Amazon RDS", "MySQL", "Multi-AZ", "Read Replicas"],
    category: "beginner",
    github: "https://github.com/Thiyagu-2003/student-db-rds",
    demo: "https://student-db.demo.com"
  },
  {
    id: 4,
    title: "NOVA-Voice Assistant",
    description: "Academic project: A Python-based voice assistant with a modern PyQt6 GUI, speech capabilities, GIF animations, and advanced scheduling features. Designed to handle tasks like app management, speech interaction, and task automation, this project offers a seamless desktop experience.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Python", "Pyqt6", "Windows OS", "GUI", "Documentation"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/voice-assistance.git",
    demo: "https://github.com/Thiyagu-2003/voice-assistance.git"
  },
  {
    id: 5,
    title: "V-Chat(Instagram Clone)",
    description: "Personal project: A dynamic, full-stack social media web application developed with Django and Django Channels, replicating essential Instagram features such as user authentication, photo sharing, post likes, following system, and real-time chat functionality. This project demonstrates the integration of modern web technologies with scalable backend architecture to deliver an interactive user experience.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Python", "Django", "HTML", "CSS", "Sql-lite", "Bootstrap", "Redis"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/InstaCloneUsingDjango.git",
    demo: "https://github.com/Thiyagu-2003/InstaCloneUsingDjango.git"
  },
];
