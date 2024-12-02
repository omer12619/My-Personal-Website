const Breaker = () => {
  return (
    <div className="relative my-12">
      {/* Animated Line */}
      <div className="relative h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full mx-auto w-3/4">
        {/* Glow Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 blur-lg opacity-20 animate-pulse"></div>
      </div>

      {/* Interactive Elements */}
      <div className="absolute inset-0 flex items-center justify-center space-x-4">
        <div className="h-4 w-4 bg-purple-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
        <div className="h-4 w-4 bg-pink-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
        <div className="h-4 w-4 bg-red-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default Breaker;
