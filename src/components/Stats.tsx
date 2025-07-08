import { motion } from 'framer-motion';

const stats = [
  { number: '25+', label: 'Years Experience', icon: '⚡' },
  { number: '500+', label: 'Projects Completed', icon: '🏗️' },
  { number: '50+', label: 'Expert Team Members', icon: '👥' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-10 h-full w-full">
            {[...Array(200)].map((_, i) => (
              <div key={i} className="border border-cyan-500/20"></div>
            ))}
          </div>
        </div>
        
        {/* Animated lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{ x: [window.innerWidth + 100, -100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Performance Metrics
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Delivering excellence through measurable results and proven expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Card background with glow effect */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <motion.div
                  className="text-3xl mb-3 flex justify-center"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Number with counter animation */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </motion.div>
                
                {/* Label */}
                <div className="text-gray-300 text-sm md:text-base text-center font-medium">
                  {stat.label}
                </div>
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent, transparent)',
                    backgroundClip: 'padding-box',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
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
      </div>
    </section>
  );
}
