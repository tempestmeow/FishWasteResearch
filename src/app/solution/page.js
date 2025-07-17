'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, Target, TrendingUp, Zap, Recycle, Shield, Globe, BarChart3, PieChart, CheckCircle2, ArrowUpRight, Star, Award, Sparkles, FlaskConical, Factory, Layers, ArrowRight, ChevronDown, Clock, Settings, Beaker, Microscope, Droplet, Leaf, TreePine } from 'lucide-react';
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

const ProcessFlowChart = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const processSteps = [
    {
      id: 1,
      title: "Fish Waste Collection & Sorting",
      icon: <Fish className="w-8 h-8" />,
      duration: "1-2 hours",
      description: "Strategic collection and categorization of fish waste from processing facilities",
      details: [
        "Collection from fish processing plants, markets, and aquaculture facilities",
        "Separation by waste type: skin (highest collagen content 15-27%), bones (0.1-5.09%), scales (3-5%)",
        "Quality assessment and contamination screening",
        "Temperature-controlled storage at 2-4°C to prevent degradation",
        "Documentation of source, species, and processing conditions for traceability"
      ],
      inputs: ["Fresh fish waste", "Processing facility coordination", "Cold storage systems"],
      outputs: ["Sorted high-quality waste streams", "Quality documentation", "Refrigerated inventory"]
    },
    {
      id: 2,
      title: "Pre-Treatment & Preparation",
      icon: <Settings className="w-8 h-8" />,
      duration: "2-4 hours",
      description: "Comprehensive cleaning and preparation for optimal collagen extraction",
      details: [
        "Thorough washing with distilled water to remove surface contaminants and blood residues",
        "Mechanical size reduction using industrial grinders (optimal particle size: 2-5mm)",
        "Defatting process using organic solvents or enzymatic treatment to remove lipids",
        "pH adjustment to optimal range (7.0-8.0) using buffer solutions",
        "Final inspection and quality control before extraction process initiation"
      ],
      inputs: ["Sorted fish waste", "Distilled water", "Grinding equipment", "pH buffers"],
      outputs: ["Clean processed waste", "Optimal particle size", "pH-balanced material"]
    },
    {
      id: 3,
      title: "Advanced Extraction Process",
      icon: <FlaskConical className="w-8 h-8" />,
      duration: "6-12 hours",
      description: "Multi-stage collagen extraction using optimized acid solubilization",
      details: [
        "Primary extraction using 0.5M acetic acid solution at controlled temperature (25-30°C)",
        "Ultrasound-assisted extraction for 2.7x yield improvement (20-30 minutes vs traditional 72 hours)",
        "Secondary extraction with pepsin enzyme treatment for enhanced collagen solubility",
        "Continuous monitoring of pH, temperature, and extraction efficiency",
        "Real-time quality control testing for collagen purity and molecular weight distribution"
      ],
      inputs: ["Prepared fish waste", "Acetic acid solution", "Pepsin enzyme", "Ultrasound equipment"],
      outputs: ["Collagen solution", "Extraction efficiency data", "Quality parameters"]
    },
    {
      id: 4,
      title: "Purification & Concentration",
      icon: <Droplet className="w-8 h-8" />,
      duration: "4-8 hours",
      description: "Advanced purification and concentration for pharmaceutical-grade quality",
      details: [
        "Multi-stage filtration: coarse filtration → fine filtration → ultrafiltration (10 kDa cutoff)",
        "Salt precipitation using controlled NaCl addition for collagen separation",
        "Dialysis treatment for salt removal and pH neutralization over 24-48 hours",
        "Concentration using rotary evaporation or freeze concentration methods",
        "Final purity testing: protein content >95%, minimal ash content <2%"
      ],
      inputs: ["Raw collagen solution", "Filter systems", "NaCl solution", "Dialysis equipment"],
      outputs: ["Purified collagen", "Concentrated solution", "Quality certificates"]
    },
    {
      id: 5,
      title: "Final Processing & Applications",
      icon: <Factory className="w-8 h-8" />,
      duration: "2-6 hours",
      description: "Conversion into specific end products based on application requirements",
      details: [
        "Freeze-drying for powder form: maintains structural integrity and extends shelf life to 24+ months",
        "Film casting for packaging applications: creates flexible, biodegradable sheets",
        "Hydrogel formation for biomedical uses: crosslinking for specific mechanical properties",
        "Microsphere production for drug delivery: controlled particle size 10-200 μm",
        "Quality assurance testing: tensile strength, biodegradation rate, biocompatibility"
      ],
      inputs: ["Purified collagen", "Processing equipment", "Crosslinking agents", "Testing protocols"],
      outputs: ["Market-ready products", "Quality documentation", "Application-specific materials"]
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-slate-800">Complete Solution Process Flow</h3>
  
      </div>

      {/* Process Flow Visualization */}
      <div className="relative mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`relative p-6 rounded-2xl cursor-pointer transition-all ${
                  activeStep === index
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl scale-105'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: activeStep === index ? 1.05 : 1.02 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full mb-4 ${
                    activeStep === index ? 'bg-white/20' : 'bg-emerald-200'
                  }`}>
                    <div className={activeStep === index ? 'text-white' : 'text-emerald-600'}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="font-bold text-lg mb-2">{step.title}</div>
                  <div className={`text-sm ${activeStep === index ? 'text-white/80' : 'text-emerald-600'}`}>
                    {step.duration}
                  </div>
                </div>
          
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  activeStep === index ? 'bg-white text-emerald-600' : 'bg-emerald-600 text-white'
                }`}>
                  {step.id}
                </div>
              </motion.div>

           
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-emerald-400" />
                </div>
              )}
              {index < processSteps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <ChevronDown className="w-6 h-6 text-emerald-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              {processSteps[activeStep].title}
            </h4>
            <p className="text-lg text-slate-600 mb-6">
              {processSteps[activeStep].description}
            </p>
            
           (
              <div className="space-y-3">
                <h5 className="font-semibold text-emerald-700">Detailed Process Steps:</h5>
                <ul className="space-y-2">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h5 className="font-semibold text-emerald-700 mb-3">Process Inputs</h5>
              <ul className="space-y-2">
                {processSteps[activeStep].inputs.map((input, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-slate-600">{input}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h5 className="font-semibold text-teal-700 mb-3">Process Outputs</h5>
              <ul className="space-y-2">
                {processSteps[activeStep].outputs.map((output, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-slate-600">{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ImplementationMethodology = () => {
  const [activePhase, setActivePhase] = useState(0);

  const implementationPhases = [
    {
      phase: "Phase I: Infrastructure Development",
      timeline: "Months 1-6",
      description: "Establishing foundational processing capabilities and quality systems",
      objectives: [
        "Secure strategic partnerships with major fish processing facilities across key regions",
        "Design and construct state-of-the-art extraction facilities with ISO 9001:2015 certification",
        "Implement comprehensive quality management systems including HACCP protocols",
        "Develop standardized operating procedures for each process step",
        "Establish cold chain logistics network for waste collection and transport"
      ],
      deliverables: [
        "3-5 processing facilities operational",
        "Quality management certification",
        "Standardized process documentation",
        "Logistics network established",
        "Initial production capacity: 50 tonnes/month"
      ],
      keyMetrics: {
        "Facility Capacity": "500 kg/day per facility",
        "Quality Standards": "ISO 9001:2015 + HACCP",
        "Collection Network": "15+ partner facilities",
        "Process Efficiency": "85%+ extraction yield"
      }
    },
    {
      phase: "Phase II: Market Penetration",
      timeline: "Months 7-18",
      description: "Scaling production and establishing market presence across target industries",
      objectives: [
        "Launch biomedical collagen products with FDA/CE marking regulatory approval",
        "Establish distribution partnerships with major cosmetics and pharmaceutical companies",
        "Develop proprietary packaging film products for food industry applications",
        "Implement advanced quality control systems with real-time monitoring",
        "Scale production capacity to meet initial market demand requirements"
      ],
      deliverables: [
        "FDA/CE regulatory approvals",
        "5+ major distribution partnerships",
        "3 product lines operational",
        "Advanced QC systems deployed",
        "Production capacity: 200 tonnes/month"
      ],
      keyMetrics: {
        "Market Penetration": "3 key industry verticals",
        "Product Lines": "Biomedical, cosmetic, packaging",
        "Production Scale": "2000 kg/day total capacity",
        "Quality Compliance": "99.9% batch approval rate"
      }
    },
    {
      phase: "Phase III: Innovation & Expansion",
      timeline: "Months 19-36",
      description: "Advanced product development and international market expansion",
      objectives: [
        "Develop next-generation bioengineered collagen with enhanced properties",
        "Expand into emerging markets including drug delivery and tissue engineering",
        "Establish international operations in Southeast Asia and European markets",
        "Implement AI-driven process optimization for maximum efficiency and yield",
        "Achieve carbon-neutral operations through renewable energy integration"
      ],
      deliverables: [
        "Next-gen product portfolio",
        "International market entry",
        "AI optimization systems",
        "Carbon-neutral certification",
        "Production capacity: 500 tonnes/month"
      ],
      keyMetrics: {
        "R&D Investment": "$10M+ in innovation",
        "International Presence": "5+ countries",
        "Technology Integration": "AI-driven optimization",
        "Sustainability": "100% carbon neutral"
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-8 border border-emerald-100">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Strategic Implementation Methodology
        </h3>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A comprehensive 3-phase approach to scaling fish collagen biomaterials from laboratory innovation to global market leadership
        </p>
      </div>

      {/* Phase Timeline */}
      <div className="relative mb-12">
        <div className="flex justify-between items-center mb-8">
          {implementationPhases.map((phase, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActivePhase(index)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  activePhase === index
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {index + 1}
              </motion.div>
              <div className={`mt-2 text-sm font-medium ${
                activePhase === index ? 'text-emerald-600' : 'text-slate-500'
              }`}>
                {phase.timeline}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Progress Line */}
        <div className="absolute top-6 left-6 right-6 h-1 bg-emerald-200 rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((activePhase + 1) / implementationPhases.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Active Phase Details */}
      <motion.div
        key={activePhase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-2">
              {implementationPhases[activePhase].phase}
            </h4>
            <p className="text-emerald-600 font-medium mb-4">
              {implementationPhases[activePhase].timeline}
            </p>
            <p className="text-lg text-slate-600 mb-6">
              {implementationPhases[activePhase].description}
            </p>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-slate-800 mb-3">Strategic Objectives</h5>
                <ul className="space-y-2">
                  {implementationPhases[activePhase].objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-slate-800 mb-3">Key Deliverables</h5>
                <ul className="space-y-2">
                  {implementationPhases[activePhase].deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-slate-800 mb-4">Critical Success Metrics</h5>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {Object.entries(implementationPhases[activePhase].keyMetrics).map(([metric, value], index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3 md:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="font-medium text-slate-700 text-sm md:text-base">{metric}</span>
                    <span className="font-bold text-emerald-600 text-sm md:text-base">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TechnicalSpecifications = () => {
  const [activeSpec, setActiveSpec] = useState(0);

  const specifications = [
    {
      category: "Raw Material Processing",
      icon: <Fish className="w-6 h-6" />,
      specs: [
        {
          parameter: "Waste Type Composition",
          value: "Skin (60%), Bones (25%), Scales (15%)",
          description: "Optimal waste stream composition for maximum collagen yield"
        },
        {
          parameter: "Storage Temperature",
          value: "2-4°C (35-39°F)",
          description: "Critical temperature range to prevent collagen degradation"
        },
        {
          parameter: "Processing Window",
          value: "24-48 hours maximum",
          description: "Time limit from collection to processing start"
        },
        {
          parameter: "Particle Size Reduction",
          value: "2-5 mm optimal",
          description: "Mechanical grinding for enhanced surface area"
        }
      ]
    },
    {
      category: "Extraction Parameters",
      icon: <FlaskConical className="w-6 h-6" />,
      specs: [
        {
          parameter: "Acid Concentration",
          value: "0.5M Acetic Acid",
          description: "Optimal concentration for collagen solubilization"
        },
        {
          parameter: "Temperature Control",
          value: "25-30°C ± 2°C",
          description: "Precise temperature to maintain collagen integrity"
        },
        {
          parameter: "pH Range",
          value: "3.0-4.0",
          description: "Acidic environment for maximum extraction efficiency"
        },
        {
          parameter: "Ultrasound Frequency",
          value: "20-40 kHz",
          description: "Frequency range for enhanced extraction without damage"
        },
        {
          parameter: "Extraction Time",
          value: "20-30 minutes (ultrasound)",
          description: "2.7x faster than traditional 72-hour methods"
        }
      ]
    },
    {
      category: "Purification Standards",
      icon: <Droplet className="w-6 h-6" />,
      specs: [
        {
          parameter: "Protein Purity",
          value: "≥95%",
          description: "Pharmaceutical-grade purity for biomedical applications"
        },
        {
          parameter: "Ash Content",
          value: "≤2%",
          description: "Minimal mineral residue for high-quality products"
        },
        {
          parameter: "Molecular Weight",
          value: "80-120 kDa",
          description: "Optimal molecular weight range for functionality"
        },
        {
          parameter: "Filtration Cutoff",
          value: "10 kDa ultrafiltration",
          description: "Separation of collagen from smaller contaminants"
        },
        {
          parameter: "Dialysis Duration",
          value: "24-48 hours",
          description: "Complete salt removal and pH neutralization"
        }
      ]
    },
    {
      category: "Final Product Quality",
      icon: <Award className="w-6 h-6" />,
      specs: [
        {
          parameter: "Collagen Content",
          value: "≥98%",
          description: "Ultra-high purity for premium applications"
        },
        {
          parameter: "Moisture Content",
          value: "≤8%",
          description: "Optimal moisture for stability and shelf life"
        },
        {
          parameter: "Tensile Strength",
          value: "0.15-0.30 MPa",
          description: "Mechanical strength for biomedical applications"
        },
        {
          parameter: "Biodegradation Rate",
          value: "30-60 days",
          description: "Complete environmental breakdown timeline"
        },
        {
          parameter: "Shelf Life",
          value: "24+ months",
          description: "Stability under proper storage conditions"
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg border border-emerald-100">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Technical Specifications & Quality Standards</h3>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive technical parameters ensuring consistent, high-quality collagen production meeting international standards
        </p>
      </div>

      {/* Mobile: Horizontal scroll tabs, Desktop: Grid */}
      <div className="overflow-x-auto mb-6 md:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 min-w-max md:min-w-0">
          {specifications.map((spec, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveSpec(index)}
              className={`p-3 md:p-4 rounded-xl text-left transition-all whitespace-nowrap md:whitespace-normal ${
                activeSpec === index
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-2">
                <div className={`p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 ${
                  activeSpec === index ? 'bg-white/20' : 'bg-emerald-200'
                }`}>
                  <div className={activeSpec === index ? 'text-white' : 'text-emerald-600'}>
                    {spec.icon}
                  </div>
                </div>
                <span className="font-medium text-sm md:text-base">{spec.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeSpec}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 md:p-8"
      >
        <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">
          {specifications[activeSpec].category}
        </h4>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {specifications[activeSpec].specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-emerald-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <h5 className="font-semibold text-slate-800 text-sm md:text-base">{spec.parameter}</h5>
                <span className="font-bold text-emerald-600 text-sm md:text-lg shrink-0">{spec.value}</span>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
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

const InteractiveChart = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  
  const applications = [
    { name: "Biomedical", value: 40, color: "emerald-500", icon: "🏥" },
    { name: "Cosmetics", value: 30, color: "teal-500", icon: "✨" },
    { name: "Packaging", value: 20, color: "cyan-500", icon: "📦" },
    { name: "Other", value: 10, color: "green-500", icon: "🔬" }
  ];


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
  const products = [
    {
      name: "Collagen Sponges",
      icon: "🧽",
      description: "Biomedical scaffolds for tissue regeneration",
      benefits: "Complete epithelial tissue formation within 14 days, completely biodegradable and incorporated into new tissue without removal needed.",
      stats: [
        { label: "Healing Time", value: 14, suffix: " days" },
        { label: "Success Rate", value: 95, suffix: "%" }
      ]
    },
    {
      name: "Biodegradable Films", 
      icon: "🌱",
      description: "Sustainable packaging solutions",
      benefits: "Extends fresh produce shelf life by 30-40% and completely biodegrades within 30-60 days under composting conditions.",
      stats: [
        { label: "Shelf Life Extension", value: 35, suffix: "%" },
        { label: "Biodegradation", value: 45, suffix: " days" }
      ]
    },
    {
      name: "Cosmetic Applications",
      icon: "✨", 
      description: "Anti-aging and skincare products",
      benefits: "Increases skin hydration by 25-30%, improves elasticity by 15-20%, and reduces wrinkle depth by 10-15% over 8-12 weeks.",
      stats: [
        { label: "Hydration Increase", value: 27.5, suffix: "%", decimals: 1 },
        { label: "Elasticity Improvement", value: 17.5, suffix: "%", decimals: 1 }
      ]
    },
    {
      name: "Wound Healing Patches",
      icon: "🩹",
      description: "Advanced medical treatment",
      benefits: "Accelerates wound healing, reduces infection rates, and creates optimal environment for tissue repair with controlled drug release.",
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
                FishSkin
              </motion.h1>
              <div className="hidden md:flex space-x-8">
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
            </nav>
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
                  <p className="text-slate-500 text-sm">Complete conversion of fish skin, bones, and scales into valuable collagen biomaterials</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    60-70%
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Energy Reduction</p>
                  <p className="text-slate-500 text-sm">Less energy required vs synthetic polymer production processes</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    25-35°C
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Processing Temperature</p>
                  <p className="text-slate-500 text-sm">Lower denaturation temp vs mammalian collagen (39-45°C)</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-emerald-600">
                    0
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Zoonotic Disease Risk</p>
                  <p className="text-slate-500 text-sm">No BSE or foot-and-mouth disease transmission risk unlike mammalian sources</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Process Flow Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProcessFlowChart />
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TechnicalSpecifications />
          </motion.div>
        </div>
      </section>

      {/* Implementation Methodology Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImplementationMethodology />
          </motion.div>
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
                <ProgressBar percentage={100} label="Safety Score" color="white" />
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
                  <span className="font-bold text-2xl">60-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Processing Temp</span>
                  <span className="font-bold text-2xl">25-35°C</span>
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
                <ProgressBar percentage={100} label="Sustainability Score" color="white" />
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
                <p>tonnes of fish waste transformed annually</p>
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
                <p>less energy required vs synthetic polymer production</p>
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
                <div className="text-4xl font-bold mb-2">$2.3B</div>
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
              className="flex flex-col sm:flex-row gap-6 justify-center"
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