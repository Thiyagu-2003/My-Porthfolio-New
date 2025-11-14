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
    category: "beginner",
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
    title: "Campus Network VPC Design",
    description: "Advanced coursework project: Designed a custom VPC simulating campus network with public/private subnets, NAT Gateway, and routing tables. Learned network security fundamentals.",
    image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Amazon VPC", "Subnets", "NAT Gateway", "Route Tables"],
    category: "intermediate",
    github: "https://github.com/Thiyagu-2003/campus-vpc",
    demo: "https://campus-vpc.demo.com"
  },
  {
    id: 5,
    title: "Scalable Web App Project",
    description: "Senior project: Built a web application with Application Load Balancer and Auto Scaling Groups. Learned about Launch Templates, health checks, and scaling policies through hands-on implementation.",
    image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["ALB", "Auto Scaling", "Launch Templates", "CloudWatch"],
    category: "intermediate",
    github: "https://github.com/Thiyagu-2003/scalable-webapp",
    demo: "https://scalable-app.demo.com"
  },
  {
    id: 6,
    title: "Serverless Image Processor",
    description: "Internship project: Created AWS Lambda functions triggered by S3 uploads to process images. Learned serverless architecture, API Gateway integration, and event-driven programming.",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3 Events"],
    category: "intermediate",
    github: "https://github.com/Thiyagu-2003/serverless-processor",
    demo: "https://image-processor.demo.com"
  },
  {
    id: 7,
    title: "Student Project CI/CD Pipeline",
    description: "Final semester project: Built automated deployment pipeline using AWS CodePipeline and CodeBuild. Integrated with GitHub for version control and learned DevOps fundamentals.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["CodePipeline", "CodeBuild", "CodeDeploy", "GitHub"],
    category: "intermediate",
    github: "https://github.com/Thiyagu-2003/student-cicd",
    demo: "https://student-pipeline.demo.com"
  },
  {
    id: 8,
    title: "Capstone: Multi-Tier Architecture",
    description: "Senior capstone project: Designed complete 3-tier architecture using Terraform for Infrastructure as Code. Implemented web, application, and database tiers with security best practices.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Terraform", "Multi-AZ", "Security Groups", "IAM Roles"],
    category: "advanced",
    github: "https://github.com/Thiyagu-2003/capstone-architecture",
    demo: "https://capstone-project.demo.com"
  },
  {
    id: 9,
    title: "Container Learning Lab",
    description: "Advanced elective project: Explored containerization with Docker and Amazon EKS. Built simple microservices to understand Kubernetes concepts and container orchestration.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Amazon EKS", "Kubernetes", "Docker", "Service Mesh"],
    category: "advanced",
    github: "https://github.com/Thiyagu-2003/container-lab",
    demo: "https://container-learning.demo.com"
  },
  {
    id: 10,
    title: "DR Strategy Research Project",
    description: "Research project: Studied disaster recovery concepts and designed theoretical DR solution with cross-region replication. Learned about RTO/RPO requirements and backup strategies.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Cross-Region", "Route 53", "RDS Snapshots", "S3 Replication"],
    category: "advanced",
    github: "https://github.com/Thiyagu-2003/dr-research",
    demo: "https://dr-strategy.demo.com"
  },
  {
    id: 11,
    title: "AWS Cost Monitoring Study",
    description: "Independent study project: Created simple cost monitoring dashboard using AWS Cost Explorer and CloudWatch. Learned about cost optimization principles and billing alerts.",
    image: "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Cost Explorer", "CloudWatch", "Lambda", "SNS"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/cost-study",
    demo: "https://cost-monitor.demo.com"
  },
  {
    id: 12,
    title: "Well-Architected Framework Study",
    description: "Academic research: Studied AWS Well-Architected Framework principles and conducted theoretical review of sample architectures. Learned about the five pillars and best practices.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Well-Architected", "Security", "Cost Optimization", "Documentation"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/wa-framework-study",
    demo: "https://wa-study.demo.com"
  },
  {
    id: 13,
    title: "NOVA-Voice Assistant",
    description: "Academic project: A Python-based voice assistant with a modern PyQt6 GUI, speech capabilities, GIF animations, and advanced scheduling features. Designed to handle tasks like app management, speech interaction, and task automation, this project offers a seamless desktop experience.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Python", "Pyqt6", "Windows OS", "GUI", "Documentation"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/voice-assistance.git",
    demo: "https://github.com/Thiyagu-2003/voice-assistance.git"
  },
  {
    id: 14,
    title: "V-Chat(Instagram Clone)",
    description: "Personal project: A dynamic, full-stack social media web application developed with Django and Django Channels, replicating essential Instagram features such as user authentication, photo sharing, post likes, following system, and real-time chat functionality. This project demonstrates the integration of modern web technologies with scalable backend architecture to deliver an interactive user experience.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    technologies: ["Python", "Django", "HTML", "CSS", "Sql-lite", "Bootstrap", "Redis"],
    category: "other",
    github: "https://github.com/Thiyagu-2003/InstaCloneUsingDjango.git",
    demo: "https://github.com/Thiyagu-2003/InstaCloneUsingDjango.git"
  },
];
