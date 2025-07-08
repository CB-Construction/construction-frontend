
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10,0 L10,10 L0,10 M20,10 L10,10 L10,20" 
                      stroke="#06b6d4" 
                      strokeWidth="0.5" 
                      fill="none"/>
                <circle cx="10" cy="10" r="1" fill="#06b6d4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        {/* Glowing gradient lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Floating data points */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">CB</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur opacity-50 -z-10"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  CB Construction
                </h3>
                <p className="text-cyan-400 text-sm">Engineering Tomorrow</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Pioneering the future of construction through quantum engineering, AI automation, 
              and revolutionary technologies that transform impossible visions into reality.
            </p>
            
            {/* Social links with hover effects */}
            <div className="flex space-x-4">
              {[
                { icon: '📘', label: 'Facebook', color: 'hover:text-blue-400' },
                { icon: '🐦', label: 'Twitter', color: 'hover:text-cyan-400' },
                { icon: '💼', label: 'LinkedIn', color: 'hover:text-blue-500' },
                { icon: '📺', label: 'YouTube', color: 'hover:text-red-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`text-gray-400 ${social.color} transition-all duration-300 text-2xl`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Future Services
              </span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                'Quantum Engineering',
                'AI Project Management',
                'Holographic Design',
                'Nano-Enhanced Materials',
                'Energy Fusion Systems'
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <a 
                    href="/services" 
                    className="hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-50 group-hover:opacity-100"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Neural Network
              </span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              {[
                { icon: '📍', text: 'Quantum Plaza, Future City, Sector 7' },
                { icon: '📞', text: '+1 (555) QUANTUM' },
                { icon: '✉️', text: 'future@cbconstruction.ai' },
                { icon: '🌐', text: 'Neural Hub Active 24/7' }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-cyan-400 mt-1"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {contact.icon}
                  </motion.span>
                  <span className="group-hover:text-cyan-300 transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} CB Construction. All realities engineered.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Powered by Quantum Intelligence • Built for Tomorrow
              </p>
            </div>
            
            {/* Tech status indicators */}
            <div className="flex items-center space-x-4">
              {[
                { label: 'Quantum Core', status: 'ACTIVE' },
                { label: 'AI Matrix', status: 'ONLINE' },
                { label: 'Neural Net', status: 'SYNC' }
              ].map((system, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <span className="text-gray-500">{system.label}</span>
                  <span className="text-green-400 font-mono">{system.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
