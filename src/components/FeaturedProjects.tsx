import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Quantum Tower',
    category: 'Futuristic',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    description: 'AI-powered smart building with quantum computing infrastructure and adaptive architecture',
    tech: ['Quantum Computing', 'AI Integration', 'Adaptive Materials']
  },
  {
    title: 'Neo-Habitat Complex',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
    description: 'Self-sustaining residential ecosystem with atmospheric energy harvesting',
    tech: ['Energy Harvesting', 'Bio-Integration', 'Smart Automation']
  },
  {
    title: 'Fusion Manufacturing Hub',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    description: 'Zero-emission manufacturing facility powered by fusion energy systems',
    tech: ['Fusion Power', 'Zero Emissions', 'Automated Production']
  },
  {
    title: 'Temporal Archive',
    category: 'Heritage Tech',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop',
    description: 'Historic preservation enhanced with holographic restoration technology',
    tech: ['Holographic Tech', 'Nano Restoration', 'Time Preservation']
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated hexagon pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="10" height="8.66" patternUnits="userSpaceOnUse">
                <polygon points="5,0 9.33,2.5 9.33,7.5 5,10 0.67,7.5 0.67,2.5" 
                         fill="none" 
                         stroke="#06b6d4" 
                         strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>
        
        {/* Floating data streams */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-50, window.innerHeight + 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-purple-400 text-sm font-semibold">🏗️ BREAKTHROUGH PROJECTS</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-400 bg-clip-text text-transparent">
              REVOLUTIONARY
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              CONSTRUCTIONS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering construction projects that redefine what's possible in architecture and engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -15, rotateY: 5 }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl overflow-hidden">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image container with holographic effect */}
                <div className="relative overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Scanning line effect */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ y: [0, 192, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-cyan-400/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Tech indicators */}
                  <div className="absolute top-4 right-4 flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.2, 1] 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent, transparent)',
                    backgroundClip: 'padding-box',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #3b82f6, #06b6d4)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '2px',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a 
            href="/project" 
            className="group relative inline-flex items-center bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Projects</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
