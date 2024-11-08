import { Heart, Code, Coffee, BookOpen, Sparkles, Ghost } from 'lucide-react';

const AboutMePage = () => {
  const passions = [
    {
      icon: Code,
      title: "Coding",
      description: "I love bringing ideas to life through code. Whether it's mobile apps with Flutter or web apps with React, I enjoy the creative process of building something from scratch."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Currently mastering full-stack development. I'm always excited to learn new technologies and improve my skills. Each day is a new opportunity to grow."
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "I enjoy tackling complex problems and finding elegant solutions. The feeling of finally solving a tricky bug or optimizing code is unmatched."
    },
    {
      icon: Sparkles,
      title: "Creating",
      description: "From designing user interfaces to architecting databases, I love the entire process of creating applications that people can use."
    }
  ];

  const technologies = [
    { category: "Mobile", items: ["Flutter"] },
    { category: "Frontend", items: ["React", "HTML", "CSS", "JavaScript", "TypeScript"] },
    { category: "Backend", items: ["Laravel", "PHP", ".NET", "C#"] },
    { category: "Database", items: ["MySQL", "MSSQL", "MongoDB"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Hello World!</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm a student developer passionate about creating beautiful and functional applications
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Personal Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Who Am I?</h2>
          <div className="bg-gray-800/50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Hey there! 👋 I'm a passionate Computer Science student who lives and breathes code. My journey in tech started 
                  with simple HTML pages, and now I'm diving deep into full-stack development.
                </p>
                <p>
                  I love working with a variety of technologies - from building sleek mobile apps with Flutter to crafting 
                  responsive web applications with React. Backend development with Laravel and .NET keeps me on my toes, 
                  and I enjoy the challenge of managing different databases.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or helping fellow developers solve problems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What I Love Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {passions.map((passion) => (
              <div key={passion.title} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all">
                <passion.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{passion.title}</h3>
                <p className="text-gray-300">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">My Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div key={tech.category} className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item) => (
                    <div key={item} className="bg-gray-700/50 rounded-lg px-4 py-2 text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Fun Facts</h2>
          <div className="bg-gray-800/50 rounded-xl p-8">
            <ul className="text-gray-300 space-y-4">
              <li className="flex items-center gap-3">
                <Ghost className="w-5 h-5 text-blue-500" />
                My first line of code was probably "Hello World" in HTML
              </li>
              <li className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-blue-500" />
                I run on coffee and curiosity
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-blue-500" />
                I believe in clean code and good documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;