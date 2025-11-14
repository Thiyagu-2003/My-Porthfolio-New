import React from 'react';
import { skills } from '../data/skills';
import { Cloud, Server, Database, Code, Shield, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'AWS Core Services':
        return <Cloud className="w-6 h-6" />;
      case 'AWS Compute & Storage':
        return <Server className="w-6 h-6" />;
      case 'AWS Networking & Security':
        return <Shield className="w-6 h-6" />;
      case 'Infrastructure Tools':
        return <Settings className="w-6 h-6" />;
      case 'Programming & Scripting':
        return <Code className="w-6 h-6" />;
      case 'Operating Systems & Databases':
        return <Database className="w-6 h-6" />;
      default:
        return <Settings className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-500 ease-in-out"
    >
      <div className="container mx-auto px-4 transition-all duration-300 ease-in-out">
        {/* Section Header */}
        <div className="text-center mb-16 transform transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-indigo-400">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-500 ease-in-out">
            Comprehensive skills in AWS cloud services, infrastructure management, and modern
            development tools
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 transition-all duration-500 ease-in-out">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-100 dark:border-gray-700 group hover:scale-105 hover:-translate-y-2 transform opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${categoryIndex * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white group-hover:from-indigo-600 group-hover:to-purple-700 transition-all duration-500 ease-in-out">
                <div className="flex items-center space-x-3 transition-all duration-300 ease-in-out">
                  <div className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-yellow-100 transition-all duration-500 ease-in-out transform group-hover:translate-x-1">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 transition-all duration-500 ease-in-out">
                <div className="space-y-3 transition-all duration-300 ease-in-out">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-item flex items-center space-x-4 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-500 ease-out cursor-pointer hover:shadow-md hover:scale-102 hover:-translate-y-1 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-700 transform opacity-0 animate-slide-in-right"
                      style={{ 
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shadow-md skill-item:hover:shadow-xl skill-item:hover:scale-110 transition-all duration-500 ease-out">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-full h-full object-cover skill-item:hover:scale-125 skill-item:hover:rotate-3 transition-transform duration-700 ease-out"
                          />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 opacity-0 skill-item:hover:opacity-100 skill-item:hover:animate-ping transition-all duration-500 ease-in-out"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white skill-item:hover:text-indigo-600 dark:skill-item:hover:text-indigo-400 skill-item:hover:font-bold transition-all duration-500 ease-in-out transform skill-item:hover:translate-x-1">
                          {skill.name}
                        </h4>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2 skill-item:hover:h-3 transition-all duration-700 ease-out overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-1500 ease-out skill-item:hover:from-indigo-600 skill-item:hover:to-purple-700 skill-item:hover:shadow-lg transform skill-item:hover:scale-x-105"
                            style={{
                              width: `${Math.min(
                                85 + categoryIndex * 5 + skillIndex * 2,
                                95
                              )}%`,
                              animationDelay: `${(categoryIndex * 300) + (skillIndex * 150)}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Technologies Showcase */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-all duration-700 ease-out transform hover:shadow-2xl hover:scale-[1.02]">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:from-blue-700 hover:to-purple-700">
            Core Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {/* AWS Services */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30 hover:shadow-lg transition-all duration-500 ease-out group transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse group-hover:animate-bounce transition-all duration-300 ease-in-out"></div>
              </div>
              <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 ease-out">
                  <Cloud className="w-5 h-5 text-white transition-all duration-300 ease-in-out group-hover:rotate-12" />
                </div>
                <h4 className="font-bold text-lg text-blue-700 dark:text-blue-300 transition-all duration-300 ease-in-out group-hover:text-blue-800 dark:group-hover:text-blue-200">
                  AWS Core Services
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 ease-in-out">
                {['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'VPC'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-lg hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 ease-out border border-blue-200 dark:border-blue-700/50 cursor-pointer transform hover:-translate-y-1 opacity-0 animate-fade-in"
                    style={{ 
                      animationDelay: `${800 + (index * 100)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800/30 hover:shadow-lg transition-all duration-500 ease-out group transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse group-hover:animate-spin transition-all duration-300 ease-in-out"></div>
              </div>
              <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                  <Code className="w-5 h-5 text-white transition-all duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300 transition-all duration-300 ease-in-out group-hover:text-emerald-800 dark:group-hover:text-emerald-200">
                  Development Tools
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 ease-in-out">
                {['Terraform', 'Python', 'PuTTY', 'AWS CLI'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-emerald-700 dark:text-emerald-300 shadow-sm hover:shadow-lg hover:scale-110 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-500 ease-out border border-emerald-200 dark:border-emerald-700/50 cursor-pointer transform hover:-translate-y-1 opacity-0 animate-fade-in"
                    style={{ 
                      animationDelay: `${1000 + (index * 100)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems & Monitoring */}
            <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800/30 hover:shadow-lg transition-all duration-500 ease-out group transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse group-hover:animate-ping transition-all duration-300 ease-in-out"></div>
              </div>
              <div className="flex items-center mb-4 transition-all duration-300 ease-in-out">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out">
                  <Database className="w-5 h-5 text-white transition-all duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg text-purple-700 dark:text-purple-300 transition-all duration-300 ease-in-out group-hover:text-purple-800 dark:group-hover:text-purple-200">
                  Systems & Monitoring
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 ease-in-out">
                {['Linux', 'MySQL', 'CloudWatch', 'Route 53'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-purple-700 dark:text-purple-300 shadow-sm hover:shadow-lg hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 ease-out border border-purple-200 dark:border-purple-700/50 cursor-pointer transform hover:-translate-y-1 opacity-0 animate-fade-in"
                    style={{ 
                      animationDelay: `${1200 + (index * 100)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
