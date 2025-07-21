'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, Sparkles, Heart, Pill, Package, Leaf, Droplets, Shield, Star, Zap, Eye, Microscope, FlaskConical, Palette, Activity, ChevronDown, ChevronRight, ArrowRight, CheckCircle, TrendingUp, Award, Sun, Crown, Atom, Beaker, TestTube, Target, Recycle, Menu, X } from 'lucide-react';
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
    <span className="font-bold text-purple-600">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
    </span>
  );
};

const FloatingParticle = ({ children, delay = 0, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} absolute`}
      animate={{ 
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const PulsingGlow = ({ delay = 0 }) => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full blur-xl"
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.7, 0.3]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const CompoundTable = () => {
  const [activeCompound, setActiveCompound] = useState(null);
  const [filterByproduct, setFilterByproduct] = useState('all');
  const [showAllCompounds, setShowAllCompounds] = useState(false);

  const compounds = [
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Tilapia",
      applications: ["Cartilage tissue engineering"],
      industry: "biomedical",
      icon: <Microscope className="w-5 h-5" />
    },
    {
      compound: "Collagen/polylactide",
      byproduct: "Scale",
      source: "Oreochromis sp.",
      applications: ["Cartilage tissue engineering"],
      industry: "biomedical",
      icon: <TestTube className="w-5 h-5" />
    },
    {
      compound: "Collagen/polyvinylalcohol",
      byproduct: "Skin",
      source: "Paralichtys olivaceus",
      applications: ["Bone regeneration"],
      industry: "biomedical",
      icon: <Activity className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Scale",
      source: "Oreochromis sp.",
      applications: ["Tissue-engineered oral mucosa"],
      industry: "biomedical",
      icon: <FlaskConical className="w-5 h-5" />
    },
    {
      compound: "Collagen/polyvinyl alcohol",
      byproduct: "Not specified",
      source: "Oreochromis sp.",
      applications: ["Human periodontal ligament fibroblasts (hPDLFs)", "gingival fibroblasts (GFs)"],
      industry: "biomedical",
      icon: <Atom className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Scales",
      source: "Oreochromis niloticus",
      applications: ["Bone regeneration"],
      industry: "biomedical",
      icon: <Shield className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Salmo salar",
      applications: ["Bone tissue engineering"],
      industry: "biomedical",
      icon: <Beaker className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Cartilage",
      source: "Prionace glauca, Zarchars chilensis, Bathyraja brachyurops",
      applications: ["Bioscaffold"],
      industry: "biomedical",
      icon: <Target className="w-5 h-5" />
    },
    {
      compound: "Collagen/chitosan",
      byproduct: "Skin",
      source: "Hypophthalmichthys molitrix",
      applications: ["Skin regeneration"],
      industry: "cosmetics",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Oreochromis niloticus",
      applications: ["Wound healing"],
      industry: "healthcare",
      icon: <Heart className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Scale",
      source: "Larimichthys crocea",
      applications: ["Wound healing"],
      industry: "healthcare",
      icon: <Shield className="w-5 h-5" />
    },
    {
      compound: "Collagen nanofibers",
      byproduct: "Skin",
      source: "Oreochromis sp.",
      applications: ["Skin regeneration", "antibacterial"],
      industry: "cosmetics",
      icon: <Star className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Oreochromis sp.",
      applications: ["Wound healing"],
      industry: "healthcare",
      icon: <Activity className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Scale",
      source: "Chenophryngodon idellus",
      applications: ["Wound healing"],
      industry: "healthcare",
      icon: <Droplets className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Lophius litulon",
      applications: ["Antioxidant", "wound healing"],
      industry: "healthcare",
      icon: <Zap className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Oreochromis sp.",
      applications: ["Antioxidant"],
      industry: "healthcare",
      icon: <Sun className="w-5 h-5" />
    },
    {
      compound: "Collagen/chitosan",
      byproduct: "Skin",
      source: "Not specified",
      applications: ["Antioxidant"],
      industry: "healthcare",
      icon: <Crown className="w-5 h-5" />
    },
    {
      compound: "Collagen/gelatin",
      byproduct: "Skin",
      source: "Priacanthus hamrur",
      applications: ["Antioxidant", "antibacterial"],
      industry: "healthcare",
      icon: <Shield className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Swim bladders",
      source: "Nibea japonica",
      applications: ["Antioxidant"],
      industry: "healthcare",
      icon: <Pill className="w-5 h-5" />
    },
    {
      compound: "Collagen/gelatin",
      byproduct: "Cartilage",
      source: "Carcharhinus abbreviatus",
      applications: ["Antioxidant"],
      industry: "healthcare",
      icon: <Beaker className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Scomber japonicus",
      applications: ["Antioxidant"],
      industry: "healthcare",
      icon: <FlaskConical className="w-5 h-5" />
    },
    {
      compound: "Collagen/gelatin",
      byproduct: "Scale",
      source: "Katsuwonus pelamis",
      applications: ["Antioxidant"],
      industry: "healthcare",
      icon: <Microscope className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Prionace glauca",
      applications: ["Food packaging"],
      industry: "food",
      icon: <Package className="w-5 h-5" />
    },
    {
      compound: "Collagen",
      byproduct: "Skin",
      source: "Mugilus musulus",
      applications: ["Food packaging"],
      industry: "food",
      icon: <Package className="w-5 h-5" />
    }
  ];

  const byproducts = ['all', 'Skin', 'Scale', 'Scales', 'Cartilage', 'Swim bladders', 'Not specified'];
  const filteredCompounds = filterByproduct === 'all' 
    ? compounds 
    : compounds.filter(c => c.byproduct === filterByproduct);

  const displayedCompounds = showAllCompounds ? filteredCompounds : filteredCompounds.slice(0, 6);

  const industryColors = {
    biomedical: 'from-purple-500 to-violet-500',
    cosmetics: 'from-pink-500 to-rose-500',
    healthcare: 'from-blue-500 to-indigo-500',
    food: 'from-green-500 to-emerald-500'
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4">
        Compound Applications Matrix (Alfio et al., 2021)
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive overview of fish waste-derived compounds and their diverse applications across industries
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {byproducts.map((byproduct) => (
          <button
            key={byproduct}
            onClick={() => setFilterByproduct(byproduct)}
            className={`px-4 py-2 rounded-full transition-all ${
              filterByproduct === byproduct
                ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            {byproduct === 'all' ? 'All Sources' : byproduct}
          </button>
        ))}
      </div>

      {/* Compounds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCompounds.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br ${industryColors[item.industry]} rounded-2xl p-6 text-white shadow-lg cursor-pointer`}
            onClick={() => setActiveCompound(activeCompound === index ? null : index)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 rounded-lg p-3">
                {item.icon}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full bg-white/20 uppercase tracking-wide font-medium`}>
                {item.industry}
              </div>
            </div>
            
            <h4 className="font-bold text-lg mb-2">{item.compound}</h4>
            <p className="text-white/80 text-sm mb-1">Byproduct: {item.byproduct}</p>
            <p className="text-white/80 text-sm mb-3 italic">Source: {item.source}</p>
            
            <div className="space-y-2">
              {item.applications.slice(0, activeCompound === index ? item.applications.length : 2).map((app, appIndex) => (
                <div key={appIndex} className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
              {item.applications.length > 2 && activeCompound !== index && (
                <div className="text-white/70 text-sm">
                  +{item.applications.length - 2} more applications
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {filteredCompounds.length > 6 && (
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowAllCompounds(!showAllCompounds)}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllCompounds ? (
              <>
                Show Less Compounds
                <ChevronDown className="ml-2 h-5 w-5 rotate-180" />
              </>
            ) : (
              <>
                Show All {filteredCompounds.length} Compounds
                <ChevronDown className="ml-2 h-5 w-5" />
              </>
            )}
          </motion.button>
        </div>
      )}

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">
            <AnimatedCounter end={filteredCompounds.length} />
          </div>
          <div className="text-gray-600">Total Compounds</div>
          <div className="text-xs text-gray-500 mt-1">
            {showAllCompounds ? 'All shown' : `Showing ${displayedCompounds.length} of ${filteredCompounds.length}`}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">
            <AnimatedCounter end={new Set(filteredCompounds.map(c => c.byproduct)).size} />
          </div>
          <div className="text-gray-600">Byproduct Types</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">
            <AnimatedCounter end={new Set(filteredCompounds.map(c => c.source)).size} />
          </div>
          <div className="text-gray-600">Fish Species</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">
            <AnimatedCounter end={filteredCompounds.reduce((acc, c) => acc + c.applications.length, 0)} />
          </div>
          <div className="text-gray-600">Applications</div>
        </div>
      </div>
    </div>
  );
};

const IndustrySection = ({ title, description, icon, color, children, stats = [], delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="mb-12"
    >
      <motion.div
        className={`bg-gradient-to-br ${color} rounded-3xl p-8 shadow-xl border border-white/20 cursor-pointer`}
        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)" }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
              <div className="text-2xl">{icon}</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">{title}</h3>
              <p className="text-white/90 text-lg">{description}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>

        {stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

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

const ApplicationCard = ({ title, description, benefits = [], icon, stats = [], delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300 group"
  >
    <div className="flex items-start mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white text-xl">{icon}</div>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold text-purple-800 mb-2 group-hover:text-purple-700 transition-colors">{title}</h4>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
    
    {benefits.length > 0 && (
      <div className="mb-4">
        <h5 className="font-semibold text-purple-700 mb-2">Key Benefits:</h5>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    )}

    {stats.length > 0 && (
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-purple-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-purple-600">{stat.value}</div>
            <div className="text-xs text-purple-700">{stat.label}</div>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const CollagenVsGelatinComparison = () => {
  const [activeComparison, setActiveComparison] = useState('structure');

  const comparisons = {
    structure: {
      title: "Molecular Structure",
      collagen: {
        title: "Collagen",
        description: "Triple helix structure with intact amino acid chains",
        features: ["Native protein structure", "Higher molecular weight", "Complex crosslinks", "Stable at body temperature"]
      },
      gelatin: {
        title: "Gelatin",
        description: "Denatured collagen with broken hydrogen bonds",
        features: ["Cooked/processed form", "Lower molecular weight", "Gel-forming ability", "Dissolves in warm water"]
      }
    },
    applications: {
      title: "Primary Applications",
      collagen: {
        title: "Collagen Applications",
        description: "Advanced biomedical and cosmetic uses",
        features: ["Tissue engineering", "Wound healing", "Anti-aging cosmetics", "Dietary supplements"]
      },
      gelatin: {
        title: "Gelatin Applications",
        description: "Food industry and pharmaceutical capsules",
        features: ["Food gelling agent", "Pharmaceutical capsules", "Confectionery products", "Photography films"]
      }
    },
    properties: {
      title: "Functional Properties",
      collagen: {
        title: "Collagen Properties",
        description: "Biocompatible with superior mechanical strength",
        features: ["High tensile strength", "Biocompatible", "Non-immunogenic", "Biodegradable"]
      },
      gelatin: {
        title: "Gelatin Properties",
        description: "Thermoreversible with excellent gelling capacity",
        features: ["Thermoreversible gel", "Film-forming ability", "Emulsifying properties", "pH sensitive"]
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-purple-800 mb-4">Collagen vs. Gelatin: Understanding the Difference (He et al., 2021)</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Both derived from fish waste, these compounds serve different purposes across various applications
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full p-2 shadow-lg">
          {Object.entries(comparisons).map(([key, comparison]) => (
            <button
              key={key}
              onClick={() => setActiveComparison(key)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeComparison === key
                  ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white'
                  : 'text-purple-700 hover:bg-purple-50'
              }`}
            >
              {comparison.title}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeComparison}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Collagen Side */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mr-4">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-purple-800">
              {comparisons[activeComparison].collagen.title}
            </h4>
          </div>
          <p className="text-gray-700 mb-4">{comparisons[activeComparison].collagen.description}</p>
          <ul className="space-y-2">
            {comparisons[activeComparison].collagen.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Star className="w-4 h-4 text-purple-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Gelatin Side */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-violet-500">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-violet-800">
              {comparisons[activeComparison].gelatin.title}
            </h4>
          </div>
          <p className="text-gray-700 mb-4">{comparisons[activeComparison].gelatin.description}</p>
          <ul className="space-y-2">
            {comparisons[activeComparison].gelatin.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Zap className="w-4 h-4 text-violet-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default function Applications() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 text-gray-800 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <FloatingParticle delay={0} size="sm" className="top-20 left-10">
          <Sparkles className="w-5 h-5 text-violet-500" />
        </FloatingParticle>
        <FloatingParticle delay={1} size="md" className="top-32 right-20">
          <Star className="w-7 h-7 text-violet-600" />
        </FloatingParticle>
        <FloatingParticle delay={2} size="lg" className="bottom-40 left-1/4">
          <Crown className="w-9 h-9 text-violet-500" />
        </FloatingParticle>
        <FloatingParticle delay={3} size="sm" className="top-1/2 right-1/3">
          <Heart className="w-5 h-5 text-violet-600" />
        </FloatingParticle>
        <FloatingParticle delay={4} size="md" className="bottom-20 right-10">
          <Atom className="w-7 h-7 text-violet-500" />
        </FloatingParticle>
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
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Fish className="w-8 h-8 text-purple-600" />
                FishSkin
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
                      className={`hover:text-purple-600 transition-colors duration-300 ${item === 'Applications' ? 'text-purple-600 font-medium' : 'text-gray-600'}`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
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
                className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-xl border border-purple-400/20 p-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  {['Problem', 'Science', 'Solution', 'Applications', 'Impact', 'References'].map((item, index) => (
                    <Link
                      key={item}
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`block px-4 py-3 rounded-lg text-center transition-colors duration-300 ${
                        item === 'Applications' 
                          ? 'bg-purple-400/20 text-purple-600 font-medium' 
                          : 'text-gray-600 hover:bg-white/10 hover:text-purple-600'
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

          {/* Hero Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative mb-12"
            >
              {/* Interactive Application Network */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0">
                  {/* Central Hub */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-2xl z-20"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <Fish className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Orbiting Application Icons */}
                  {[
                    { icon: <Heart className="w-6 h-6 text-white" />, angle: 0, color: "from-red-500 to-pink-500" },
                    { icon: <Sparkles className="w-6 h-6 text-white" />, angle: 90, color: "from-pink-500 to-rose-500" },
                    { icon: <Package className="w-6 h-6 text-white" />, angle: 180, color: "from-green-500 to-emerald-500" },
                    { icon: <Microscope className="w-6 h-6 text-white" />, angle: 270, color: "from-blue-500 to-indigo-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg`}
                      animate={{
                        rotate: [item.angle, item.angle + 360],
                        x: [
                          Math.cos((item.angle * Math.PI) / 180) * 80,
                          Math.cos(((item.angle + 360) * Math.PI) / 180) * 80
                        ],
                        y: [
                          Math.sin((item.angle * Math.PI) / 180) * 80,
                          Math.sin(((item.angle + 360) * Math.PI) / 180) * 80
                        ]
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                  
                  {/* Connecting Lines */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 256 256">
                      <circle
                        cx="128"
                        cy="128"
                        r="80"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                        opacity="0.6"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                APPLICATIONS
              </h2>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Discover how fish waste-derived collagen and gelatin are <span className="font-bold text-purple-600">revolutionizing multiple industries</span> with sustainable, high-performance biomaterials
              </motion.p>

              {/* Impact Statistics */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-purple-600">
                    <AnimatedCounter end={4} />
                  </div>
                  <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Major Industries (Rajabimashhadi et al., 2023)</p>
                  <p className="text-gray-500 text-xs md:text-sm">Biomedical, cosmetics, food, healthcare sectors transformed</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-purple-600">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Unique Compounds (Zhou et al., 2021)</p>
                  <p className="text-gray-500 text-xs md:text-sm">Different collagen and gelatin formulations for specific uses</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-purple-600">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Applications (Al-Nimry et al., 2021)</p>
                  <p className="text-gray-500 text-xs md:text-sm">From wound healing to food packaging solutions</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-purple-600">
                    100%
                  </div>
                  <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Halal Compliant (Al-Nimry et al., 2021)</p>
                  <p className="text-gray-500 text-xs md:text-sm">Fish-derived materials safe for all religious communities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Introduction */}
      <section className="py-20 bg-white/60 backdrop-blur-lg relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-8">
              Understanding Fish-Derived Biomaterials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800">What is Collagen?</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Collagen is the most abundant protein in your body, providing structural support to skin, bones, tendons, and other connective tissues. In fish waste, collagen is predominantly found in skin, scales, and bones.
                </p>
                <p className="leading-relaxed">
                  Fish collagen consists of three polypeptide chains arranged in a triple helix structure, with each chain containing approximately 1,000 amino acids in a characteristic Gly-X-Y sequence pattern, where X is often proline and Y is often hydroxyproline. (Collagen vs. Gelatin: Which to Choose?, 2020)
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Key Properties:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Native protein structure with intact amino acid chains</li>
                    <li>• Higher molecular weight (approximately 300 kDa)</li>
                    <li>• Superior biocompatibility and biodegradability</li>
                    <li>• Lower denaturation temperature (15-29°C) than mammalian collagen</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-violet-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-violet-800">What is Gelatin?</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Gelatin is a hydrocolloid food ingredient that is essentially a cooked form of collagen. When collagen is heated and processed, its triple helix structure breaks down, creating gelatin with unique functional properties.
                </p>
                <p className="leading-relaxed">
                  This transformation makes gelatin an excellent gelling agent, commonly used in the food industry as a foam-former, stabilizer, thickener, and binder in products like candies, jellies, marshmallows, yogurts, ice cream, and processed meats. (Collagen vs. Gelatin: Which to Choose?, 2020)
                </p>
                <div className="bg-violet-50 rounded-lg p-4">
                  <h4 className="font-semibold text-violet-800 mb-2">Key Properties:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Denatured collagen with broken hydrogen bonds</li>
                    <li>• Thermoreversible gel-forming ability</li>
                    <li>• Excellent film-forming and emulsifying properties</li>
                    <li>• pH sensitive with superior dissolution properties</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-200"
          >
            <h3 className="text-2xl font-bold text-center text-purple-800 mb-6">The Halal Advantage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Religious Compliance</h4>
                <p className="text-gray-600 text-sm">Fish gelatin provides a halal (permissible) alternative to traditional pork-based gelatin, making it suitable for Muslim consumers worldwide. (Al-Nimry et al., 2021)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Superior Safety</h4>
                <p className="text-gray-600 text-sm">Fish-derived materials avoid health risks associated with mammalian sources, including no risk of BSE or other zoonotic diseases. (Jafari et al., 2020)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Similar Performance</h4>
                <p className="text-gray-600 text-sm">Research shows similar properties between poultry, fish, and pig gelatins, with fish species like tilapia and catfish showing excellent gel-forming ability. (Al-Nimry et al., 2021)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collagen vs Gelatin Comparison */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CollagenVsGelatinComparison />
          </motion.div>
        </div>
      </section>

      {/* Compound Applications Table */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CompoundTable />
          </motion.div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Food Industry */}
          <IndustrySection
            title="Food Industry Revolution (Al-Nimry et al., 2021) "
            description="Fish gelatin transforming food manufacturing with superior properties"
            icon={<Package />}
            color="from-green-500 to-emerald-500"
            stats={[
              { value: "$4B+", label: "Global gelatin market" },
              { value: "8-10%", label: "Annual growth rate" },
              { value: "100%", label: "Halal compliance" }
            ]}
            delay={0.1}
          >
            <div className="space-y-8">
              {/* Detailed Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-green-200"
              >
                <h4 className="text-2xl font-bold text-green-800 mb-4">The Gelatin Revolution in Food Manufacturing (Valcarcel et al., 2021)</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Gelatin is a hydrocolloid food ingredient commonly used in the food industry due to its exceptional functional properties. 
                  Fish gelatin, extracted from fish skin and bones, represents a revolutionary halal substitute to traditional pig- and cattle-derived gelatin. 
                  Research demonstrates that fish species like tilapia, catfish, and rohu show similar properties to mammalian gelatins while providing 
                  superior advantages in terms of religious compliance and safety.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Market Drivers</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Growing Muslim population requiring halal alternatives</li>
                      <li>• Increasing health consciousness about mammalian sources</li>
                      <li>• Rising demand for sustainable ingredients</li>
                      <li>• Superior functional properties in food applications</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Competitive Advantages</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• No religious or cultural restrictions</li>
                      <li>• Zero risk of zoonotic disease transmission</li>
                      <li>• Excellent gel-forming ability</li>
                      <li>• Sustainable waste-to-value transformation</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Specific Applications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ApplicationCard
                  title="Confectionery Products (Hsu et al., 2021)"
                  description="Fish gelatin excels in candies, jellies, and marshmallows, providing superior gel strength and crystal-clear appearance."
                  benefits={[
                    "Gummy bears and fruit snacks with perfect texture",
                    "Marshmallows with excellent foam stability",
                    "Jelly desserts with crystal-clear transparency",
                    "Wine gums with optimal chewiness"
                  ]}
                  icon={<Star />}
                  stats={[
                    { value: "Superior", label: "Gel strength" },
                    { value: "Crystal", label: "Clear gels" }
                  ]}
                />
                
                <ApplicationCard
                  title="Dairy & Frozen Products (Usman et al., 2021)"
                  description="Enhanced functionality in yogurts, ice cream, and frozen desserts through superior stabilization properties."
                  benefits={[
                    "Improved texture and mouthfeel in yogurts",
                    "Prevents ice crystal formation in ice cream",
                    "Enhanced stability in frozen mousses",
                    "Better protein integration in dairy formulations"
                  ]}
                  icon={<Droplets />}
                  stats={[
                    { value: "Enhanced", label: "Stability" },
                    { value: "Smooth", label: "Texture" }
                  ]}
                />

                <ApplicationCard
                  title="Meat Processing"
                  description="Essential binding and water retention properties in processed meats, sausages, and nuggets.  (Khirzin and Fatkhorrohman, 2019; Aljawish and Chevalot, 2019, as cited in Asmawati et al., 2023)."
                  benefits={[
                    "Superior water binding in sausages",
                    "Improved texture in chicken nuggets",
                    "Enhanced juiciness in processed meats",
                    "Better slice ability in deli products"
                  ]}
                  icon={<Shield />}
                  stats={[
                    { value: "Superior", label: "Binding" },
                    { value: "Enhanced", label: "Juiciness" }
                  ]}
                />
              </div>

         
            </div>
          </IndustrySection>

          {/* Healthcare & Pharmaceuticals */}
          <IndustrySection
            title="Healthcare & Pharmaceutical Innovation (Kulkarni & Maniyar, 2020)"
            description="Revolutionary medical applications transforming patient care"
            icon={<Heart />}
            color="from-blue-500 to-indigo-500"
            stats={[
              { value: "95%", label: "Biocompatibility" },
              { value: "30-60 days", label: "Biodegradation" },
              { value: "Zero", label: "Toxicity risk" }
            ]}
            delay={0.2}
          >
            <div className="space-y-8">
              {/* Detailed Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-blue-200"
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-4">Advanced Medical Applications</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fish waste can be upcycled into a variety of medical products with remarkable therapeutic utilities. Components from seemingly 
                  unremarkable parts like skin, scales, and bones contain valuable substances that can be processed into medical devices and 
                  pharmaceutical products. Fish collagen takes advantage of collagen's crucial role in the healing process, serving as temporary 
                  scaffolds to aid in cell migration and tissue regeneration. (Brennan and Grandison, 2009, as cited in Asmawati et al., 2023)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Source Materials</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Fish skin - primary collagen source</li>
                      <li>• Fish scales - structural proteins</li>
                      <li>• Fish bones - mineral-rich collagen</li>
                      <li>• Fish cartilage - specialized matrix</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Therapeutic Properties</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Excellent biocompatibility</li>
                      <li>• Natural biodegradability</li>
                      <li>• Anti-inflammatory effects</li>
                      <li>• Enhanced cell adhesion</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Clinical Advantages</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• No immunogenic reactions</li>
                      <li>• Faster tissue integration</li>
                      <li>• Cost-effective production</li>
                      <li>• Sustainable sourcing</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Specific Medical Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ApplicationCard
                  title="Revolutionary Wound Healing Patches (Ragaza & Go, 2024)"
                  description="Fish-derived healing patches and skin grafts show remarkable effectiveness, with tilapia and milkfish demonstrating exceptional clinical results."
                  benefits={[
                    "Complete epithelial tissue formation within 14 days",
                    "Patches can be modified with antibiotics and growth factors",
                    "Temporary scaffolds aid cell migration and proliferation",
                    "Completely biodegradable - no removal needed",
                    "Significant reduction in healing time and scarring"
                  ]}
                  icon={<Shield />}
                  stats={[
                    { value: "40%", label: "Faster healing (Lee, 2023)" },
                    { value: "2X", label: "Twice the vascularization and double the expression of antimicrobial defensin peptides (Pal et al., 2024)" }
                  ]}
                />
                
                <ApplicationCard
                  title="Advanced Pharmaceutical Applications (Al-Nimry et al., 2021)"
                  description="Fish gelatin revolutionizes pharmaceutical capsules, tablets, and supplement delivery with superior properties and religious compliance."
                  benefits={[
                    "Superior dissolution properties for faster drug release",
                    "Stable encapsulation for sensitive compounds",
                    "Halal-compliant alternative to mammalian sources",
                    "Enhanced bioavailability of active ingredients",
                    "Reduced manufacturing costs and improved stability"
                  ]}
                  icon={<Pill />}
                  stats={[
                    { value: "4–8 minutes", label: "Rapid dissolution at pH ≤6.8 (Fazial et al., 2023)" },
                    { value: "Enhanced", label: "Bioavailability" }
                  ]}
                />
              </div>

              {/* Tissue Engineering Applications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center">Tissue Engineering Breakthroughs (Rajabimashhadi et al., 2023)</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-blue-800 mb-2">Bone Regeneration</h5>
                    <p className="text-sm text-gray-600">Collagen scaffolds from fish scales and bones promote natural bone tissue formation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-blue-800 mb-2">Cartilage Repair</h5>
                    <p className="text-sm text-gray-600">Specialized cartilage-derived collagen for joint and tissue reconstruction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-blue-800 mb-2">Skin Regeneration</h5>
                    <p className="text-sm text-gray-600">Nanofiber collagen structures for accelerated skin healing and regeneration</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Atom className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-blue-800 mb-2">Bioscaffolds</h5>
                    <p className="text-sm text-gray-600">Three-dimensional matrices supporting complex tissue engineering applications</p>
                  </div>
                </div>
              </motion.div>

              {/* Clinical Research Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-blue-200"
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-6">Clinical Research Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-3 flex items-center">
                      <Fish className="w-5 h-5 mr-2" />
                      Tilapia Skin Research (Song et al., 2020)
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Clinical studies on tilapia skin grafts have shown remarkable effectiveness in burn treatment and wound healing. 
                      The cost-effective nature makes it particularly valuable for resource-limited regions, addressing accessibility 
                      issues in healthcare.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">98%</div>
                      <div className="text-xs text-blue-700">Treatment success rate</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-3 flex items-center">
                      <Fish className="w-5 h-5 mr-2" />
                      Milkfish Applications (Ragaza & Go, 2024)
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Milkfish, an economically significant species in the Philippines, shows exceptional potential for skin grafting 
                      applications. Research demonstrates superior healing properties and cost-effectiveness for widespread medical use.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">80%</div>
                      <div className="text-xs text-blue-700">Cost reduction achieved</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </IndustrySection>

          {/* Cosmetics Industry */}
          <IndustrySection
            title="Cosmetics & Personal Care Revolution (Martins et al., 2023)"
            description="Marine collagen transforming beauty and personal care industries"
            icon={<Sparkles />}
            color="from-pink-500 to-rose-500"
            stats={[
              { value: "25-30%", label: "Hydration increase" },
              { value: "15-20%", label: "Elasticity improvement" },
              { value: "$4B+", label: "Global market value" }
            ]}
            delay={0.3}
          >
            <div className="space-y-8">
              {/* Detailed Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-pink-200"
              >
                <h4 className="text-2xl font-bold text-pink-800 mb-4">Marine Collagen in Beauty Applications</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Marine-based collagen is rapidly gaining traction in Southeast Asia due to its superior properties compared to mammalian sources. 
                  Fish collagen excels in improving skin elasticity, increasing hydration, and reducing wrinkle formation. Beyond traditional skincare, 
                  biodegradable collagen combined with other bioactive compounds offers eco-friendly and effective alternatives for comprehensive beauty care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h5 className="font-semibold text-pink-800 mb-2">Market Advantages (Meticulous Research, 2024)</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Rapid market growth in Southeast Asia</li>
                      <li>• Superior biocompatibility and absorption</li>
                      <li>• Sustainable and eco-friendly sourcing</li>
                      <li>• Diverse application possibilities</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h5 className="font-semibold text-pink-800 mb-2">Product Applications</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Anti-aging creams and serums</li>
                      <li>• Dietary supplement pills</li>
                      <li>• Injectable filler treatments</li>
                      <li>• Hair care and scalp treatments</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Specific Applications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ApplicationCard
                  title="Advanced Anti-Aging Formulations"
                  description="Marine collagen demonstrates superior anti-aging properties with measurable improvements in skin health and appearance."
                  benefits={[
                    "25-30% increase in skin hydration levels (Jadach & Mielcarek, 2024)",
                    "15-20% improvement in skin elasticity (Jadach & Mielcarek, 2024)",
                    "Enhanced skin barrier function and protection (Campalani et al., 2022)",
                    "The smaller molecular size of fish collagen allows for better skin penetration and bioavailability (Jadach & Mielcarek, 2024)."
                  ]}
                  icon={<Star />}
                  stats={[
                    { value: "27.5%", label: "Hydration boost" },
                    { value: "15-20%", label: "Elasticity gain" }
                  ]}
                />
                
                <ApplicationCard
                  title="Revolutionary Hair Care Innovation (Titan Biotech Limited, 2024)"
                  description="Biodegradable collagen derived from fish, especially when combined with hyaluronic acid, ceramides, and raspberry oil, offers an eco-friendly and effective alternative for hair care. This blend helps protect hair from environmental damage while enhancing the overall health of both hair and skin (Igielska-Kalwat et al., 2022)."
                  benefits={[
                    "Protection from environmental damage",
                    "Enhanced hair strength and natural shine",
                    "Improved scalp health and circulation",
                    "Eco-friendly and sustainable formulation",
                    "Multifunctional hair and skin benefits"
                  ]}
                  icon={<Crown />}
                  stats={[
                    { value: "Eco", label: "Friendly" },

                    { value: "Multi", label: "Function" }
                  ]}
                />

                <ApplicationCard
                  title="Injectable Beauty Treatments"
                  description="Marine collagen for cosmetic injections and dermal fillers providing natural-looking results with superior safety profiles."
                  benefits={[
                    "Natural-looking volumizing effects",
                    "Reduced risk of allergic reactions (Rajabimashhadi et al., 2023)",
                    "Longer-lasting results than synthetic fillers",
                    "Stimulates natural collagen production (Kester, 2020)",
                    "Gradual and natural absorption"
                  ]}
                  icon={<Eye />}
                  stats={[
                    { value: "Natural", label: "Results" },
                    { value: "Safe", label: "Profile" }
                  ]}
                />
              </div>

              {/* Scientific Research */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200"
              >
                <h4 className="text-2xl font-bold text-pink-800 mb-6 text-center">Scientific Research Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">8-12 weeks</div>
                    <div className="text-sm text-pink-700 font-medium">Treatment Duration</div>
                    <div className="text-xs text-gray-600 mt-1">For measurable skin improvements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">Superior</div>
                    <div className="text-sm text-pink-700 font-medium">Absorption Rate</div>
                    <div className="text-xs text-gray-600 mt-1">Compared to mammalian collagen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">Global</div>
                    <div className="text-sm text-pink-700 font-medium">Market Growth</div>
                    <div className="text-xs text-gray-600 mt-1">8-10% annual increase</div>
                  </div>
                </div>
              </motion.div>

              {/* Clinical Study Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-pink-200"
              >
                <h4 className="text-2xl font-bold text-pink-800 mb-6">Clinical Study Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-pink-700 mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Skin Health Improvements
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                        <span className="text-sm text-gray-700">Hydration Increase</span>
                        <span className="font-bold text-pink-600">25-30%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                        <span className="text-sm text-gray-700">Elasticity Improvement</span>
                        <span className="font-bold text-pink-600">15-20%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                        <span className="text-sm text-gray-700">Wrinkle Reduction</span>
                        <span className="font-bold text-pink-600">10-15%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-pink-700 mb-3 flex items-center">
                      <Crown className="w-5 h-5 mr-2" />
                      Hair Care Benefits
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Biodegradable collagen formulations enhance the overall health of both hair and skin while protecting against 
                      environmental damage. Combined with hyaluronic acid, ceramides, and raspberry oil, these formulations provide 
                      comprehensive beauty benefits in eco-friendly packages.
                    </p>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-pink-600">100%</div>
                      <div className="text-xs text-pink-700">Eco-friendly formulation</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </IndustrySection>

          {/* Environmental Sector */}
          <IndustrySection
            title="Environmental Solutions & Sustainability (Cooney et al., 2023)"
            description="Revolutionary eco-friendly materials and waste reduction technologies"
            icon={<Leaf />}
            color="from-emerald-500 to-teal-500"
            stats={[
              { value: "70%", label: "UV protection" },
              { value: "48%", label: "Flexibility increase" },
              { value: "1.32M", label: "Tonnes waste/year" }
            ]}
            delay={0.4}
          >
            <div className="space-y-8">
              {/* Detailed Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-emerald-200"
              >
                <h4 className="text-2xl font-bold text-emerald-800 mb-4">Environmental Impact and Waste Transformation (De Ungria et al., 2023)</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The environmental sector greatly benefits from fish waste upcycling technology. The Philippines generates approximately 
                  1.1-1.32 million metric tons of fish waste annually, representing 25-30% of fish production lost due to improper harvesting. 
                  The introduction of upcycling reduces waste volume, decreases landfill burden, and assists in resolving greenhouse gas emissions 
                  while maximizing resource efficiency and promoting sustainable practices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h5 className="font-semibold text-emerald-800 mb-2">Waste Reduction</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 1.1-1.32 million metric tons annually</li>
                      <li>• 25-30% of total fish production</li>
                      <li>• Comprehensive utilization strategy</li>
                      <li>• Zero waste to landfill goal</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h5 className="font-semibold text-emerald-800 mb-2">Environmental Benefits</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Reduced greenhouse gas emissions</li>
                      <li>• Lower pollution in immediate vicinity</li>
                      <li>• Sustainable resource utilization</li>
                      <li>• Circular economy promotion</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h5 className="font-semibold text-emerald-800 mb-2">Economic Opportunities</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• New revenue streams creation</li>
                      <li>• Job opportunities in processing</li>
                      <li>• Value-added product development</li>
                      <li>• Export potential enhancement</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Specific Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ApplicationCard
                  title="Advanced Biodegradable Packaging Films (Campalani et al., 2022)"
                  description="Fish gelatin films enhanced with carbon dots deliver superior performance in UV protection, flexibility, and environmental sustainability."
                  benefits={[
                    "70% UV ray blocking capability while maintaining transparency",
                    "48% improvement in flexibility (elongation at break: 27% to 40%)",
                    "Reduced water vapor permeability for better preservation",
                    "Only 5% reduction in transparency (88.6% to 84.4%)",
                    "Complete biodegradability in natural conditions"
                  ]}
                  icon={<Package />}
                  stats={[
                    { value: "70%", label: "UV blocking" },
                    { value: "48%", label: "Flexibility gain" }
                  ]}
                />
                
                <ApplicationCard
                  title="Comprehensive Waste Stream Transformation (De Ungria et al., 2023"
                  description="Revolutionary approach converting entire fish waste streams into valuable biomaterials, addressing the Philippines' massive annual waste challenge."
                  benefits={[
                    "Complete utilization of 1.1-1.32 million metric tons annually",
                    "Transformation of 20%-80% processing waste into value",
                    "Significant reduction in landfill burden and pollution",
                    "Lower greenhouse gas emissions from waste decomposition",
                    "Circular economy model implementation"
                  ]}
                  icon={<Recycle />}
                  stats={[
                    { value: "1.32M", label: "Tonnes/year" },
                    { value: "100%", label: "Utilization" }
                  ]}
                />
              </div>

              {/* Technical Innovation Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200"
              >
                <h4 className="text-2xl font-bold text-emerald-800 mb-6 text-center">Carbon Dot Enhancement Technology (Campalani et al., 2022)</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">70%</div>
                    <div className="text-sm text-emerald-700 font-medium">UV Protection</div>
                    <div className="text-xs text-gray-600 mt-1">Nearly 70% of harmful UV rays blocked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">48%</div>
                    <div className="text-sm text-emerald-700 font-medium">Flexibility Boost</div>
                    <div className="text-xs text-gray-600 mt-1">Elongation at break improved significantly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">5%</div>
                    <div className="text-sm text-emerald-700 font-medium">Transparency Loss</div>
                    <div className="text-xs text-gray-600 mt-1">Minimal impact on visual clarity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">Enhanced</div>
                    <div className="text-sm text-emerald-700 font-medium">Barrier Properties</div>
                    <div className="text-xs text-gray-600 mt-1">Reduced water vapor permeability</div>
                  </div>
                </div>
              </motion.div>

              {/* Future Applications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-emerald-200"
              >
                <h4 className="text-2xl font-bold text-emerald-800 mb-6">Emerging Environmental Applications (Alfio et al., 2021)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-emerald-800 mb-2">Omega-3 Supplements</h5>
                    <p className="text-sm text-gray-600">High-quality, health-boosting omega-3 concentrates from fish waste requiring enhanced purity and stability research</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-emerald-800 mb-2">Agricultural Films</h5>
                    <p className="text-sm text-gray-600">Biodegradable agricultural mulch films and greenhouse coverings with enhanced UV protection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Recycle className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-emerald-800 mb-2">Circular Economy</h5>
                    <p className="text-sm text-gray-600">Complete circular economy models promoting sustainable practices and eco-friendly approach to seafood resources</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </IndustrySection>

        </div>
      </section>

      {/* Future Applications */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Emerging Applications & Future Research</h2>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90">
              The future holds even more exciting possibilities for fish waste-derived biomaterials, with ongoing research advancing 
              sustainable practices and unlocking new potential in marine resource utilization
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8"
              >
                <Atom className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Omega-3</h3>
                <p className="opacity-90 leading-relaxed">
                Fish waste is increasingly being explored as a valuable source for producing omega-3 supplements, turning what was once discarded into high-quality, health-boosting products. However, further research is needed to ensure these omega-3 concentrates are pure, stable, safe, and easily absorbed by the body. Advancing sustainable practices and clearly communicating these benefits to consumers will be key to unlocking the full potential of fish waste and promoting a more circular, eco-friendly approach to seafood resources (Alfio et al., 2021).       </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8"
              >
                <Microscope className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Scaffolds</h3>
                <p className="opacity-90 leading-relaxed">
                These materials can be fabricated into various forms including sponges, films, membranes, hydrogels, scaffolds, and injectable matrices, each designed for specific applications based on their mechanical, biological, and chemical properties (Chattopadhyay & Raines, 2014).
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8"
              >
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nutritional supplements</h3>
                <p className="opacity-90 leading-relaxed">
                Collagen peptides from fish waste can be incorporated into dietary supplements and functional foods, addressing nutritional needs and supporting healthy aging for the Filipino population (Nurubhasha et al., 2019).

         </p>    </motion.div>
            </div>

            {/* Research Priorities Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-left"
            >
              <h3 className="text-3xl font-bold text-center mb-8">Critical Research Priorities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <FlaskConical className="w-6 h-6 mr-3" />
                    Omega-3 Research Focus
                  </h4>
                  <p className="opacity-90 leading-relaxed mb-4">
                    Further research is needed to ensure omega-3 concentrates from fish waste are pure, stable, safe, 
                    and easily absorbed by the body. This research will be crucial for unlocking the full potential 
                    of fish waste in the nutraceutical industry.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Key Research Areas (Valcarcel et al., 2021):</h5>
                    <ul className="space-y-1 text-sm opacity-80">
                      <li>• Purity optimization and contaminant removal</li>
                      <li>• Stability enhancement for longer shelf life</li>
                      <li>• Safety testing and regulatory compliance</li>
                      <li>• Bioavailability and absorption improvement</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <Leaf className="w-6 h-6 mr-3" />
                    Sustainable Practices
                  </h4>
                  <p className="opacity-90 leading-relaxed mb-4">
                    Advancing sustainable practices and clearly communicating benefits to consumers will be key to 
                    promoting a more circular, eco-friendly approach to seafood resources and marine sustainability.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Implementation Goals (Penca, 2020):</h5>
                    <ul className="space-y-1 text-sm opacity-80">
                      <li>• Circular economy model development</li>
                      <li>• Consumer education and awareness</li>
                      <li>• Sustainable supply chain optimization</li>
                      <li>• Environmental impact minimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-8">
              Transforming Industries, One Application at a Time
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Fish waste-derived collagen and gelatin represent the future of sustainable biomaterials, 
              offering superior performance while addressing environmental challenges across multiple industries.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/impact" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                See Impact On Philippines
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/science" className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-all">
                Learn the Science
                <Microscope className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 