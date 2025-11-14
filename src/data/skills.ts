interface SkillItem {
  name: string;
  image: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    title: "AWS Core Services",
    items: [
      { name: "Amazon EC2", image: "/asset/EC2.png" },
      { name: "Amazon S3", image: "/asset/s3.png" },
      { name: "Amazon RDS", image: "/asset/RDS.png" },
      { name: "Amazon VPC", image: "/asset/vpc.png" }
    ]
  },
  {
    title: "AWS Compute & Storage",
    items: [
      { name: "AWS Lambda", image: "/asset/Lambda.png" },
      { name: "Amazon EBS", image: "/asset/Elastic Block Store.png" },
      { name: "Amazon EFS", image: "/asset/EFS.png" },
      { name: "Auto Scaling", image: "/asset/Auto Scaling.png" }
    ]
  },
  {
    title: "AWS Networking & Security",
    items: [
      { name: "Route 53", image: "/asset/Route 53.png" },
      { name: "CloudFront", image: "/asset/CloudFront.png" },
      { name: "AWS IAM", image: "/asset/Identity and Access Management.png" },
      { name: "Security Groups", image: "/asset/security hub.png" }
    ]
  },
  {
    title: "Infrastructure Tools",
    items: [
      { name: "Terraform", image: "/asset/Terraform.png" },
      { name: "PuTTY", image: "/asset/PuTTY.png" },
      { name: "WinSCP", image: "/asset/winscp.png" },
      { name: "AWS CLI", image: "/asset/Command Line Interface.png" }
    ]
  },
  {
    title: "Programming & Scripting",
    items: [
      { name: "Python", image: "/asset/python.png" },
      { name: "Bash Scripting", image: "/asset/Linux.png" },
      { name: "PowerShell", image: "/asset/PowerShell.png" },
      { name: "JSON/YAML", image: "/asset/Terraform.png" } // optional placeholder
    ]
  },
  {
    title: "Operating Systems & Databases",
    items: [
      { name: "Linux", image: "/asset/Linux.png" },
      { name: "Windows Server", image: "/asset/windows.png" },
      { name: "MySQL", image: "/asset/mysql.png" }, // reused RDS as DB icon
      { name: "PostgreSQL", image: "/asset/postgresql.png" } // same if you don’t have a separate logo
    ]
  }
];
