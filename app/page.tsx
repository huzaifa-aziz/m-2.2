import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
     

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-4">HUZAIFA AZIZ</h1>
            <h2 className="text-2xl text-gray-400 mb-8">Full Stack Developer</h2>
            <p className="text-gray-300 max-w-2xl mb-8">
              I craft beautiful, responsive web applications with modern technologies.
              Passionate about creating seamless user experiences and writing clean, efficient code.
            </p>
            <div className="flex gap-4">
              <a href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Get in Touch
              </a>
              <a href="https://github.com/huzaifa-aziz?tab=repositories" className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

     
      <div className="py-16 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
              <div key={tech} className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <a href="https://github.com/huzaifa-aziz" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
          <Github className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.linkedin.com/in/huzaifa-aziz-a898a3301/" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        <a href="mailto:azizh4495@gmail,com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
          <Mail className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;