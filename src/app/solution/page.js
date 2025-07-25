'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, Target, TrendingUp, Zap, Recycle, Shield, Globe, BarChart3, PieChart, CheckCircle2, ArrowUpRight, Star, Award, Sparkles, FlaskConical, Factory, Layers, ArrowRight, ChevronDown, Clock, Settings, Beaker, Microscope, Droplet, Leaf, TreePine, Menu, X } from 'lucide-react';
import Link from 'next/link';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }) => {
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
        setCount(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, decimals]);

  return (
    <span className="font-bold text-emerald-600">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
    </span>
  );
};

const FloatingBubble = ({ children, delay = 0, size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-10 h-10"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} flex items-center justify-center text-emerald-500`}
      animate={{ 
        y: [-15, 15, -15],
        rotate: [0, 360, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};







const ProgressBar = ({ percentage, label, color = "emerald" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-slate-700 font-medium">{label}</span>
        <span className="text-slate-600">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <motion.div
          className={`h-3 bg-gradient-to-r from-${color}-500 to-${color}-400 rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </div>
  );
};



const ProductShowcase = ({ products }) => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl cursor-pointer transition-all ${
              activeProduct === index 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                : 'bg-white border border-emerald-200 hover:border-emerald-300'
            }`}
            onClick={() => setActiveProduct(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg mr-4 ${
                activeProduct === index ? 'bg-white/20' : 'bg-emerald-100'
              }`}>
                <div className={`text-2xl ${activeProduct === index ? 'text-white' : 'text-emerald-600'}`}>
                  {product.icon}
                </div>
              </div>
              <div>
                <h3 className={`font-bold text-lg ${activeProduct === index ? 'text-white' : 'text-slate-800'}`}>
                  {product.name}
                </h3>
                <p className={`text-sm ${activeProduct === index ? 'text-white/80' : 'text-slate-600'}`}>
                  {product.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        key={activeProduct}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{products[activeProduct].name}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-emerald-600 mb-2">Benefits</h4>
            <p className="text-slate-700">{products[activeProduct].benefits}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products[activeProduct].stats.map((stat, index) => (
              <div key={index} className="bg-emerald-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-600">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ComparisonChart = () => {
  const comparisons = [
    { 
      feature: "Biodegradability", 
      collagen: "Fully biodegradable in weeks to months", 
      conventional: "Often non-biodegradable plastics" 
    },
    { 
      feature: "Source", 
      collagen: "Renewable fish waste", 
      conventional: "Petroleum-based or mammalian sources" 
    },
    { 
      feature: "Safety", 
      collagen: "Low allergenicity, biocompatible, no zoonotic disease risk", 
      conventional: "Potential allergenicity, disease risk" 
    },
    { 
      feature: "Environmental Impact", 
      collagen: "Low carbon footprint, waste reduction", 
      conventional: "High carbon footprint, pollution" 
    },
    { 
      feature: "Applications", 
      collagen: "Biomedical, cosmetic, packaging", 
      conventional: "Mostly packaging, limited biomedical use" 
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Collagen Biomaterials vs. Conventional Materials</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-emerald-200">
              <th className="text-left py-5 px-6 font-bold text-slate-800 text-lg">Feature</th>
              <th className="text-left py-5 px-6 font-bold text-emerald-600 text-lg">Collagen Biomaterials</th>
              <th className="text-left py-5 px-6 font-bold text-slate-600 text-lg">Conventional Materials</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, index) => (
              <motion.tr
                key={item.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-slate-100 hover:bg-emerald-50 transition-colors"
              >
                <td className="py-5 px-6 font-semibold text-slate-700 text-base">{item.feature}</td>
                <td className="py-5 px-6 text-emerald-700 text-base leading-relaxed">{item.collagen}</td>
                <td className="py-5 px-6 text-slate-600 text-base leading-relaxed">{item.conventional}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-500 mt-6 italic text-center">
        Comparative table highlighting the advantages of collagen biomaterials over conventional materials (Gaikwad & Kim, 2024; Qin et al., 2022).
      </p>
    </div>
  );
};

export default function Solution() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const products = [
    {
      name: "Collagen Sponges",
      icon: "🧽",
      description: "Biomedical scaffolds for tissue regeneration",
      benefits: "Complete epithelial tissue formation within 14 days, completely biodegradable and incorporated into new tissue without removal needed. (Jafari et al., 2020), (Wang et al., 2023)",
      stats: [
        { label: "Healing Time", value: 14, suffix: " days" },
        { label: "Success Rate", value: 95, suffix: "%" }
      ]
    },
    {
      name: "Biodegradable Films", 
      icon: "🌱",
      description: "Sustainable packaging solutions",
      benefits: "Extends produce shelf life by achieving a 19.42% lower bacteria count (Tkaczewska et al., 2022). Biodegrades completely within 3–6 months in industrial compost (Dirpan et al., 2023).",
      stats: [
        { label: "", value: "", suffix: "Shelf Life Extension" },
        { label: "", value: "", suffix: "Biodegradation" }
      ]
    },
    {
      name: "Cosmetic Applications",
      icon: "✨", 
      description: "Anti-aging and skincare products",
      benefits: "Increases skin hydration by 25-30%, improves elasticity by 15-20%, and reduces wrinkle depth by 10-15% over 8-12 weeks. (Ragaza & Go, 2024)",
      stats: [
        { label: "Hydration Increase", value: 27.5, suffix: "%", decimals: 1 },
        { label: "Elasticity Improvement", value: 17.5, suffix: "%", decimals: 1 }
      ]
    },
    {
      name: "Wound Healing Patches",
      icon: "🩹",
      description: "Advanced medical treatment",
      benefits: "Accelerates wound healing, reduces infection rates, and creates optimal environment for tissue repair with controlled drug release. (Jadach & Mielcarek, 2024)",
      stats: [
        { label: "Healing Acceleration", value: 40, suffix: "%" },
        { label: "Infection Reduction", value: 60, suffix: "%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <FloatingBubble delay={0} size="sm"><Recycle className="w-6 h-6" /></FloatingBubble>
        <div className="absolute top-20 right-20">
          <FloatingBubble delay={1} size="md"><Leaf className="w-8 h-8" /></FloatingBubble>
        </div>
        <div className="absolute bottom-32 left-16">
          <FloatingBubble delay={2} size="lg"><TreePine className="w-10 h-10" /></FloatingBubble>
        </div>
        <div className="absolute top-1/2 right-1/3">
          <FloatingBubble delay={3} size="sm"><Globe className="w-6 h-6" /></FloatingBubble>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.header 
            className="mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex justify-between items-center">
              <motion.h1 
                className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Fish className="w-8 h-8 text-emerald-600" />
                IsdaBest
              </motion.h1>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {['Problem', 'Science', 'Solution', 'Applications', 'Impact', 'References'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link 
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`hover:text-emerald-600 transition-colors duration-300 ${item === 'Solution' ? 'text-emerald-600 font-medium' : 'text-slate-600'}`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
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
                className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-xl border border-emerald-400/20 p-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  {['Problem', 'Science', 'Solution', 'Applications', 'Impact', 'References'].map((item, index) => (
                    <Link
                      key={item}
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`block px-4 py-3 rounded-lg text-center transition-colors duration-300 ${
                        item === 'Solution' 
                          ? 'bg-emerald-400/20 text-emerald-600 font-medium' 
                          : 'text-slate-600 hover:bg-white/10 hover:text-emerald-600'
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
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-emerald-600 mr-4" />
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  THE SOLUTION
                </h2>
              </div>
              
              <motion.p 
                className="text-2xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Transforming fish waste into <span className="font-bold text-emerald-600">revolutionary collagen biomaterials</span> that solve environmental problems while creating unprecedented value
              </motion.p>

              {/* Impact Statistics */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Fish Waste Utilization</p>
                  <p className="text-slate-500 text-sm">Complete conversion of fish skin, bones, and scales into valuable collagen biomaterials (Qin et al., 2022)</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    60-70%
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Energy Reduction</p>
                  <p className="text-slate-500 text-sm">Less energy required vs synthetic polymer production processes (Qin et al., 2022)</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    25-35°C
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Processing Temperature</p>
                  <p className="text-slate-500 text-sm">Lower denaturation temp vs mammalian collagen (39-45°C) (Jafari et al., 2020)</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    0
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Zoonotic Disease Risk</p>
                  <p className="text-slate-500 text-sm">No BSE or foot-and-mouth disease transmission risk unlike mammalian sources (Jafari et al., 2020)</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Key Advantages */}
      <section className="py-20 bg-white/60 backdrop-blur-lg relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Revolutionary Advantages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fish collagen biomaterials outperform conventional materials across every metric
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-10 h-10 mr-4" />
                <h3 className="text-2xl font-bold">Superior Safety</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Disease Risk</span>
                  <span className="font-bold text-2xl">ZERO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cultural Restrictions</span>
                  <span className="font-bold text-2xl">NONE</span>
                </div>
              <span> (Jafari et al., 2020)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Zap className="w-10 h-10 mr-4" />
                <h3 className="text-2xl font-bold">Energy Efficient</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Energy Savings</span>
                  <span className="font-bold text-2xl">60-70% </span>
                  <span className="text-[.7rem] font-normal">(Jafari et al., 2022)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Processing Temp</span>
                  <span className="font-bold text-2xl">25-35°C</span>
                  <span className="text-[.7rem] font-normal">(Qin et al., 2022)</span>
                </div>
                <p className="text-white/90 text-sm">Fish collagen requires 60-70% less energy than synthetic polymer production</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Recycle className="w-10 h-10 mr-4" />
                <h3 className="text-2xl font-bold">Fully Sustainable</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Biodegradation</span>
                  <span className="font-bold text-2xl">30-60 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Waste Utilization</span>
                  <span className="font-bold text-2xl">100%</span>
                </div>
                <span className="text-[.875rem] font-normal">(Qin et al., 2022)
</span>
              </div>
            </motion.div>
          </div>

          {/* Centered and Larger Comparison Chart */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <ComparisonChart />
            </div>
          </div>
        </div>
      </section>

      {/* Product Solutions */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Game-Changing Products
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four revolutionary product categories solving multiple industry challenges
            </p>
          </motion.div>

          <ProductShowcase products={products} />
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Environmental Revolution</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Our solution doesn't just solve the fish waste problem, it creates a new paradigm for sustainable materials
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8"
              >
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Zero Waste</h3>
                <div className="text-4xl font-bold mb-2">
                  7.3M
                </div>
                <p>tonnes of fish waste transformed annually (Mozumder et al., 2022; Thirukumaran et al., 2022)</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8"
              >
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Energy Reduction</h3>
                <div className="text-4xl font-bold mb-2">60-70%</div>
                <p>less energy required vs synthetic polymer production (Qin et al., 2022)</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8"
              >
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Market Value</h3>
                <div className="text-4xl font-bold mb-2">Provides</div>
                <p>potential value creation from waste streams</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8">
              The Future is Here
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Fish collagen biomaterials represent the perfect convergence of environmental responsibility, 
              technological innovation, and economic opportunity. The question isn't whether to adopt this solution, 
              it's how quickly we can scale it globally.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/applications" className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                See Applications
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/impact" className="inline-flex items-center border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-all">
                View Impact
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 