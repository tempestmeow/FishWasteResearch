'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, AlertTriangle, Waves, Recycle, TrendingUp, ArrowRight, Globe, Factory, Users, ChevronDown, X, Menu, BarChart3, Clock, Heart, TreePine, Package, Beaker, Target } from 'lucide-react';
import Link from 'next/link';

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

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ 
      y: [-15, 15, -15],
      rotate: [-5, 5, -5]
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
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900/90 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-6 md:p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">{title}</h3>
          <button onClick={onClose} className="text-cyan-300 hover:text-cyan-100 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-cyan-100 space-y-4 text-sm md:text-base">
          {content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const problemDetails = {
    environmental: {
      title: "Environmental Impact (Mozumder et al., 2022; Thirukumaran et al., 2022)",
      content: [
        "Fish waste disposal significantly contributes to marine pollution, with approximately 7.3 million tonnes of discards entering oceans annually worldwide.",
        "In the Philippines, improper fish waste handling leads to eutrophication of water bodies, causing harmful algal blooms that deplete oxygen levels and kill marine life.",
        "The decomposition of fish waste releases methane and ammonia, contributing to greenhouse gas emissions and air quality deterioration in coastal communities.",
        "Contaminated water bodies affect not only marine ecosystems but also human health through compromised drinking water sources and contaminated seafood."
      ]
    },
    economic: {
      title: "Economic Consequences (Baclig, 2023)",
      content: [
      "The Philippines experiences significant annual losses with 20-40 percent of total fish caught and farmed lost due to poor post-harvest practices in the Philippines, creating substantial economic impacts across the fishing sector. Small-scale fishermen, who comprise the majority of the fishing workforce, face reduced income as inadequate post-harvest infrastructure forces them to sell catches at lower prices. Tourism revenue in coastal areas suffers when fish waste and poor handling practices affect water quality and marine ecosystems that tourists visit. Healthcare costs increase in fishing communities due to contamination from improper waste management affecting local water sources and air quality. Currently, fish waste from post-harvest losses represents missed opportunities for developing value-added products, as most processing byproducts remain underutilized rather than being converted into higher-value biotechnology applications."  ]
    },
    social: {
      title: "Social Challenges (Halder et al., 2024)",
      content: [
        "Fishing communities face food insecurity as fish stocks decline, affecting the primary protein source for Filipinos.",
        "Traditional fishing practices are threatened, endangering cultural heritage and knowledge passed down through generations.",
        "Women in fishing communities, who typically handle fish processing and waste management, face health risks from exposure to contaminated materials.",
        "Educational opportunities for children in fishing communities are limited due to economic pressures and environmental health issues."
      ]
    },
    sustainability: {
      title: "Sustainability Crisis (Macusi et al., 2021)",
      content: [
  "The current state of small-scale fisheries in the Philippines is a critical concern, with a majority of fish stocks found to be unsustainable. The total fish catch volume for most capture fisheries throughout the country has either stagnated or declined over the last three decades, contributing to poverty in many coastal communities. The lack of effective fisheries management and high exploitation rates perpetuate resource depletion. Without immediate intervention, Philippine fisheries may face collapse. The vulnerability of these communities is further highlighted by the fact that many fishers rely solely on fishing, with a lack of alternative livelihoods, making them highly susceptible to continued resource degradation."
]    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background with overlay */}
      <section className="relative z-30 px-4 md:px-6 py-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-cyan-900/85 z-10"></div>
          <div 
            className="absolute inset-0 opacity-75 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/backgrounds/a1.jpg')` }}
          ></div>
        </div>
        
        {/* Header */}
        <div className="max-w-7xl mx-auto relative z-30">
          <motion.header 
            className="mb-8 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex justify-between items-center">
              <motion.h1 
                className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Fish className="w-6 h-6 md:w-8 md:h-8" />
                IsdaBest
              </motion.h1>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {['Problem', 'Science', 'Solution', 'Applications', 'Impact', 'References'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Link 
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`hover:text-cyan-400 transition-colors duration-300 ${item === 'Problem' ? 'text-cyan-400' : 'text-white'}`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-xl border border-cyan-400/20 p-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  {['Problem', 'Science', 'Solution', 'Applications', 'Impact', 'References'].map((item, index) => (
                    <Link
                      key={item}
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`block px-4 py-3 rounded-lg text-center transition-colors duration-300 ${
                        item === 'Problem' 
                          ? 'bg-cyan-400/20 text-cyan-400 font-medium' 
                          : 'text-white hover:bg-white/10 hover:text-cyan-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.header>
        
          {/* Main Hero Content */}
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Fish Waste
                </span>
                <span className="block text-white">Crisis</span>
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                The Philippines faces a critical challenge in sustainable fisheries management as fish consumption surges globally
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <FloatingElement delay={0}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-cyan-400/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
                    <AnimatedCounter end={13} suffix="th" />
                  </div>
                  <p className="text-cyan-200 text-sm md:text-base">Largest Fish Producer (Tahiluddin & Terzi, 2021)</p>
                  <p className="text-xs md:text-sm text-cyan-300 mt-2">Philippines Global Ranking</p>
                </motion.div>
              </FloatingElement>

              <FloatingElement delay={0.5}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-cyan-400/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
                    <AnimatedCounter end={4.36} suffix="M" />
                  </div>
                  <p className="text-cyan-200 text-sm md:text-base">Metric Tonnes (Tahiluddin & Terzi, 2021)</p>
                  <p className="text-xs md:text-sm text-cyan-300 mt-2">Annual Fish Production</p>
                </motion.div>
              </FloatingElement>

              <FloatingElement delay={1}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-cyan-400/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Recycle className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
                    <AnimatedCounter end={50} suffix="%" />
                  </div>
                  <p className="text-cyan-200 text-sm md:text-base">Fish Parts Wasted (Mozumder et al., 2022; Thirukumaran et al., 2022)</p>
                  <p className="text-xs md:text-sm text-cyan-300 mt-2">Fins, Heads, Skin, Guts</p>
                </motion.div>
              </FloatingElement>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New section about consumption growth */}
      <section className="relative z-30 px-6 py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/95 via-blue-900/90 to-slate-900/95 z-10"></div>
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
              <Heart className="w-12 h-12 text-cyan-400 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Rising Global Demand
              </h2>
            </div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Fish consumption has doubled worldwide, driven by health awareness and economic growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 rounded-3xl p-8 backdrop-blur-lg border border-cyan-400/20"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">Historical Growth (Coppola et al., 2021)</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>1961 Consumption</span>
                  <span className="font-bold text-cyan-400">9.0 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Current Consumption</span>
                  <span className="font-bold text-cyan-400">20.5 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Growth Rate</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={128} suffix="%" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-3xl p-8 backdrop-blur-lg border border-cyan-400/20"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">Health Benefits</h3>
              </div>
              <div className="text-cyan-100 space-y-3">
                <p>Essential source of nutrients and animal protein for human health</p>
                <p>Driving increased awareness and consumption globally</p>
                <p>Critical for food security in developing nations</p>
                <p>(Taylor et al., 2025)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 rounded-3xl p-8 backdrop-blur-lg border border-cyan-400/20"
            >
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">Growth Drivers</h3>
              </div>
              <div className="text-cyan-100 space-y-3">
                <p>Rising global incomes</p>
                <p>Aquaculture expansion</p>
                <p>Health consciousness</p>
                <p>Population growth</p>
                <p>(Mendoza et al., 2022)</p>
              </div>
            </motion.div>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 rounded-3xl p-8 backdrop-blur-lg border border-cyan-400/20"
            >
              <div className="flex items-center mb-6">
                <Waves className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">Global Impact (Mozumder et al., 2022; Thirukumaran et al., 2022)</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Fish Consumption per Capita</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={20.2} suffix=" kg" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Annual Fishery Waste</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={20} suffix="M tonnes" />
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
                <h3 className="text-2xl font-bold text-cyan-300">Philippines Focus (De Ungria et al., 2023)</h3>
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
                  <span>Waste Given for Reuse</span>
                  <span className="font-bold text-cyan-400">
                    <AnimatedCounter end={19.1} suffix=" kg" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* New section about waste composition */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/20"
          >
            <div className="flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-cyan-300">Fish Waste Composition (Asmawati et al., 2023)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-400">Heads & Tails</div>
                <div className="text-cyan-200">Processing waste</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-400">Skin & Scales</div>
                <div className="text-cyan-200">External parts</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-400">Bones & Gills</div>
                <div className="text-cyan-200">Internal structures</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-400">Fins & Guts</div>
                <div className="text-cyan-200">Discarded organs</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-cyan-100">
                <span className="font-bold text-cyan-400">Current use:</span> Mostly converted to low-value animal feed or fertilizer
              </p>
            </div>
          </motion.div>
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
                onClick={() => setSelectedProblem(key)}
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
                The Transformative Question
              </h3>
            </div>
            <div className="text-2xl font-bold text-cyan-200 mb-8">
              "How can we make better use of fish waste and transform these by-products into valuable resources?"
            </div>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Addressing this crisis requires innovative solutions that transform fish waste from an environmental burden 
              into valuable resources. The development of sustainable biotech applications offers promising pathways 
              for economic growth while protecting marine ecosystems and unlocking the hidden potential in what was once considered waste.
            </p>
            
            {/* Navigation buttons to Science and Solution pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center"
            >
              <Link 
                href="/science"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Beaker className="w-5 h-5 mr-2" />
                Discover the Science
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/solution"
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Target className="w-5 h-5 mr-2" />
                Explore the Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {selectedProblem && (
        <ProblemDetail
          title={problemDetails[selectedProblem].title}
          content={problemDetails[selectedProblem].content}
          isOpen={true}
          onClose={() => setSelectedProblem(null)}
        />
      )}
    </div>
  );
}
