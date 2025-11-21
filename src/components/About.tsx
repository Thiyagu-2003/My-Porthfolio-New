// // import React from 'react';
// // import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

// // const About: React.FC = () => {
// //   const experience = [
// //     {
// //       title: "Cloud Computing Intern",
// //       company: "Cultus Education (Offered by TNSDC)",
// //       period: "July 2025 - NOV 2025",
// //       description: "Completed the AWS re/Start cloud training program focused on AWS core services, Linux, networking fundamentals, and Python. Collaborated with a team to design and deploy scalable cloud-based solutions. Deployed and hosted a website using Amazon S3 and EC2 instances configured with Apache (httpd) and Nginx web servers. Gained practical experience in AWS services including EC2, S3, IAM, and RDS, along with cloud infrastructure setup, monitoring, and automation best practices."
// //     },
// //   ];

// //   return (
// //     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
// //       <div className="container mx-auto px-4">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
// //             <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //               Passionate AWS Cloud Engineer with expertise in building intelligent systems
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
// //             <div className="col-span-1">
// //               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
// //                 <div className="p-6">
// //                   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
// //                     <img 
// //                       src="/Thiyagu2.png" 
// //                       alt="profile picture" 
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>
                  
// //                   <h3 className="text-xl font-bold text-center mb-2">Thiyagu S</h3>
// //                   <p className="text-indigo-600 dark:text-indigo-400 text-center mb-4">AWS Cloud Practitioner</p>
                  
// //                   <div className="flex justify-center space-x-3">
// //                     <a href="https://github.com/Thiyagu-2003" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
// //                       <GitHub size={20} />
// //                     </a>
// //                     <a href="https://www.linkedin.com/in/thiyagu-s-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
// //                       <Linkedin size={20} />
// //                     </a>
// //                     <a href="mailto:sthiyagu466@gmail.com" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">
// //                       <Mail size={20} />
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
// //                 <h4 className="font-bold mb-4">Education</h4>
// //                 <div className="space-y-3">
// //                   <div>
// //                     <p className="font-medium">BCA (Bachelor of Computer Applications)</p>
// //                     <p className="text-sm text-gray-600 dark:text-gray-400">University of Madras, 2025</p>
// //                     <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
// //                 <h4 className="font-bold mb-4">Certifications</h4>
// //                 <div className="space-y-3">
// //                   <div>
// //                     <p className="font-medium">AWS Certified Cloud Practitioner</p>
// //                     <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services, 2025</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-medium">AWS Re/start Graduate</p>
// //                     <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services Training and Certification, 2025</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-medium">AWS Educate Student</p>
// //                     <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services, 2025-Present</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="col-span-2">
// //               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-6">
// //                 <h4 className="font-bold mb-4">Professional Summary</h4>
// //                 <div className="space-y-4">
// //                   <p className="text-gray-600 dark:text-gray-300">
// //                     I'm a fresh graduate with a Bachelor's degree in Information Technology, specializing in cloud computing and AWS technologies. Through academic projects, internships, and hands-on labs, I've gained practical experience with AWS core services, cloud architecture principles, and infrastructure automation.
// //                   </p>
// //                   <p className="text-gray-600 dark:text-gray-300">
// //                     I'm passionate about cloud technologies and eager to begin my career as an AWS Cloud Practitioner. I'm committed to continuous learning and staying current with the latest AWS services and best practices. I'm seeking an entry-level position where I can apply my knowledge and grow my expertise in cloud infrastructure and solutions.
// //                   </p>
// //                 </div>
// //               </div>
              
