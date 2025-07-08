import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <motion.section 
      className="relative bg-black text-white min-h-screen flex items-center pt-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        
        {/* Animated particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/30 rotate-45"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-48 h-48 border border-purple-500/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-cyan-400 text-sm font-semibold">🚀 PIONEERING THE FUTURE</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                BUILDING
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                TOMORROW
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl font-normal">
                Today
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transforming visions into reality with cutting-edge construction technology, 
              sustainable innovation, and unparalleled expertise in commercial and residential projects.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link 
                to="/project" 
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </Link>
              <Link 
                to="/contact"
                className="group border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm"
              >
                <span className="group-hover:text-cyan-300">Start Your Project</span>
              </Link>
            </motion.div>
            
            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "25+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right content - 3D visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-full h-96 lg:h-[600px] flex items-center justify-center">
              {/* Central building outline */}
              <motion.div
                className="relative"
                animate={{ rotateY: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Main building structure */}
                <div className="relative w-64 h-80 border-2 border-cyan-500/40 bg-gradient-to-t from-cyan-500/5 to-blue-500/5 backdrop-blur-sm">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-1 p-2">
                    {[...Array(96)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-cyan-400/20 rounded-sm"
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Holographic elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    animate={{
                      boxShadow: [
                        "0 0 10px #06b6d4",
                        "0 0 30px #06b6d4",
                        "0 0 10px #06b6d4"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                    animate={{
                      boxShadow: [
                        "0 0 10px #a855f7",
                        "0 0 30px #a855f7",
                        "0 0 10px #a855f7"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
                
                {/* Floating data points */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      left: Math.random() * 300 + 'px',
                      top: Math.random() * 400 + 'px',
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <p className="text-cyan-400 text-xs mt-2 text-center">SCROLL</p>
      </motion.div>
    </motion.section>
  );
}
