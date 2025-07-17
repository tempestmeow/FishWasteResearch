'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Fish, Beaker, FlaskConical, Microscope, TestTube, ArrowRight, ChevronRight, ChevronDown, Check, ArrowUpRight, Volume2, Atom, Dna, Activity, Thermometer, Clock, Droplets, Zap, Menu, X } from 'lucide-react';
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

  return (
    <span className="font-bold text-blue-600">
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

const ProcessStep = ({ title, content, isOpen, toggleOpen, icon, index }) => {
  return (
    <motion.div 
      className={`rounded-xl border ${isOpen ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200'} bg-white`}
      animate={{ scale: isOpen ? 1.02 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        onClick={toggleOpen}
        className="w-full text-left px-4 md:px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 ${isOpen ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}`}>
            {icon || <span className="text-sm md:text-base">{index + 1}</span>}
          </div>
          <h3 className={`font-bold text-base md:text-lg ${isOpen ? 'text-blue-700' : 'text-gray-700'}`}>
            {title}
          </h3>
        </div>
        <div>
          {isOpen ? 
            <ChevronDown className={`h-4 w-4 md:h-5 md:w-5 ${isOpen ? 'text-blue-500' : 'text-gray-500'}`} /> : 
            <ChevronRight className={`h-4 w-4 md:h-5 md:w-5 ${isOpen ? 'text-blue-500' : 'text-gray-500'}`} />
          }
        </div>
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 md:px-6 pb-4 md:pb-6 pt-2 text-gray-700"
        >
          <div className="border-l-2 border-blue-200 pl-4 md:pl-6 ml-3 md:ml-4">
            {content}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const MethodComparison = ({ methods }) => {
  const [activeMethod, setActiveMethod] = useState(methods[0].id);
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
      {/* Mobile-friendly horizontal scrollable tabs */}
      <div className="overflow-x-auto border-b border-gray-200">
        <div className="flex min-w-max">
          {methods.map((method) => (
            <button
              key={method.id}
              className={`flex-none py-4 px-4 md:px-6 text-center font-medium transition-all duration-300 whitespace-nowrap ${
                activeMethod === method.id
                  ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveMethod(method.id)}
            >
              {method.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        {methods.map((method) => (
          activeMethod === method.id && (
            <motion.div
              key={method.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-2">{method.name}</h4>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{method.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-3 md:mb-4 text-base md:text-lg">Key Benefits</h5>
                  <ul className="space-y-2 md:space-y-3">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-3 md:mb-4 text-base md:text-lg">Research Results</h5>
                  <ul className="space-y-2 md:space-y-3 text-gray-700">
                    {method.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-sm md:text-base">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {method.mechanism && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:p-6 rounded-lg border border-blue-100">
                  <h5 className="font-medium text-blue-800 mb-3 text-base md:text-lg flex items-center">
                    <Atom className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Molecular Mechanism
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{method.mechanism}</p>
                </div>
              )}
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
};

const BiochemicalInsight = ({ title, content, icon, stats }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
  >
    <div className="flex items-center mb-4">
      <div className="bg-blue-50 rounded-full p-3 mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed mb-4">{content}</p>
    {stats && (
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-blue-700">{stat.label}</div>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

export default function Science() {
  const [openProcess, setOpenProcess] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const extractionProcessSteps = [
    {
      title: "Collection & Pretreatment",
      icon: <Droplets className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>Fresh fish waste (scales, skin, or bones) is thoroughly cleaned to remove impurities like blood and mucus.</p>
          <p>Materials are cut into small pieces (typically 2-5 mm) to increase their surface area for more efficient extraction.</p>
          <p>For bones, a demineralization step using 0.5 N hydrochloric acid (HCl) is essential to remove calcium phosphate and hydroxyapatite crystals that would interfere with collagen extraction.</p>
        </div>
      )
    },
    {
      title: "Acid Solubilization",
      icon: <TestTube className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>The pretreated fish waste is immersed in an acidic solution, commonly 0.5 M acetic acid, at a solid-to-liquid ratio of 1:10 to 1:50.</p>
          <p>The mixture is stirred continuously at a low temperature (around 4°C) for 24-72 hours.</p>
          <p>This low temperature prevents collagen degradation while allowing the acid to break down non-covalent bonds, making the collagen soluble.</p>
        </div>
      )
    },
    {
      title: "Filtration & Precipitation",
      icon: <Activity className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>The solution is filtered to remove any undissolved particles.</p>
          <p>Collagen is then precipitated by adjusting the pH to 7.0 using sodium hydroxide (NaOH) or by adding sodium chloride.</p>
          <p>This step isolates the collagen from the solution and prepares it for the final purification.</p>
        </div>
      )
    },
    {
      title: "Purification & Drying",
      icon: <Beaker className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>The precipitated collagen is collected via centrifugation.</p>
          <p>It's washed repeatedly to remove residual acid and salts.</p>
          <p>Finally, the collagen is freeze-dried to obtain pure collagen powder suitable for various applications.</p>
        </div>
      )
    }
  ];

  const alternativeMethods = [
    {
      id: "ultrasound",
      name: "Ultrasound-Assisted Extraction",
      icon: <Volume2 className="h-8 w-8 text-blue-500" />,
      description: "Utilizes high-frequency sound waves (20-100 kHz) to create cavitation bubbles that mechanically disrupt cell walls and accelerate mass transfer processes. This physical disruption enhances the penetration of extraction solvents into the tissue matrix.",
      mechanism: "Acoustic cavitation generates microscopic bubbles that rapidly form and collapse, creating localized pressure changes up to 1000 atmospheres. These pressure waves break down cellular structures and create microchannels that facilitate solvent penetration, dramatically reducing extraction time while maintaining collagen integrity.",
      benefits: [
        "Increases collagen yield by 270% compared to conventional acid extraction alone",
        "Reduces processing time from 72 hours to 20-30 minutes (96% time reduction)",
        "Requires 40-60% less chemical solvent usage",
        "Preserves molecular weight and bioactivity of extracted collagen",
        "Energy-efficient process with lower environmental impact"
      ],
      results: [
        "Albacore tuna skin: Yield increased by 8.56% with ultrasound assistance (Wang et al., 2024)",
        "Clown featherback skin: Yield improved from 27.18% to 57.35% (110% increase) (Petcharat et al., 2024)",
        "Processing time reduced from 3 days to 30 minutes for equivalent yields",
        "Maintained structural integrity with higher thermal stability (denaturation temperature increased by 3-5°C)",
        "Enhanced amino acid profile preservation, particularly hydroxyproline content"
      ]
    },
    {
      id: "enzymatic",
      name: "Enzymatic Extraction",
      icon: <Dna className="h-8 w-8 text-blue-500" />,
      description: "Employs specific proteolytic enzymes, primarily pepsin, to selectively cleave telopeptide regions of collagen molecules without damaging the central triple helix structure. This targeted approach yields higher purity collagen with preserved bioactivity.",
      mechanism: "Pepsin specifically cleaves at hydrophobic amino acid residues (phenylalanine, leucine, methionine) located in the N- and C-terminal telopeptides. These non-helical regions contain cross-linking sites that maintain collagen fiber integrity. By removing these regions, pepsin converts insoluble collagen fibers into soluble atelocollagen while preserving the characteristic Gly-X-Y amino acid sequence of the triple helix.",
      benefits: [
        "30-45% higher extraction rates than acid-only methods with superior selectivity",
        "Preserves bioactivity and immunocompatibility by removing antigenic telopeptides",
        "Produces atelocollagen with reduced immunogenicity for medical applications",
        "Maintains native molecular weight distribution (300 kDa α-chains)",
        "Compatible with subsequent cross-linking for biomaterial applications"
      ],
      results: [
        "Higher purity atelocollagen with 95-98% removal of telopeptide regions",
        "Enhanced thermal stability with denaturation temperatures of 28-32°C",
        "Improved biocompatibility with reduced inflammatory response in cell culture",
        "Better preservation of triple helix structure confirmed by circular dichroism spectroscopy",
        "Successful production of medical-grade collagen suitable for tissue engineering applications"
      ]
    },
    {
      id: "microwave",
      name: "Microwave-Assisted Extraction",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      description: "Uses microwave radiation to heat the extraction medium rapidly and uniformly, creating internal pressure that disrupts cellular structures and accelerates solvent penetration. This method combines thermal and mechanical effects for enhanced extraction efficiency.",
      mechanism: "Microwave energy (2.45 GHz) causes rapid rotation of polar molecules, particularly water, generating heat from within the tissue matrix. This internal heating creates vapor pressure that ruptures cell walls and creates pathways for solvent access. The simultaneous heating and mechanical disruption significantly accelerates the dissolution of collagen fibers.",
      benefits: [
        "Reduces extraction time to 5-15 minutes compared to hours with conventional methods",
        "Uniform heating prevents hot spots that could denature collagen",
        "Lower energy consumption per unit of extracted collagen",
        "Can be combined with ultrasound for synergistic effects",
        "Scalable for industrial applications"
      ],
      results: [
        "Fish skin collagen extraction completed in 10 minutes vs. 24-48 hours conventionally",
        "Maintained collagen quality with preserved amino acid composition",
        "Energy consumption reduced by 60-80% compared to traditional heating methods",
        "Yield comparable to or higher than conventional acid extraction",
        "Successfully implemented for various fish species including tilapia, cod, and salmon"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative z-30 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
          <motion.header 
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex justify-between items-center">
              <motion.h1 
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Fish className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
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
                      className={`hover:text-blue-600 transition-colors duration-300 ${item === 'Science' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
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
                className="lg:hidden mt-4 bg-white rounded-xl shadow-lg border border-gray-200 p-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  {['Problem', 'Science', 'Solution', 'Applications', 'Impact', 'References'].map((item, index) => (
                    <Link
                      key={item}
                      href={item === 'Problem' ? '/' : `/${item.toLowerCase()}`}
                      className={`block px-4 py-3 rounded-lg text-center transition-colors duration-300 ${
                        item === 'Science' 
                          ? 'bg-blue-100 text-blue-600 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
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
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex-1"
            >
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block text-gray-900">The</span>
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Science</span>
                <span className="block text-gray-900">of Upcycling</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Transforming fish waste into valuable collagen through innovative biotechnology processes. Fish by-products like scales, skin, and bones contain abundant Type I collagen and bioactive compounds, making them ideal for pharmaceutical, cosmetic, and biomedical applications.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link href="#extraction-process" className="inline-flex items-center bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm md:text-base">
                  Explore the Process
                  <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 relative w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative w-full h-64 md:h-96">
                <div className="absolute inset-0 bg-blue-50 rounded-3xl transform -rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/backgrounds/a1.jpg')] bg-cover bg-center opacity-10"></div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-8">
                    <Beaker className="w-12 h-12 md:w-16 md:h-16 text-blue-500 mb-4 md:mb-6" />
                    <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4 text-center">Fish Waste to Collagen</h3>
                    <p className="text-blue-700 text-center mb-4 md:mb-6 text-sm md:text-base">
                      Scientific transformation of marine by-products into high-value biomaterials
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-sm">
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">41.1%</div>
                        <div className="text-xs md:text-sm text-gray-600">Organic matter in fish scales</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">15-27%</div>
                        <div className="text-xs md:text-sm text-gray-600">Collagen yield from fish skin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Foundation Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Atom className="w-10 h-10 text-blue-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Scientific Foundation
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fish by-products like scales, skin, and bones, often discarded as waste, are far from valueless. These materials are rich in collagen—a vital structural protein—along with other beneficial bioactive compounds including peptides, minerals, and lipids that make them ideal for transformation into valuable products for biomedical, cosmetic, pharmaceutical, and nutraceutical industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <BiochemicalInsight
              title="Collagen Structure"
              content="Fish collagen consists of three polypeptide chains arranged in a triple helix structure. Each chain contains approximately 1000 amino acids with a characteristic Gly-X-Y sequence pattern, where X is often proline and Y is often hydroxyproline."
              icon={<Dna className="w-6 h-6 text-blue-600" />}
              stats={[
                { value: "33%", label: "Glycine content" },
                { value: "11-12%", label: "Proline content" }
              ]}
            />

            <BiochemicalInsight
              title="Molecular Weight"
              content="Type I collagen from fish sources typically has a molecular weight of approximately 300 kDa, consisting of two α1 chains (95 kDa each) and one α2 chain (110 kDa), cross-linked by hydrogen bonds and electrostatic interactions."
              icon={<Microscope className="w-6 h-6 text-blue-600" />}
              stats={[
                { value: "300 kDa", label: "Total molecular weight" },
                { value: "1.5 nm", label: "Triple helix diameter" }
              ]}
            />

            <BiochemicalInsight
              title="Thermal Properties"
              content="Fish collagen has lower thermal stability than mammalian collagen due to lower hydroxyproline content. The denaturation temperature ranges from 15-29°C, making it suitable for applications requiring lower processing temperatures."
              icon={<Thermometer className="w-6 h-6 text-blue-600" />}
              stats={[
                { value: "15-29°C", label: "Denaturation temp" },
                { value: "9-10%", label: "Hydroxyproline" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Goldmine Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Microscope className="w-10 h-10 text-blue-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Why Fish Waste is a Goldmine
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fish by-products are abundant sources of high-quality Type I collagen and bioactive compounds, offering sustainable alternatives to traditional sources while avoiding health risks and cultural restrictions associated with mammalian collagen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingElement delay={0}>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.15), 0 8px 25px -6px rgba(59, 130, 246, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-50 rounded-full p-4">
                    <Beaker className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Rich in Collagen</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">Fish scales, skin, and bones are abundant sources of Type I collagen, the most common protein in vertebrates.</p>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">Fish scales contain</span>
                    <span className="font-bold text-blue-700">
                      <AnimatedCounter end={41.1} suffix="%" />
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Fish waste is a sustainable alternative to traditional collagen sources</p>
                </div>
              </motion.div>
            </FloatingElement>

            <FloatingElement delay={0.2}>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.15), 0 8px 25px -6px rgba(59, 130, 246, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-50 rounded-full p-4">
                    <FlaskConical className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">High Yield Potential</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">Fish skin yields</span>
                    <span className="font-bold text-blue-700">15-27%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">Fish scales yield</span>
                    <span className="font-bold text-blue-700">3-5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-700">Fish bones yield</span>
                    <span className="font-bold text-blue-700">0.1-5.09%</span>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>

            <FloatingElement delay={0.4}>
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.15), 0 8px 25px -6px rgba(59, 130, 246, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-50 rounded-full p-4">
                    <Check className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Safer Alternative</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">Fish collagen poses no risk of transmitting zoonotic diseases like Bovine Spongiform Encephalopathy (BSE).</p>
                  <p className="text-gray-600 leading-relaxed">Avoids religious or cultural restrictions associated with mammalian collagen sources.</p>
                  <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-bold text-blue-700">Safe & Culturally Acceptable</span>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Extraction Process Section - Enhanced */}
      <section id="extraction-process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <TestTube className="w-10 h-10 text-blue-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                The Transformation Process
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Acid solubilization is the primary biotechnological method for converting fish waste into valuable collagen. This carefully controlled process uses mild acids to extract high-quality collagen while preserving its native triple helix structure and bioactivity.
            </p>
          </motion.div>

          {/* Enhanced Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center flex items-center justify-center">
                <FlaskConical className="w-8 h-8 mr-3" />
                Acid Solubilization Extraction Process
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {extractionProcessSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    title={step.title}
                    content={step.content}
                    isOpen={openProcess === index}
                    toggleOpen={() => setOpenProcess(openProcess === index ? -1 : index)}
                    icon={step.icon}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-4 text-lg flex items-center">
                  <Check className="w-6 h-6 mr-2" />
                  Key Outcomes & Quality Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">Amino Acid Composition</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Glycine: ~33% (provides flexibility to triple helix)</li>
                      <li>• Proline: 11-12% (stabilizes collagen structure)</li>
                      <li>• Hydroxyproline: 9-10% (crucial for thermal stability)</li>
                      <li>• Lysine & Hydroxylysine: cross-linking sites</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">Product Specifications</h5>
                                         <ul className="text-gray-700 space-y-1 text-sm">
                       <li>• Purity: &gt;95% collagen content</li>
                       <li>• Molecular weight: ~300 kDa (native)</li>
                       <li>• Moisture content: &lt;10% (freeze-dried)</li>
                       <li>• pH: 6.0-7.5 (neutral, biocompatible)</li>
                     </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Alternative Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <Atom className="w-8 h-8 mr-3 text-blue-500" />
              Advanced Extraction Technologies
            </h3>
            <MethodComparison methods={alternativeMethods} />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative z-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Fish Waste?</h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Now that you understand the science behind fish waste transformation, 
              discover the complete solution and explore the research that makes it all possible.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/solution" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                See the Solution
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/references" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
                View References
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 