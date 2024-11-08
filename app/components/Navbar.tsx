'use client'


const Navbar = () => {
  
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <span className="text-2xl font-bold text-white">Portfolio</span>
      <div className="flex gap-6">
        <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
