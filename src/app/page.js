'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, Waves, Recycle, TreePine, Globe, BarChart3, Users, TrendingUp } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="font-bold text-cyan-400">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ 
      y: [-10, 10, -10],
      rotate: [-1, 1, -1]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const ProblemDetail = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative bg-gradient-to-br from-slate-800/90 to-blue-900/90 rounded-3xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto backdrop-blur-xl border border-cyan-400/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl font-bold"
        >
          ×
        </button>
        <h3 className="text-2xl font-bold mb-6 text-cyan-300">{title}</h3>
        <div className="text-cyan-100 space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [activeDetail, setActiveDetail] = useState(null);

  const problemDetails = {
    environmental: {
      title: "Environmental Impact",
      content: [
        "Fish waste disposal significantly contributes to marine pollution, with approximately 7.3 million tonnes of discards entering oceans annually worldwide.",
        "In the Philippines, improper fish waste handling leads to eutrophication of water bodies, causing harmful algal blooms that deplete oxygen levels and kill marine life.",
        "The decomposition of fish waste releases methane and ammonia, contributing to greenhouse gas emissions and air quality deterioration in coastal communities.",
        "Contaminated water bodies affect not only marine ecosystems but also human health through compromised drinking water sources and contaminated seafood."
      ]
    },
    economic: {
      title: "Economic Consequences",
      content: [
        "The Philippines loses approximately $2.3 billion annually due to inefficient fish waste management and unsustainable fishing practices.",
        "Small-scale fishermen, who comprise 85% of the fishing workforce, face reduced income as fish stocks decline due to pollution and habitat degradation.",
        "Tourism revenue decreases by an estimated 15% in coastal areas affected by fish waste pollution, impacting local economies heavily dependent on marine tourism.",
        "Healthcare costs increase by 20% in fishing communities due to waterborne diseases and respiratory problems caused by improper waste management."
      ]
    },
    social: {
      title: "Social Challenges",
      content: [
        "Fishing communities face food insecurity as fish stocks decline, affecting the primary protein source for over 50 million Filipinos.",
        "Traditional fishing practices are threatened, endangering cultural heritage and knowledge passed down through generations.",
        "Women in fishing communities, who typically handle fish processing and waste management, face health risks from exposure to contaminated materials.",
        "Educational opportunities for children in fishing communities are limited due to economic pressures and environmental health issues."
      ]
    },
    sustainability: {
      title: "Sustainability Crisis",
      content: [
        "Current fishing practices are unsustainable, with 70% of Philippine fish stocks either fully exploited or overexploited.",
        "The lack of proper waste management systems perpetuates a cycle of environmental degradation and resource depletion.",
        "Climate change compounds the problem, with rising sea temperatures and ocean acidification affecting fish populations and waste decomposition rates.",
        "Without immediate intervention, fish waste management issues will worsen, potentially leading to ecosystem collapse in critical marine areas."
      ]
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <div className="fixed inset-0 opacity-100 z-20">
        {[...Array(75)].map((_, i) => (
                      <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-300 border-2 border-cyan-200"
              style={{
                width: Math.random() * 15 + 10 + 'px',
                height: Math.random() * 15 + 10 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                boxShadow: '0 0 25px rgba(34, 211, 238, 0.6), 0 0 50px rgba(34, 211, 238, 0.3)',
              }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <section className="relative z-30 px-6 py-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-cyan-900/85 z-10"></div>
          <div 
            className="absolute inset-0 opacity-75 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/backgrounds/a1.jpg')` }}
          ></div>
        </div>
        
        <motion.header 
          className="relative z-30 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Fish className="w-8 h-8 text-cyan-400" />
              FishSkin
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['Problem', 'Science', 'Solution', 'Applications', 'Impact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </nav>
        </motion.header>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Fish Waste
              </span>
              <span className="block text-white">Crisis</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Philippines faces a critical challenge in sustainable fisheries management
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <FloatingElement delay={0}>
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">
                  <AnimatedCounter end={13} suffix="th" />
                </div>
                <p className="text-cyan-200">Largest Fish Producer</p>
                <p className="text-sm text-cyan-300 mt-2">Philippines Global Ranking</p>
              </motion.div>
            </FloatingElement>

            <FloatingElement delay={0.5}>
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">
                  <AnimatedCounter end={4.36} suffix="M" />
                </div>
                <p className="text-cyan-200">Metric Tonnes</p>
                <p className="text-sm text-cyan-300 mt-2">Annual Fish Production</p>
              </motion.div>
            </FloatingElement>

            <FloatingElement delay={1}>
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Recycle className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">
                  <AnimatedCounter end={25} suffix="%" />
                </div>
                <p className="text-cyan-200">Waste Discarded</p>
                <p className="text-sm text-cyan-300 mt-2">Environmental Impact</p>
              </motion.div>
            </FloatingElement>
          </motion.div>
        </div>
      </section>

      <section className="relative z-30 px-6 py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/95 z-10"></div>
          <div 
            className="absolute inset-0 opacity-75 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/backgrounds/a2.jpg')` }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-cyan-400 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                The Global Crisis
              </h2>
            </div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Fish waste management is a worldwide challenge affecting marine ecosystems and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 rounded-3xl p-8 backdrop-blur-lg border border-cyan-400/20"
            >
              <div className="flex items-center mb-6">
                <Waves className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">Global Impact</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Fish Consumption per Capita</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={20.2} suffix=" kg" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Annual Global Fish Waste</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={160} suffix="M tonnes" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Discards to Ocean</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={7.3} suffix="M tonnes" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-3xl p-8 backdrop-blur-lg border border-cyan-400/20"
            >
              <div className="flex items-center mb-6">
                <TreePine className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">Philippines Focus</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Daily Market Waste</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={70.3} suffix=" kg" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Waste Disposed Daily</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={32.3} suffix=" kg" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fish Tissue Discarded</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={50} suffix="%" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-30 px-6 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-cyan-900/85 z-10"></div>
          <div 
            className="absolute inset-0 opacity-75 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/backgrounds/a1.jpg')` }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-cyan-400 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Critical Problem Analysis
              </h2>
            </div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Understanding the multifaceted challenges of fish waste management in the Philippines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(problemDetails).map(([key, detail], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/20 cursor-pointer hover:border-cyan-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                onClick={() => setActiveDetail(key)}
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">{detail.title}</h3>
                <p className="text-cyan-100 mb-4 line-clamp-3">
                  {detail.content[0]}
                </p>
                <div className="flex items-center text-cyan-300 font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Fish className="w-10 h-10 text-cyan-400 mr-4" />
              <h3 className="text-3xl font-bold text-cyan-300">
                The Path Forward
              </h3>
            </div>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Addressing this crisis requires innovative solutions that transform fish waste from an environmental burden 
              into valuable resources. The development of sustainable biotech applications offers promising pathways 
              for economic growth while protecting marine ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {activeDetail && (
        <ProblemDetail
          title={problemDetails[activeDetail].title}
          content={problemDetails[activeDetail].content}
          isOpen={true}
          onClose={() => setActiveDetail(null)}
        />
      )}
    </div>
  );
}
