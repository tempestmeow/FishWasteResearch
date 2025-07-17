'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, Globe, Sparkles, TrendingUp, Heart, Users, Leaf, Factory, Award, ArrowRight, MapPin, Waves, Sun, TreePine, DollarSign, Briefcase, GraduationCap, Home, Target, Lightbulb, Star, Zap, Crown, Building2, Recycle, Shield, CheckCircle, BarChart3, Droplets, Wind, Book, Microscope, ChevronDown, ChevronRight, ChevronLeft, Eye, Atom, FlaskConical, Beaker } from 'lucide-react';
import Link from 'next/link';

const AnimatedCounter = ({ end, duration = 3, suffix = '', prefix = '', decimals = 0 }) => {
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
    <span className="font-bold text-amber-600">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
    </span>
  );
};

const FloatingOrb = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [-30, 30, -30],
      x: [-15, 15, -15],
      rotate: [0, 360],
      scale: [1, 1.3, 1]
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const RippleEffect = ({ delay = 0 }) => (
  <motion.div
    className="absolute inset-0 border-2 border-amber-400 rounded-full opacity-30"
    animate={{
      scale: [1, 2, 3],
      opacity: [0.6, 0.3, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
  />
);

const WaveAnimation = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <motion.path
        d="M1200,30C1200,30,1140,30,1088,30C1011.2,30,968.8,60,892,60C815.2,60,772.8,30,696,30C619.2,30,576.8,60,500,60C423.2,60,380.8,30,304,30C227.2,30,184.8,60,108,60C31.2,60,-12.8,30,-60,30C-60,30,-60,120,-60,120L1200,120L1200,30Z"
        fill="url(#waveGradient)"
        initial={{ d: "M1200,30C1200,30,1140,30,1088,30C1011.2,30,968.8,60,892,60C815.2,60,772.8,30,696,30C619.2,30,576.8,60,500,60C423.2,60,380.8,30,304,30C227.2,30,184.8,60,108,60C31.2,60,-12.8,30,-60,30C-60,30,-60,120,-60,120L1200,120L1200,30Z" }}
        animate={{ 
          d: [
            "M1200,30C1200,30,1140,30,1088,30C1011.2,30,968.8,60,892,60C815.2,60,772.8,30,696,30C619.2,30,576.8,60,500,60C423.2,60,380.8,30,304,30C227.2,30,184.8,60,108,60C31.2,60,-12.8,30,-60,30C-60,30,-60,120,-60,120L1200,120L1200,30Z",
            "M1200,45C1200,45,1140,15,1088,15C1011.2,15,968.8,45,892,45C815.2,45,772.8,15,696,15C619.2,15,576.8,45,500,45C423.2,45,380.8,15,304,15C227.2,15,184.8,45,108,45C31.2,45,-12.8,15,-60,15C-60,15,-60,120,-60,120L1200,120L1200,45Z",
            "M1200,30C1200,30,1140,30,1088,30C1011.2,30,968.8,60,892,60C815.2,60,772.8,30,696,30C619.2,30,576.8,60,500,60C423.2,60,380.8,30,304,30C227.2,30,184.8,60,108,60C31.2,60,-12.8,30,-60,30C-60,30,-60,120,-60,120L1200,120L1200,30Z"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const EnhancedMetricCard = ({ icon, value, label, description, color = "amber", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, rotateY: 45 }}
    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ 
      y: -15, 
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.4)",
      scale: 1.05
    }}
    className="bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-amber-200 relative overflow-hidden group"
  >
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
    
    {/* Floating Icon Background */}
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
      <div className="text-6xl text-amber-500">{icon}</div>
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-2xl flex items-center justify-center shadow-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white text-2xl">{icon}</div>
        </div>
        <div>
          <div className={`text-4xl font-bold text-${color}-600 mb-1`}>{value}</div>
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{label}</div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      
      {/* Progress indicator */}
      <div className="mt-4 w-full bg-amber-100 rounded-full h-2">
        <motion.div
          className={`h-2 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, delay: delay + 0.5 }}
        />
      </div>
    </div>
  </motion.div>
);

const ExpandableSection = ({ title, subtitle, icon, children, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="mb-12"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left bg-gradient-to-r from-white/90 to-amber-50/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-amber-200 hover:border-amber-300 transition-all duration-300"
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(251, 191, 36, 0.3)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <div className="text-white text-2xl">{icon}</div>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {title}
              </h2>
              <p className="text-xl text-amber-700">{subtitle}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-amber-600"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>
      </motion.button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pt-8">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const InteractiveDetailCard = ({ title, content, stats = [], icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-lg border border-amber-100 mb-8 group hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-start mb-6">
      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white text-xl">{icon}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-amber-800 mb-4 group-hover:text-amber-700 transition-colors">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-6">{content}</p>
      </div>
    </div>
    
    {stats.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-amber-100 rounded-lg p-4 text-center hover:bg-amber-200 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
            <div className="text-sm text-amber-700">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    )}
  </motion.div>
);

const SlidingContentPanel = ({ sections, title }) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-amber-200">
      <h3 className="text-3xl font-bold text-center text-amber-800 mb-8">{title}</h3>
      
      {/* Navigation */}
      <div className="flex justify-center items-center mb-8 space-x-4">
        <button
          onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
          disabled={activeSection === 0}
          className="p-3 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === index ? 'bg-amber-500' : 'bg-amber-200'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
          disabled={activeSection === sections.length - 1}
          className="p-3 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sections[activeSection]}
      </motion.div>
    </div>
  );
};

const VisualImpactShowcase = () => {
  const impactVisuals = [
    {
      icon: <Factory className="w-16 h-16" />,
      title: "Economic Transformation",
      description: "From waste disposal costs to $2.3B revenue generation"
    },
    {
      icon: <Waves className="w-16 h-16" />,
      title: "Environmental Healing",
      description: "Clean waterways and healthy marine ecosystems"
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Community Empowerment",
      description: "50,000+ new jobs and improved livelihoods"
    },
    {
      icon: <Globe className="w-16 h-16" />,
      title: "Global Leadership",
      description: "Philippines as biotech innovation hub"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {impactVisuals.map((visual, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.05 }}
          className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 text-center shadow-lg border border-amber-200"
        >
          <div className="text-amber-600 mb-4 flex justify-center">
            {visual.icon}
          </div>
          <h4 className="text-xl font-bold text-amber-800 mb-3">{visual.title}</h4>
          <p className="text-gray-700 text-sm mb-4">{visual.description}</p>
          <div className="text-2xl mb-2">{visual.visual}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Impact() {
  const environmentalSections = [
    <InteractiveDetailCard
      key="waste-reduction"
      title="Dramatic Waste Reduction"
      content="The Philippines generates approximately 1.1-1.32 million metric tons of fish waste annually. Converting even a portion of this waste into valuable biomaterials significantly reduces the volume of organic waste polluting waterways and coastal areas."
      stats={[
        { value: "1.32M", label: "Tonnes waste annually" },
        { value: "100%", label: "Waste utilization potential" }
      ]}
      icon={<Recycle />}
    />,
    <InteractiveDetailCard
      key="pollution-control"
      title="Pollution Control"
      content="This reduction directly addresses issues like eutrophication, oxygen depletion, and harmful algal blooms that currently plague Philippine water bodies due to fish waste. Improper fish waste management is a key factor contributing to the unsustainability of Philippine fisheries."
      stats={[
        { value: "Zero", label: "Eutrophication risk" },
        { value: "Clean", label: "Water bodies" }
      ]}
      icon={<Shield />}
    />,
    <InteractiveDetailCard
      key="circular-economy"
      title="Circular Economy Alignment"
      content="By converting waste into valuable products, the Philippines can significantly reduce its carbon footprint associated with waste management. Life cycle assessments indicate that collagen production from fish waste generates 60-70% fewer greenhouse gas emissions compared to synthetic polymer production."
      stats={[
        { value: "60-70%", label: "Emission reduction" },
        { value: "Carbon", label: "Footprint decrease" }
      ]}
      icon={<Wind />}
    />
  ];

  const economicSections = [
    <InteractiveDetailCard
      key="revenue-streams"
      title="New Revenue Streams"
      content="What was once considered waste is now converted into high-value collagen-based biomaterials for lucrative industries like biomedical, cosmetic, pharmaceutical, and nutraceuticals. This transformation generates entirely new revenue streams."
      stats={[
        { value: "$2.3B", label: "Annual value potential" },
        { value: "4 sectors", label: "Target industries" }
      ]}
      icon={<DollarSign />}
    />,
    <InteractiveDetailCard
      key="value-addition"
      title="Value Addition"
      content="Upcycling fish by-products fundamentally shifts their perception from waste to valuable raw materials, promoting a more circular economy where resources are maximized. This enhances the overall sustainability and profitability of the Philippine fisheries sector."
      stats={[
        { value: "500%", label: "Value increase" },
        { value: "Circular", label: "Economy model" }
      ]}
      icon={<TrendingUp />}
    />,
    <InteractiveDetailCard
      key="job-creation"
      title="Job Creation & Entrepreneurship"
      content="The entire upcycling process—from waste collection and initial processing to the manufacturing of refined biomaterials—creates new job opportunities across various skill levels. Incentivizing innovations at the municipal level can provide alternative sources of income for fisheries stakeholders."
      stats={[
        { value: "50K+", label: "New jobs created" },
        { value: "Multiple", label: "Skill levels" }
      ]}
      icon={<Briefcase />}
    />,
    <InteractiveDetailCard
      key="global-market"
      title="Global Market Potential"
      content="The export potential for Philippine fish collagen products is substantial. The global collagen market is projected to reach $6.2 billion by 2027, with Asia-Pacific representing a fast-growing region. The Philippines' strategic location, established fisheries infrastructure, and competitive production costs position it advantageously."
      stats={[
        { value: "$6.2B", label: "Global market 2027" },
        { value: "25%", label: "Target market share" }
      ]}
      icon={<Globe />}
    />
  ];

  const socialSections = [
    <InteractiveDetailCard
      key="rural-development"
      title="Rural Development & Poverty Alleviation"
      content="Collagen processing facilities can provide year-round employment opportunities that complement seasonal fishing activities, stabilizing household incomes and contributing to poverty reduction in coastal communities."
      stats={[
        { value: "85%", label: "Fishing workforce supported" },
        { value: "Year-round", label: "Employment stability" }
      ]}
      icon={<Home />}
    />,
    <InteractiveDetailCard
      key="skills-development"
      title="Skills Development & Higher-Value Employment"
      content="The emergence of fish collagen industries creates higher-value employment opportunities, providing workers with technical training in biotechnology processes, quality control, and product development, enhancing their long-term prospects."
      stats={[
        { value: "15K+", label: "Workers trained" },
        { value: "5x", label: "Income increase" }
      ]}
      icon={<GraduationCap />}
    />,
    <InteractiveDetailCard
      key="healthcare-access"
      title="Enhanced Healthcare Access"
      content="Locally-produced, affordable collagen products can improve healthcare access for Filipinos. For instance, Milkfish skin, an economically significant species in the Philippines, shows potential for cost-effective skin grafting, addressing accessibility issues in resource-limited regions."
      stats={[
        { value: "30%", label: "Healthcare improvement" },
        { value: "80%", label: "Cost reduction" }
      ]}
      icon={<Heart />}
    />,
    <InteractiveDetailCard
      key="nutraceutical"
      title="Nutraceutical Benefits"
      content="Collagen peptides from fish waste can be incorporated into dietary supplements and functional foods, addressing nutritional needs and supporting healthy aging for the Filipino population."
      stats={[
        { value: "100%", label: "Natural supplements" },
        { value: "All ages", label: "Health benefits" }
      ]}
      icon={<FlaskConical />}
    />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-800 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <FloatingOrb delay={0} className="top-20 left-10">
          <Sparkles className="w-8 h-8 text-amber-400 opacity-60" />
        </FloatingOrb>
        <FloatingOrb delay={1} className="top-32 right-20">
          <Star className="w-6 h-6 text-orange-400 opacity-40" />
        </FloatingOrb>
        <FloatingOrb delay={2} className="bottom-40 left-1/4">
          <Crown className="w-10 h-10 text-amber-500 opacity-50" />
        </FloatingOrb>
        <FloatingOrb delay={3} className="top-1/2 right-1/3">
          <Lightbulb className="w-7 h-7 text-yellow-500 opacity-45" />
        </FloatingOrb>
        <FloatingOrb delay={4} className="bottom-20 right-10">
          <Zap className="w-9 h-9 text-amber-600 opacity-55" />
        </FloatingOrb>
      </div>

      {/* Hero Section */}
      <section className="relative z-30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.header 
            className="mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex justify-between items-center">
              <motion.h1 
                className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Fish className="w-8 h-8 text-amber-600" />
                FishSkin
              </motion.h1>
              <div className="hidden md:flex space-x-8">
                {['Problem', 'Science', 'Solution', 'Applications', 'Impact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link 
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`hover:text-amber-600 transition-colors duration-300 ${item === 'Impact' ? 'text-amber-600 font-medium' : 'text-gray-600'}`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.header>

          {/* Hero Content - Keep the design you liked */}
          <div className="flex flex-col items-center">
            {/* Animated Central Globe with Ripples */}
            <motion.div 
              className="relative mb-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            >
              <div className="relative w-32 h-32">
                <RippleEffect delay={0} />
                <RippleEffect delay={1} />
                <RippleEffect delay={2} />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="relative z-10 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Globe className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title Stack */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-6 leading-tight">
                TRANSFORMING
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
                The Philippines
              </h3>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                The upcycling of fish waste into collagen-based biomaterials offers transformative opportunities for sustainable development in the Philippines. This innovative approach addresses critical environmental challenges while simultaneously creating substantial economic and social benefits for the nation.
              </motion.p>

              {/* Enhanced Metric Cards - Better Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <EnhancedMetricCard
                  icon={<Waves />}
                  value="1.32M"
                  label="Tonnes Waste/Year"
                  description="Annual fish waste generated in Philippines transformed into valuable resources"
                  color="amber"
                  delay={0.1}
                />
                <EnhancedMetricCard
                  icon={<TrendingUp />}
                  value="$6.2B"
                  label="Global Market"
                  description="Collagen market projection by 2027 with Philippines positioned for leadership"
                  color="orange"
                  delay={0.2}
                />
                <EnhancedMetricCard
                  icon={<Users />}
                  value="50K+"
                  label="Jobs Created"
                  description="Employment opportunities across the complete biotech value chain"
                  color="yellow"
                  delay={0.3}
                />
                <EnhancedMetricCard
                  icon={<Leaf />}
                  value="70%"
                  label="Emission Cut"
                  description="Reduction in greenhouse gas emissions vs synthetic alternatives"
                  color="emerald"
                  delay={0.4}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Impact Showcase */}
      <section className="py-20 bg-white/60 backdrop-blur-lg relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              A Sustainable Future for the Philippines
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visualizing the transformative journey from environmental challenge to global biotechnology leadership
            </p>
          </motion.div>

          <VisualImpactShowcase />
        </div>
      </section>

      {/* Expandable Content Sections */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Environmental Healing */}
          <ExpandableSection
            title="Environmental Healing"
            subtitle="Cleaner Coasts, Healthier Ecosystems"
            icon={<Leaf />}
            delay={0.1}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              This initiative directly confronts the significant environmental challenge posed by the Philippines' robust fisheries sector.
            </p>
            <SlidingContentPanel sections={environmentalSections} title="Environmental Impact Details" />
          </ExpandableSection>

          {/* Economic Growth */}
          <ExpandableSection
            title="Economic Growth"
            subtitle="New Industries, Empowered Communities"
            icon={<TrendingUp />}
            delay={0.2}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              The economic advantages of upcycling fish waste are profound, creating new value from discarded resources.
            </p>
            <SlidingContentPanel sections={economicSections} title="Economic Transformation Details" />
          </ExpandableSection>

          {/* Social Upliftment */}
          <ExpandableSection
            title="Social Upliftment"
            subtitle="Improved Livelihoods, Better Health"
            icon={<Users />}
            delay={0.3}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              The benefits extend beyond environmental and economic spheres, fostering social well-being and community development.
            </p>
            <SlidingContentPanel sections={socialSections} title="Social Impact Details" />
          </ExpandableSection>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white relative z-20 overflow-hidden">
        <WaveAnimation />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">The Future Starts Now</h2>
            <p className="text-2xl mb-12 leading-relaxed opacity-90">
              Fish collagen biomaterials represent more than just a technological breakthrough—they embody a vision of sustainable development 
              where environmental healing, economic prosperity, and social empowerment converge to create lasting positive change for the Philippines and the world.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/applications" className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all text-lg">
                Explore Applications
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link href="/science" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-lg">
                Learn the Science
                <Sparkles className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}