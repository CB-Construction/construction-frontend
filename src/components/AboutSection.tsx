import { motion } from 'framer-motion';

const values = [
  {
    icon: '⚡',
    title: 'Innovation',
    description: 'Cutting-edge technology and revolutionary methods transform the construction landscape.'
  },
  {
    icon: '🔒',
    title: 'Security',
    description: 'Advanced safety protocols and AI-powered monitoring ensure zero-incident construction.'
  },
  {
    icon: '🚀',
    title: 'Performance',
    description: 'Quantum-level precision and optimized workflows deliver unparalleled project efficiency.'
  },
  {
    icon: '♻️',
    title: 'Sustainability',
    description: 'Next-generation eco-systems creating carbon-neutral and self-sustaining structures.'
  }
];

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated geometric patterns */}
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 border border-cyan-500/20 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-48 h-48 border border-purple-500/20"
          animate={{ 
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-cyan-400 text-sm font-semibold">🌟 NEXT-GENERATION CONSTRUCTION</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                REDEFINING
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                CONSTRUCTION
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the future of construction through quantum-enhanced engineering, 
              AI-driven project management, and sustainable innovation that reshapes skylines 
              and transforms communities.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Quantum-precise engineering systems",
                "AI-powered predictive construction",
                "Zero-emission building technologies",
                "Holographic design visualization"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="/about" 
              className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ x: 5 }}
            >
              <span className="relative z-10">Explore Our Technology</span>
              <motion.svg 
                className="ml-3 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </motion.svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Central hologram effect */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                    }}
                  >
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon with animation */}
                    <motion.div
                      className="text-4xl mb-4 flex justify-center"
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {value.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {value.description}
                    </p>
                    
                    {/* Data stream effect */}
                    <motion.div
                      className="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: [-50, 50, -50] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 150 150 Q 250 100 350 150"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  fill="none"
                  className="opacity-30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
