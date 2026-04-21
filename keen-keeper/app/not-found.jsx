// app/not-found.js
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 blur-3xl bg-purple-600/20 rounded-full"></div>
          
          {/* 404 Text with gradient */}
          <h1 className="relative text-9xl md:text-9xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>
        
        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        
        {/* Message */}
        <p className="text-gray-400 text-lg tracking-wide">
          Page not found
        </p>
        
        {/* Subtle dot decoration */}
        <div className="flex justify-center gap-2">
          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}