import { Book, Code, GraduationCap, Star, Terminal, Coffee } from 'lucide-react';

const AboutPage = () => {
  const education = [
    {
      degree: "Diploma in Software Engineering",
      school: "Aptech",
      year: "Currently Pursuing",
      details: "Learning and building with modern technologies"
    }
  ];

  const stats = [
    { icon: Code, label: "Projects Built", value: "5+" },
    { icon: Terminal, label: "Tech Stack", value: "3" },
    { icon: Coffee, label: "Coffee Consumed", value: "∞" },
    { icon: Star, label: "GitHub Stars", value: "1+" }
  ];

  // Group skills by category
  const skillsets = {
    "Mobile Development": ["Flutter"],
    "Frontend Development": ["React", "HTML", "CSS", "JavaScript", "TypeScript"],
    "Backend Development": ["Laravel", "PHP", ".NET", "C#"],
    "Databases": ["MySQL", "MS SQL", "MongoDB"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
        
        {/* Bio Section */}
        <div className="bg-gray-800/50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Hi, I'm Huzaifa Aziz 👋</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Computer Science student and aspiring full-stack developer. 
                My journey in programming started with web development, and I've since expanded 
                into mobile development with Flutter and various backend technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I love building projects that solve real-world problems and am constantly 
                learning new technologies to expand my skill set. When I'm not coding, you'll 
                find me exploring new tech trends or contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-700/50 transition-colors">
              <Icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors">
                <div className="text-xl font-semibold text-white mb-1">{edu.degree}</div>
                <div className="text-blue-400 mb-2">{edu.school}</div>
                <div className="text-gray-400 text-sm mb-3">{edu.year}</div>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" /> Skills & Technologies
          </h3>
          <div className="space-y-6">
            {Object.entries(skillsets).map(([category, skills]) => (
              <div key={category} className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-4">{category}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-gray-700/50 rounded-lg p-4 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Book className="w-6 h-6" /> Currently Learning
          </h3>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Advanced React Patterns", "Mobile App Architecture", "Data Science"].map((goal) => (
                <div 
                  key={goal}
                  className="bg-gray-700/50 rounded-lg p-4 text-gray-300 hover:bg-gray-600/50 transition-colors"
                >
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;