import { motion } from 'framer-motion';

const services = [
  {
    icon: '🚀',
    title: 'Quantum Engineering',
    description: 'Revolutionary construction methodologies utilizing quantum mechanics for unprecedented precision and efficiency.',
    features: ['Molecular-level Precision', 'Zero-error Construction', 'Quantum Timeline Optimization']
  },
  {
    icon: '🏙️',
    title: 'Smart City Infrastructure',
    description: 'Next-generation urban environments with integrated AI systems and sustainable energy networks.',
    features: ['AI-Powered Buildings', 'Neural Network Integration', 'Adaptive Architecture']
  },
  {
    icon: '🌟',
    title: 'Holographic Design',
    description: 'Immersive 3D visualization and holographic modeling for perfect pre-construction planning.',
    features: ['Virtual Reality Planning', 'Holographic Prototyping', 'Real-time Modifications']
  },
  {
    icon: '⚡',
    title: 'Energy Fusion Systems',
    description: 'Advanced energy integration with self-sustaining power systems and atmospheric energy harvesting.',
    features: ['Fusion Power Integration', 'Atmospheric Harvesting', 'Zero Carbon Footprint']
  },
  {
    icon: '🛡️',
    title: 'Nano-Enhanced Materials',
    description: 'Cutting-edge nanotechnology materials that adapt to environmental conditions and self-repair.',
    features: ['Self-healing Structures', 'Climate Adaptation', 'Enhanced Durability']
  },
  {
    icon: '🧠',
    title: 'AI Project Management',
    description: 'Artificial intelligence orchestrating every aspect of construction with predictive analytics and automation.',
    features: ['Predictive Analytics', 'Automated Workflows', 'Real-time Optimization']
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Dynamic grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-cyan-500/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-purple-500/30 rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border border-cyan-500/30"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Ambient lighting */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-cyan-400 text-sm font-semibold">🔬 ADVANCED CONSTRUCTION SERVICES</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              FUTURE
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering construction services that leverage tomorrow's technology to build today's impossibilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 h-full overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-6 grid-rows-8 h-full w-full">
                    {[...Array(48)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="border border-cyan-400"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with 3D effect */}
                  <motion.div
                    className="text-6xl mb-6 flex justify-center"
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  {/* Features with animated indicators */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover effect border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent, transparent)',
                    backgroundClip: 'padding-box',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '2px',
                    }}
                  />
                </motion.div>
                
                {/* Data flow animation */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: [-100, 100, -100] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/services"
            className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Services</span>
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
      </div>
    </section>
  );
}