// //               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-6">
// //                 <h4 className="font-bold mb-6">Work Experience</h4>
// //                 <div className="space-y-6">
// //                   {experience.map((job, index) => (
// //                     <div key={index} className="flex">
// //                       <div className="mr-4 flex-shrink-0">
// //                         <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
// //                         {index < experience.length - 1 && (
// //                           <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-1.5 my-2"></div>
// //                         )}
// //                       </div>
// //                       <div>
// //                         <h5 className="font-medium">{job.title}</h5>
// //                         <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
// //                           <span>{job.company}</span>
// //                           <span className="mx-2">•</span>
// //                           <span>{job.period}</span>
// //                         </div>
// //                         <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Download Resume Section */}
// //           <div className="text-center mt-12">
// //             <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 max-w-md mx-auto">
// //               <h3 className="text-xl font-bold mb-4">Download My Resume</h3>
// //               <p className="text-gray-600 dark:text-gray-300 mb-6">
// //                 Get a detailed overview of my education, skills, and projects
// //               </p>
// //               <a 
// //                 href="/resume.pdf" 
// //                 download="Thiyagu_S_Resume.pdf"
// //                 className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
// //               >
// //                 <svg 
// //                   className="w-5 h-5 mr-2" 
// //                   fill="none" 
// //                   stroke="currentColor" 
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path 
// //                     strokeLinecap="round" 
// //                     strokeLinejoin="round" 
// //                     strokeWidth={2} 
// //                     d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
// //                   />
// //                 </svg>
// //                 Download Resume
// //               </a>
// //               <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
// //                 PDF format • Last updated: November 2025
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;



// import React from 'react';
// import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

// const About: React.FC = () => {
//   const experience = [
//     {
//       title: "Cloud Computing Intern",
//       company: "Cultus Education (Offered by TNSDC)",
//       period: "July 2025 - NOV 2025",
//       description:
//         "Completed the AWS re/Start cloud training program focused on AWS core services, Linux, networking fundamentals, and Python. Collaborated with a team to design and deploy scalable cloud-based solutions. Deployed and hosted a website using Amazon S3 and EC2 instances configured with Apache (httpd) and Nginx web servers. Gained hands-on experience with EC2, S3, IAM, and RDS, along with infrastructure setup, monitoring, and automation best practices."
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">

//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//             <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Passionate AWS Cloud Engineer with expertise in building intelligent systems
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

//             {/* LEFT COLUMN */}
//             <div className="col-span-1 flex flex-col space-y-6">

//               {/* Profile Card — Updated with your image container */}
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center flex-1">
//                 <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-700 ease-out hover:scale-105">
//                   <img
//                     src="/Thiyagu2.png"
//                     alt="Thiyagu S - AWS Cloud Practitioner"
//                     className="w-full h-full object-top object-cover scale-110 transition-transform duration-700 ease-out hover:scale-115"
//                   />
//                 </div>

//                 <h3 className="text-xl font-bold mb-2">Thiyagu S</h3>
//                 <p className="text-indigo-600 dark:text-indigo-400 mb-4">
//                   AWS Cloud Practitioner
//                 </p>

//                 <div className="flex justify-center space-x-3">
//                   <a
//                     href="https://github.com/Thiyagu-2003"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
//                   >
//                     <GitHub size={22} />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/thiyagu-s-ai"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
//                   >
//                     <Linkedin size={22} />
//                   </a>

//                   <a
//                     href="mailto:sthiyagu466@gmail.com"
//                     className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
//                   >
//                     <Mail size={22} />
//                   </a>
//                 </div>
//               </div>

//               {/* Education Card */}
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
//                 <h4 className="font-bold mb-4">Education</h4>
//                 <div className="space-y-3">
//                   <div>
//                     <p className="font-medium">BCA (Bachelor of Computer Applications)</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       University of Madras, 2025
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                       Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Certifications Card */}
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
//                 <h4 className="font-bold mb-4">Certifications</h4>
//                 <div className="space-y-3">
//                   <div>
//                     <p className="font-medium">AWS Certified Cloud Practitioner</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       Amazon Web Services, 2025
//                     </p>
//                   </div>
//                   <div>
//                     <p className="font-medium">AWS Re/Start Graduate</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       AWS Training & Certification, 2025
//                     </p>
//                   </div>
//                   <div>
//                     <p className="font-medium">AWS Educate Student</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       2025 - Present
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="col-span-2 flex flex-col space-y-6">

//               {/* Professional Summary */}
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
//                 <h4 className="font-bold mb-4">Professional Summary</h4>
//                 <div className="space-y-4">
//                   <p className="text-gray-600 dark:text-gray-300">
//                     I'm a fresh graduate with hands-on experience in AWS through academic work, labs, and internships. I’ve built cloud-based environments, deployed applications, and worked with core AWS services including EC2, IAM, VPC, Lambda, RDS, and S3.
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     I'm targeting entry-level cloud roles where I can work on real AWS projects, automate workflows, and grow into a cloud engineer role through practical exposure.
//                   </p>
//                 </div>
//               </div>

