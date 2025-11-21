import React from 'react';
import { Award, BookOpen, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "AWS re/Start Cloud Computing Program",
      institution: "Cultus Education & Technology Service",
      year: ": Jul 2025 - Nov 2025",
      college: "Sponsored by TNSDC & Naan Mudhalvan",
      focus: "AWS Cloud, Linux, Python, MySQL, Networking, and Security",
      achievements: [
        "Completed 12-week AWS re/Start program",
        "Hands-on experience in cloud fundamentals and problem-solving",
        "Developed practical skills in Linux, Python scripting, and AWS services"
      ]
    },

    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "University of Madras",
      year: "2022-2025",
      college: "Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College",
      focus: "Computer Applications & IT",
      achievements: ["First Class with Distinction", "Project Leader", "Final Year Project: Python GUI Based Voice Assistant"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      credentialId: "6af4ce09-0416-4ce9-a818-cf09739b5990",
      link: "https://www.credly.com/badges/6af4ce09-0416-4ce9-a818-cf09739b5990/public_url",
      badge: "/aws-certified-cloud-practitioner.png"
    },
    {
      name: "AWS Re/start Graduate",
      issuer: "Amazon Web Services",
      year: "2025",
      credentialId: "8ca6f86f-663d-4308-9940-0e4c4661f07a",
      link: "https://www.credly.com/badges/8ca6f86f-663d-4308-9940-0e4c4661f07a/",
      badge: "/aws-re-start-graduate.png"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and professional certifications in Computer Applications and AWS Cloud Computing
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE — ACADEMIC */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Academic Education</h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                        {index < education.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-1.5 my-2"></div>
                        )}
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-indigo-600 dark:text-indigo-400">{edu.institution}</p>

                        {edu.college && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.college}</p>
                        )}

                        <p className="text-gray-600 dark:text-gray-400 mb-2">Year{edu.year}</p>

                        {edu.focus && (
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            <span className="font-medium">Focus:</span> {edu.focus}
                          </p>
                        )}

                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — CERTIFICATIONS */}
          <div className="lg:col-span-1">

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>

              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0">

                    {/* Badge Display */}
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="w-28 mx-auto mb-4 rounded-lg shadow"
                    />

                    <h4 className="font-bold text-gray-900 dark:text-white text-center">{cert.name}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 text-center">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Issued {cert.year}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-3">Credential ID: {cert.credentialId}</p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      View Certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Boxes */}
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
                <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h4 className="font-bold">Honors</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Magna Cum Laude</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
                <BookOpen className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h4 className="font-bold">Publications</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Academic Projects</p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
