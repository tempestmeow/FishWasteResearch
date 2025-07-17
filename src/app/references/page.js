'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Fish, Book, FileText, Microscope, Target, Globe, ChevronDown, ExternalLink, Search, Filter, Menu, X } from 'lucide-react';
import Link from 'next/link';

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    className="absolute pointer-events-none"
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const ReferenceCard = ({ reference, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)" }}
    className="bg-white rounded-lg p-4 md:p-6 shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-2 leading-relaxed text-sm md:text-base">
          {reference.title}
        </h3>
        <p className="text-blue-600 font-medium mb-1 text-sm">{reference.authors}</p>
        <p className="text-gray-600 text-xs md:text-sm mb-2">{reference.year}</p>
        {reference.journal && (
          <p className="text-gray-700 text-xs md:text-sm mb-2 italic">{reference.journal}</p>
        )}
      </div>
    </div>
    
    {reference.doi && (
      <div className="flex items-center pt-3 border-t border-gray-100">
        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-2" />
        <a 
          href={reference.doi.startsWith('http') ? reference.doi : `https://doi.org/${reference.doi}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-xs md:text-sm font-medium transition-colors"
        >
          {reference.doi.includes('doi.org') ? 'View Publication' : `DOI: ${reference.doi}`}
        </a>
      </div>
    )}
  </motion.div>
);

const SectionToggle = ({ title, icon, color, children, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="mb-6 md:mb-8"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left bg-gradient-to-r ${color} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
              <div className="text-white text-base md:text-xl">{icon}</div>
            </div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{title}</h2>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        </div>
      </motion.button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pt-4 md:pt-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function References() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const problemReferences = [
    {
      authors: "Asmawati, A., Fahrizal, F., Arpi, N., Amanatillah, D., & Husna, F.",
      year: "2023",
      title: "The characteristics of gelatin from fish waste: A review.",
      journal: "Aceh Journal of Animal Science, 8(3), 99–107",
      doi: "https://doi.org/10.13170/ajas.8.3.33083"
    },
    {
      authors: "Coppola, D., Lauritano, C., Palma Esposito, F., Riccio, G., Rizzo, C., & de Pascale, D.",
      year: "2021",
      title: "Fish Waste: From Problem to Valuable Resource.",
      journal: "Marine Drugs, 19(2), 116",
      doi: "https://doi.org/10.3390/md19020116"
    },
    {
      authors: "De Ungria, S. T., Fernandez, L. T. T., Sabado, S. E. F., Santos, J. P. E., Sararaña, A. R. B., & VinceCruz-Abeledo, C. C.",
      year: "2023",
      title: "How is fish market waste managed in the Philippines?",
      journal: "Environmental Science and Pollution Research, 30(17)",
      doi: "https://doi.org/10.1007/s11356-023-25882-0"
    },
    {
      authors: "De Ungria, S., Fernandez, L. T., Sabado, S. E., Santos, J. P., Sararaña, A. R., & VinceCruz-Abeledo, C. C.",
      year: "2022",
      title: "Circular economy in fisheries: How is fish market waste managed in the Philippines?",
      journal: "Preprint",
      doi: "https://doi.org/10.21203/rs.3.rs-1413739/v1"
    },
    {
      authors: "Mozumder, M. M. H., Uddin, M. M., Schneider, P., Raiyan, M. H. I., Trisha, M. G. A., Tahsin, T. H., & Newase, S.",
      year: "2022",
      title: "Sustainable Utilization of Fishery Waste in Bangladesh—A Qualitative Study for a Circular Bioeconomy Initiative.",
      journal: "Fishes, 7(2), 84",
      doi: "https://doi.org/10.3390/fishes7020084"
    },
    {
      authors: "Tahiluddin, A., & Terzi, E.",
      year: "2021",
      title: "An Overview of Fisheries and Aquaculture in the Philippines.",
      journal: "Journal of Anatolian Environmental and Animal Sciences, 6(4)",
      doi: "https://doi.org/10.35229/jaes.944292"
    },
    {
      authors: "Thirukumaran, R., Anu Priya, V. K., Krishnamoorthy, S., Ramakrishnan, P., Moses, J. A., & Anandharamakrishnan, C.",
      year: "2022",
      title: "Resource recovery from fish waste: Prospects and the usage of intensified extraction technologies.",
      journal: "Chemosphere, 299, 134361",
      doi: "https://doi.org/10.1016/j.chemosphere.2022.134361"
    }
  ];

  const scienceReferences = [
    {
      authors: "Chen, L., Li, Y., Zhang, Y., & Li, L.",
      year: "2022",
      title: "Collagen membrane derived from fish scales for application in bone tissue engineering.",
      journal: "Polymers, 14(13), 2532",
      doi: ""
    },
    {
      authors: "Chinh, N. Q., Manh, V. Q., Trung, V. Q., Lam, T. D., Huynh, M. A., Tung, N. H., Trinh, N. T. N., & Hoang, T. S.",
      year: "2019",
      title: "Characterization of collagen derived from tropical freshwater carp fish scale wastes and its amino acid sequence.",
      journal: "Natural Product Communications, 14(7), 1934578X19866288",
      doi: "https://doi.org/10.1177/1934578X19866288"
    },
    {
      authors: "Dikel, Ç., & Yanar, Y.",
      year: "2025",
      title: "Characterization of Acid-Soluble Collagen From By-Product Bones of European Sea Bass (Dicentrarchus labrax) and Common Carp (Cyprinus carpio).",
      journal: "Food science & nutrition, 13(4), e70059",
      doi: "https://doi.org/10.1002/fsn3.70059"
    },
    {
      authors: "Gaikwad, S., & Kim, M. J.",
      year: "2024",
      title: "Fish by-product collagen extraction using different methods and their application.",
      journal: "Marine Drugs, 22(2), 60",
      doi: "https://doi.org/10.3390/md22020060"
    },
    {
      authors: "Jafari, H., Lista, A., Siekapen, M. M., Ghaffari-Bohlouli, P., Nie, L., Alimoradi, H., & Shavandi, A.",
      year: "2020",
      title: "Fish collagen: Extraction, characterization, and applications for biomaterials engineering.",
      journal: "Polymers, 12(10), 2230",
      doi: "https://doi.org/10.3390/polym12102230"
    },
    {
      authors: "Kuwahara, K., Gaikwad, S., & Kim, M. J.",
      year: "2024",
      title: "Fish By-Product Collagen Extraction Using Different Methods and Their Application.",
      journal: "Marine Drugs, 22(2), 60",
      doi: "https://doi.org/10.3390/md22020060"
    },
    {
      authors: "Nisperos, M. J., Bacosa, H., Lumancas, G., Arellano, F., Aron, J., Baclayon, L., Bantilan, Z. C., Labares, M., Jr., & Bual, R.",
      year: "2023",
      title: "Time-dependent demineralization of Tilapia (Oreochromis niloticus) bones using hydrochloric acid for extracellular matrix extraction.",
      journal: "Biomimetics (Basel, Switzerland), 8(2), 217",
      doi: "https://doi.org/10.3390/biomimetics8020217"
    },
    {
      authors: "Nurubhasha, R., Sampath Kumar, N. S., Thirumalasetti, S. K., Simhachalam, G., & Dirisala, V. R.",
      year: "2019",
      title: "Extraction and characterization of collagen from the skin of Pterygoplichthys pardalis and its potential application in food industries.",
      journal: "Food Science and Biotechnology, 28(6), 1811-1817",
      doi: "https://doi.org/10.1007/s10068-019-00601-z"
    },
    {
      authors: "Petcharat, T., Sripong, K., & Phimolsiripol, Y.",
      year: "2024",
      title: "The application of microwave and ultrasound technologies for collagen extraction.",
      journal: "Frontiers in Sustainable Food Systems, 3, 1257635",
      doi: "https://doi.org/10.3389/fsufs.2023.1257635"
    },
    {
      authors: "Qin, D., Bi, S., You, X., Wang, M., Cong, X., Yuan, C., Yu, M., Cheng, X., & Chen, X.-G.",
      year: "2022",
      title: "Development and application of fish scale wastes as versatile natural biomaterials.",
      journal: "Chemical Engineering Journal, 428, 131102",
      doi: ""
    },
    {
      authors: "Wang, L., Qu, Y., Li, W., Wang, K., & Qin, S.",
      year: "2024",
      title: "Effects and metabolism of fish collagen sponge in repairing acute wounds of rat skin.",
      journal: "Frontiers in Bioengineering and Biotechnology, 11, 1087139",
      doi: "https://doi.org/10.3389/fbioe.2023.1087139"
    },
    {
      authors: "Zou, Y., Li, Y., Li, J., & Wang, J.",
      year: "2022",
      title: "Impact of ultrasound on extractability of native collagen from tuna by-product and its ultrastructure and physicochemical attributes.",
      journal: "Ultrasonics Sonochemistry, 89, 106129",
      doi: "https://doi.org/10.1016/j.ultsonch.2022.106129"
    }
  ];

  const solutionReferences = [
    {
      authors: "Chattopadhyay, S., & Raines, R. T.",
      year: "2014",
      title: "Collagen-based biomaterials for wound healing.",
      journal: "Biopolymers, 101(8), 821-833",
      doi: "https://doi.org/10.1002/bip.22486"
    },
    {
      authors: "Gaikwad, S., & Kim, M. J.",
      year: "2024",
      title: "Fish By-Product Collagen Extraction Using Different Methods and Their Application.",
      journal: "Marine Drugs, 22(2), 60",
      doi: "https://doi.org/10.3390/md22020060"
    },
    {
      authors: "Jafari, H., Lista, A., Siekapen, M. M., Ghaffari-Bohlouli, P., Nie, L., Alimoradi, H., & Shavandi, A.",
      year: "2020",
      title: "Fish Collagen: Extraction, Characterization, and Applications for Biomaterials Engineering.",
      journal: "Polymers, 12(10), 2230",
      doi: "https://doi.org/10.3390/polym12102230"
    },
    {
      authors: "Jadach, B., Mielcarek, Z., & Osmałek, T.",
      year: "2024",
      title: "Use of Collagen in Cosmetic Products.",
      journal: "Current Issues in Molecular Biology, 46(3), 2043-2070",
      doi: "https://doi.org/10.3390/cimb46030132"
    },
    {
      authors: "Nisperos, M. J., Bacosa, H., Lumancas, G., Arellano, F., Aron, J., Baclayon, L., Bantilan, Z. C., Labares, M., Jr., & Bual, R.",
      year: "2023",
      title: "Time-Dependent Demineralization of Tilapia (Oreochromis niloticus) Bones Using Hydrochloric Acid for Extracellular Matrix Extraction.",
      journal: "Biomimetics (Basel, Switzerland), 8(2), 217",
      doi: "https://doi.org/10.3390/biomimetics8020217"
    },
    {
      authors: "Qin, D., Bi, S., You, X., Wang, M., Cong, X., Yuan, C., Yu, M., Cheng, X., & Chen, X.-G.",
      year: "2022",
      title: "Development and application of fish scale wastes as versatile natural biomaterials.",
      journal: "Chemical Engineering Journal, 428, 131102",
      doi: ""
    },
    {
      authors: "Ragaza, J. A., & Go, B. P. C.",
      year: "2024",
      title: "Determining the Applicability of Milkfish (Chanos chanos) for Skin Grafting through Microbiological and Histological Evaluations.",
      journal: "BIO Web of Conferences, 136, 02008",
      doi: "https://doi.org/10.1051/bioconf/202413602008"
    },
    {
      authors: "Shalaby, M., Agwa, M. M., Saeed, H., Khedr, S. M., Morsy, O., & El-Demellawy, M. A.",
      year: "2020",
      title: "Fish Scale Collagen Preparation, Characterization and Its Application in Wound Healing.",
      journal: "Journal of Polymers and the Environment, 28(1), 166-178",
      doi: ""
    },
    {
      authors: "Wang, L., Qu, Y., Li, W., Wang, K., & Qin, S.",
      year: "2023",
      title: "Effects and metabolism of fish collagen sponge in repairing acute wounds of rat skin.",
      journal: "Frontiers in Bioengineering and Biotechnology, 11, 1087139",
      doi: "https://doi.org/10.3389/fbioe.2023.1087139"
    }
  ];

  const impactReferences = [
    {
      authors: "BCC Research",
      year: "2022",
      title: "The global collagen market.",
      journal: "Market Research Report",
      doi: "https://www.bccresearch.com/market-research/food-and-beverage/global-collagen-market.html"
    },
    {
      authors: "De Ungria, S. T., Fernandez, L. T. T., Sabado, S. E. F., Santos, J. P. E., Sararaña, A. R. B., & Abeledo, C. C. V.",
      year: "2023",
      title: "How is fish market waste managed in the Philippines?",
      journal: "Environmental Science and Pollution Research, 30(17), 49512-49522",
      doi: "https://doi.org/10.1007/s11356-023-25882-0"
    },
    {
      authors: "DOST",
      year: "2024",
      title: "DOST rolls out circular economy program, calls for laws to back initiative.",
      journal: "Department of Science and Technology",
      doi: "https://www.dost.gov.ph/knowledge-resources/news/84-2024-news/3848-dost-rolls-out-circular-economy-program-calls-for-laws-to-back-initiative.html"
    },
    {
      authors: "Islam, J., Yap, E. E. S., Krongpong, L., Toppe, J., & Peñarubia, O. R.",
      year: "2021",
      title: "Fish waste management – An assessment of the potential production and utilization of fish silage in Bangladesh, Philippines and Thailand.",
      journal: "FAO Fisheries and Aquaculture Circular No. 1216",
      doi: "https://doi.org/10.4060/cb3694en"
    },
    {
      authors: "Nisperos, M. J., Bacosa, H., Lumancas, G., Arellano, F., Aron, J., Baclayon, L., Bantilan, Z. C., Labares, M., Jr., & Bual, R.",
      year: "2023",
      title: "Time-Dependent Demineralization of Tilapia (Oreochromis niloticus) Bones Using Hydrochloric Acid for Extracellular Matrix Extraction.",
      journal: "Biomimetics (Basel, Switzerland), 8(2), 217",
      doi: "https://doi.org/10.3390/biomimetics8020217"
    },
    {
      authors: "Nurubhasha, R., Sampath Kumar, N. S., Thirumalasetti, S. K., Simhachalam, G., & Dirisala, V. R.",
      year: "2019",
      title: "Extraction and characterization of collagen from the skin of Pterygoplichthys pardalis and its potential application in food industries.",
      journal: "Food Science and Biotechnology, 28(6), 1811-1817",
      doi: "https://doi.org/10.1007/s10068-019-00601-z"
    },
    {
      authors: "Qin, D., Bi, S., You, X., Wang, M., Cong, X., Yuan, C., Yu, M., Cheng, X., & Chen, X.-G.",
      year: "2022",
      title: "Development and application of fish scale wastes as versatile natural biomaterials.",
      journal: "Chemical Engineering Journal, 428, 131102",
      doi: ""
    },
    {
      authors: "Ragaza, J. A., & Go, B. P. C.",
      year: "2024",
      title: "Determining the Applicability of Milkfish (Chanos chanos) for Skin Grafting through Microbiological and Histological Evaluations.",
      journal: "BIO Web of Conferences, 136, 02008",
      doi: "https://doi.org/10.1051/bioconf/202413602008"
    },
    {
      authors: "Reyes, R. B., & De La Cruz, J. A.",
      year: "2024",
      title: "Environmental Impacts of Aquaculture in the Philippines.",
      journal: "International Journal of Aquaculture, 13(1), 1-10",
      doi: "https://ija.scholasticahq.com/article/133778-environmental-impacts-of-aquaculture-in-the-philippines"
    },
    {
      authors: "Shalaby, M., Agwa, M. M., Saeed, H., Khedr, S. M., Morsy, O., & El-Demellawy, M. A.",
      year: "2020",
      title: "Fish Scale Collagen Preparation, Characterization and Its Application in Wound Healing.",
      journal: "Journal of Polymers and the Environment, 28(1), 166-178",
      doi: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <FloatingElement delay={0}>
          <Book className="w-12 h-12 text-blue-300 opacity-60" />
        </FloatingElement>
        <div className="absolute top-1/4 right-20">
          <FloatingElement delay={1}>
            <FileText className="w-8 h-8 text-indigo-300 opacity-40" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-1/3 left-16">
          <FloatingElement delay={2}>
            <Microscope className="w-10 h-10 text-purple-300 opacity-50" />
          </FloatingElement>
        </div>
      </div>

      {/* Header */}
      <section className="relative z-30 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.header 
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex justify-between items-center">
              <motion.h1 
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Fish className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
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
                      className={`hover:text-blue-600 transition-colors duration-300 ${item === 'References' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
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
                        item === 'References' 
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

          {/* Hero Content */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center mb-6"
            >
              <Book className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-3 md:mr-4" />
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                References
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Comprehensive academic sources supporting our research on fish waste transformation into valuable collagen biomaterials
            </motion.p>
          </div>
        </div>
      </section>

      {/* References Sections */}
      <section className="py-12 md:py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Problem References */}
          <SectionToggle
            title="Problem & Environmental Challenge"
            icon={<Globe />}
            color="from-red-500 to-orange-500"
            delay={0.1}
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {problemReferences.map((ref, index) => (
                <ReferenceCard key={index} reference={ref} delay={index * 0.1} />
              ))}
            </div>
          </SectionToggle>

          {/* Science References */}
          <SectionToggle
            title="Scientific Research & Methodology"
            icon={<Microscope />}
            color="from-blue-500 to-cyan-500"
            delay={0.2}
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {scienceReferences.map((ref, index) => (
                <ReferenceCard key={index} reference={ref} delay={index * 0.1} />
              ))}
            </div>
          </SectionToggle>

          {/* Solution References */}
          <SectionToggle
            title="Solution Development & Implementation"
            icon={<Target />}
            color="from-emerald-500 to-teal-500"
            delay={0.3}
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {solutionReferences.map((ref, index) => (
                <ReferenceCard key={index} reference={ref} delay={index * 0.1} />
              ))}
            </div>
          </SectionToggle>

          {/* Impact References */}
          <SectionToggle
            title="Impact & Market Analysis"
            icon={<Globe />}
            color="from-amber-500 to-orange-500"
            delay={0.4}
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {impactReferences.map((ref, index) => (
                <ReferenceCard key={index} reference={ref} delay={index * 0.1} />
              ))}
            </div>
          </SectionToggle>

        </div>
      </section>

      {/* Citation Information */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Academic Integrity</h3>
            <p className="text-base md:text-xl leading-relaxed opacity-90 mb-6 md:mb-8">
              All references have been carefully curated from peer-reviewed journals and reputable sources. 
              The research spans multiple disciplines including marine biology, biotechnology, environmental science, 
              and sustainable development to provide a comprehensive foundation for our fish waste transformation initiative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center">
              <Link href="/science" className="inline-flex items-center bg-white text-blue-600 px-4 md:px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all text-sm md:text-base">
                <Microscope className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Explore the Science
              </Link>
              <Link href="/solution" className="inline-flex items-center border-2 border-white text-white px-4 md:px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all text-sm md:text-base">
                <Target className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                View Our Solution
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 