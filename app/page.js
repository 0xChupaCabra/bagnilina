'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const translations = {
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      gallery: 'Galleria',
      contact: 'Contatti'
    },
    hero: {
      welcome: 'BENVENUTI AI',
      title: 'BAGNI LINA',
      subtitle: 'IL VOSTRO ANGOLO DI PARADISO A CELLE LIGURE',
      seasonal: 'APERTURA STAGIONALE',
      cta: 'Scopri di più'
    },
    about: {
      title: "UN'OASI DI COMFORT",
      subtitle: 'E SERVIZI SU MISURA',
      description: "Situati nella splendida cornice della spiaggia di Ponente a Celle Ligure, uno dei borghi più belli d'Italia, i Bagni Lina sono da decenni un punto di riferimento amato da famiglie, coppie e tutti coloro che desiderano vivere le meraviglie del mare ligure.",
      stats: {
        years: 'Anni di esperienza',
        umbrellas: 'Ombrelloni',
        services: 'Servizi premium'
      }
    },
    services: {
      title: 'I NOSTRI SERVIZI',
      subtitle: 'Tutto ciò di cui hai bisogno per una giornata perfetta',
      bar: {
        title: 'Bar e Ristorazione',
        description: 'Cocktail freschi, piatti deliziosi e vista mare mozzafiato',
        features: ['Tavola fredda', 'Cocktail bar', 'Snack veloci']
      },
      dehors: {
        title: 'Dehors Panoramico',
        description: 'Spazio elegante con pavimentazione in legno e piastrelle',
        features: ['Vista mare', 'Area lounge', 'Wi-Fi gratuito']
      },
      beach: {
        title: 'Servizi Spiaggia',
        description: 'Comfort e relax con attrezzature di prima qualità',
        features: ['Lettini premium', 'Docce calde/fredde', 'Spogliatoi']
      },
      accessibility: {
        title: 'Accessibilità Totale',
        description: 'Strutture dedicate per un\'esperienza inclusiva',
        features: ['Rampe di accesso', 'Servizi dedicati', 'Assistenza']
      }
    },
    management: {
      title: 'NUOVA GESTIONE 2024',
      subtitle: 'Massimo e Luca vi accolgono con passione e professionalità',
      description: 'Un team giovane e dinamico pronto a rendere la vostra estate indimenticabile'
    },
    contact: {
      title: 'CONTATTACI',
      subtitle: 'Siamo qui per te',
      email: 'ciao@bagnilina.it',
      phone: '+39 019 993190',
      address: 'Lungomare Colombo, Celle Ligure (SV)',
      hours: 'Aperti tutti i giorni 8:00 - 20:00',
      cta: 'Prenota ora'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      welcome: 'WELCOME TO',
      title: 'BAGNI LINA',
      subtitle: 'YOUR CORNER OF PARADISE IN CELLE LIGURE',
      seasonal: 'SEASONAL OPENING',
      cta: 'Discover more'
    },
    about: {
      title: 'AN OASIS OF COMFORT',
      subtitle: 'AND TAILORED SERVICES',
      description: 'Located in the splendid setting of Ponente beach in Celle Ligure, one of the most beautiful villages in Italy, Bagni Lina has been a beloved reference point for decades for families, couples and all those who wish to experience the wonders of the Ligurian sea.',
      stats: {
        years: 'Years of experience',
        umbrellas: 'Beach umbrellas',
        services: 'Premium services'
      }
    },
    services: {
      title: 'OUR SERVICES',
      subtitle: 'Everything you need for a perfect day',
      bar: {
        title: 'Bar & Restaurant',
        description: 'Fresh cocktails, delicious dishes and breathtaking sea view',
        features: ['Cold dishes', 'Cocktail bar', 'Quick snacks']
      },
      dehors: {
        title: 'Panoramic Terrace',
        description: 'Elegant space with wooden and tiled flooring',
        features: ['Sea view', 'Lounge area', 'Free Wi-Fi']
      },
      beach: {
        title: 'Beach Services',
        description: 'Comfort and relaxation with premium equipment',
        features: ['Premium sunbeds', 'Hot/cold showers', 'Changing rooms']
      },
      accessibility: {
        title: 'Full Accessibility',
        description: 'Dedicated facilities for an inclusive experience',
        features: ['Access ramps', 'Dedicated services', 'Assistance']
      }
    },
    management: {
      title: 'NEW MANAGEMENT 2024',
      subtitle: 'Massimo and Luca welcome you with passion and professionalism',
      description: 'A young and dynamic team ready to make your summer unforgettable'
    },
    contact: {
      title: 'CONTACT US',
      subtitle: 'We are here for you',
      email: 'ciao@bagnilina.it',
      phone: '+39 019 993190',
      address: 'Lungomare Colombo, Celle Ligure (SV)',
      hours: 'Open every day 8:00 AM - 8:00 PM',
      cta: 'Book now'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('it');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const t = translations[lang];

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer`}
            >
              Bagni Lina
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <motion.button
                  key={key}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(key)}
                  className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 transition-colors font-medium`}
                >
                  {value}
                </motion.button>
              ))}
              
              <div className="flex gap-2 ml-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLang('it')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    lang === 'it' 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                      : 'bg-white/20 backdrop-blur-sm text-gray-700 hover:bg-white/30'
                  }`}
                >
                  IT
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLang('en')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    lang === 'en' 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                      : 'bg-white/20 backdrop-blur-sm text-gray-700 hover:bg-white/30'
                  }`}
                >
                  EN
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
        >
          <div className="px-4 py-6 space-y-4">
            {Object.entries(t.nav).map(([key, value]) => (
              <motion.button
                key={key}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(key)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {value}
              </motion.button>
            ))}
            
            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLang('it')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  lang === 'it' 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Italiano
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLang('en')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  lang === 'en' 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                English
              </motion.button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 opacity-90" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/90 text-xl md:text-2xl mb-4 font-light tracking-wider"
          >
            {t.hero.welcome}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl mb-8 text-white/90 font-light max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <span className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg shadow-xl">
              {t.hero.seasonal}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              {t.hero.cta} →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use href="#wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>

        <style jsx>{`
          .waves {
            position: relative;
            width: 100%;
            height: 15vh;
            margin-bottom: -7px;
            min-height: 100px;
            max-height: 150px;
          }
          .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
          }
          .parallax > use:nth-child(1) {
            animation-delay: -2s;
            animation-duration: 7s;
          }
          .parallax > use:nth-child(2) {
            animation-delay: -3s;
            animation-duration: 10s;
          }
          .parallax > use:nth-child(3) {
            animation-delay: -4s;
            animation-duration: 13s;
          }
          .parallax > use:nth-child(4) {
            animation-delay: -5s;
            animation-duration: 20s;
          }
          @keyframes move-forever {
            0% {
              transform: translate3d(-90px,0,0);
            }
            100% { 
              transform: translate3d(85px,0,0);
            }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600">{t.about.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t.about.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '30+', label: t.about.stats.years },
                  { number: '100+', label: t.about.stats.umbrellas },
                  { number: '10+', label: t.about.stats.services }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-white text-2xl font-medium">Video Placeholder</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t.services.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t.services).filter(([key]) => !['title', 'subtitle'].includes(key)).map(([key, service], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-8 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl">
                      {key === 'bar' && '🍹'}
                      {key === 'dehors' && '🏖️'}
                      {key === 'beach' && '🏄'}
                      {key === 'accessibility' && '♿'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-white/90 transition-colors">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                        <svg className="w-4 h-4 mr-2 text-blue-500 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.nav.gallery}
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Gallery {i + 1}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white rounded-full p-3"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-opacity="0.1"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.management.title}</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-6">{t.management.subtitle}</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.management.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href={`mailto:${t.contact.email}`} className="text-blue-600 hover:underline">
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefono</h3>
                    <p className="text-gray-600">{t.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Indirizzo</h3>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Orari</h3>
                    <p className="text-gray-600">{t.contact.hours}</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {t.contact.cta}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.8394287147847!2d8.541386212345!3d44.34063807910235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d31ee3ceefc84f%3A0xe21418a608bc688!2sBagni%20Lina!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bagni Lina Location"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bagni Lina
              </h3>
              <p className="text-gray-400">
                Il vostro angolo di paradiso a Celle Ligure dal 1990
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Link Rapidi</h4>
              <ul className="space-y-2 text-gray-400">
                {Object.entries(t.nav).map(([key, value]) => (
                  <li key={key}>
                    <button 
                      onClick={() => scrollToSection(key)}
                      className="hover:text-white transition-colors"
                    >
                      {value}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Bagni Lina - Tutti i diritti riservati</p>
            <p className="mt-2">Made with ❤️ in Celle Ligure</p>
          </div>
        </div>
      </footer>
    </div>
  );
}