//               {/* Work Experience */}
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
//                 <h4 className="font-bold mb-6">Work Experience</h4>
//                 <div className="space-y-6">
//                   {experience.map((job, index) => (
//                     <div key={index} className="flex">
//                       <div className="mr-4 flex-shrink-0">
//                         <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
//                         {index < experience.length - 1 && (
//                           <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-1.5 my-2"></div>
//                         )}
//                       </div>
//                       <div>
//                         <h5 className="font-medium">{job.title}</h5>
//                         <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
//                           <span>{job.company}</span>
//                           <span className="mx-2">•</span>
//                           <span>{job.period}</span>
//                         </div>
//                         <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Resume Download */}
//           <div className="text-center mt-12">
//             <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 max-w-md mx-auto">
//               <h3 className="text-xl font-bold mb-4">Download My Resume</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 Get a detailed overview of my education, skills, and projects
//               </p>

//               <a
//                 href="/resume.pdf"
//                 download="Thiyagu_S_Resume.pdf"
//                 className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                   />
//                 </svg>
//                 Download Resume
//               </a>

//               <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
//                 PDF format • Last updated: November 2025
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const experience = [
    {
      title: "Cloud Computing Intern",
      company: "Cultus Education (Offered by TNSDC)",
      period: "July 2025 - NOV 2025",
      description:
        "Completed the AWS re/Start cloud training program focused on AWS core services, Linux, networking fundamentals, and Python. Collaborated with a team to design and deploy scalable cloud-based solutions. Deployed and hosted a website using Amazon S3 and EC2 instances configured with Apache (httpd) and Nginx web servers. Gained hands-on experience with EC2, S3, IAM, and RDS, along with infrastructure setup, monitoring, and automation best practices."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate AWS Cloud Engineer with expertise in building intelligent systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

            {/* LEFT COLUMN */}
            <div className="col-span-1 flex flex-col space-y-6">

              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center text-center flex-1">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-500 ease-out hover:scale-105">
                  <img
                    src="/Thiyagu2.png"
                    alt="Thiyagu S - AWS Cloud Practitioner"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">Thiyagu S</h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                  AWS Cloud Practitioner
                </p>

                {/* Social Icons + WhatsApp */}
                <div className="flex justify-center space-x-3">

                  <a
                    href="https://github.com/Thiyagu-2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <GitHub size={22} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thiyagu-s-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>

                  {/* WhatsApp Icon */}
                  <a
                    href="https://wa.me/918015113607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.3 5.36.107 12.02.107c3.181 0 6.167 1.24 8.413 3.488a11.82 11.82 0 0 1 3.497 8.414c-.003 6.658-5.197 11.854-11.861 11.854a11.9 11.9 0 0 1-5.93-1.586L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448.003 9.89-4.431 9.894-9.877.003-5.462-4.415-9.89-9.881-9.894-5.452-.003-9.89 4.428-9.894 9.881a9.82 9.82 0 0 0 1.588 5.396l-.999 3.648 3.9-.747zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.209-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.711.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:sthiyagu466@gmail.com"
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">BCA (Bachelor of Computer Applications)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      University of Madras, 2025
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              {/* <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Certifications</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">AWS Certified Cloud Practitioner</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services, 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">AWS Re/Start Graduate</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AWS Training & Certification, 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">AWS Educate Student</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2025 - Present</p>
                  </div>
                </div>
              </div> */}
              
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-2 flex flex-col space-y-6">

              {/* Professional Summary */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Professional Summary</h4>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm a fresh graduate with hands-on experience in AWS through academic work, labs, and internships. I’ve built cloud-based environments, deployed applications, and worked with core AWS services including EC2, IAM, VPC, Lambda, RDS, and S3.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm targeting entry-level cloud roles where I can work on real AWS projects, automate workflows, and grow into a cloud engineer role through practical exposure.
                  </p>
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-6">Work Experience</h4>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
                        {index < experience.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-1.5 my-2"></div>
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium">{job.title}</h5>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>{job.company}</span>
                          <span className="mx-2">•</span>
                          <span>{job.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Resume Download */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Download My Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a detailed overview of my education, skills, and projects
              </p>

              <a
                href="/resume.pdf"
                download="Thiyagu_S_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                PDF format • Last updated: November 2025
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
