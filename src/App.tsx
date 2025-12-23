import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import { FiMenu, FiX, FiArrowRight, FiCamera, FiVideo, FiShield, FiZap, FiCheckCircle, FiPhone, FiMail, FiMapPin, FiStar, FiUsers, FiShield as FiShield2, FiAward } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';

// Animation variants
// Animation variants with proper typing
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Logo component
const Logo = () => (
  <div className="flex items-center space-x-3">
    <img 
      src="/src/assets/logo.png.png" 
      alt="WiNet Soluciones Logo" 
      className="h-14 w-auto"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
    <motion.span 
      className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      SOLUCIONES
    </motion.span>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const services = [
    {
      icon: <FiCamera className="w-8 h-8 mb-4 text-yellow-500" />,
      title: 'Cámaras de Seguridad',
      description: 'Sistemas de videovigilancia de última generación para proteger lo que más importa.'
    },
    {
      icon: <FiVideo className="w-8 h-8 mb-4 text-yellow-500" />,
      title: 'Video Porteros',
      description: 'Control de acceso seguro y comunicación audiovisual para tu propiedad.'
    },
    {
      icon: <FiShield className="w-8 h-8 mb-4 text-yellow-500" />,
      title: 'Alarmas Smart',
      description: 'Sistemas de alarma inteligentes con monitoreo y control remoto.'
    },
    {
      icon: <FiZap className="w-8 h-8 mb-4 text-yellow-500" />,
      title: 'Cercos Eléctricos',
      description: 'Protección perimetral efectiva para todo tipo de propiedades.'
    }
  ];

  const benefits = [
    'Instalación profesional garantizada',
    'Soporte técnico especializado',
    'Tecnología confiable y de última generación',
    'Soluciones personalizadas para cada necesidad'
  ];

  const testimonials = [
    {
      name: 'Carlos M.',
      role: 'Dueño de casa',
      content: 'Excelente servicio de instalación de cámaras. Muy profesionales y el sistema funciona perfectamente.',
      rating: 5
    },
    {
      name: 'María G.',
      role: 'Gerente de empresa',
      content: 'Implementamos el sistema de alarmas en nuestra oficina y la diferencia es notable. Muy recomendables.',
      rating: 5
    },
    {
      name: 'Roberto L.',
      role: 'Propietario de negocio',
      content: 'El mejor servicio técnico de Córdoba. Rápidos, eficientes y con precios justos.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="text-white hover:text-yellow-400 transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-full left-0 w-full py-4 px-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={`mobile-${item.id}`}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-yellow-400 transition-colors text-lg w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section 
          id="inicio" 
          className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden"
        >
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90 z-10"></div>
            <img 
              src="/src/assets/foto_principal.jpg" 
              alt="Seguridad WiNet" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-block mb-6 px-4 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-full"
                variants={fadeInUp}
              >
                <span className="text-yellow-400 text-sm font-medium tracking-wider">SEGURIDAD INTEGRAL</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
                  Protege lo tuyo
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Protección inteligente para hogares, empresas y comercios con tecnología de punta y atención personalizada las 24/7.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                variants={fadeInUp}
              >
                <a 
                  href="https://wa.me/543515204125" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-lg text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  <span className="relative z-10 flex items-center">
                    Pedir presupuesto 
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="#servicios" 
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-medium rounded-lg text-lg transition-all duration-300 hover:bg-white/10"
                >
                  Nuestros servicios
                </a>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10"
                variants={staggerContainer}
              >
                {[
                  { icon: <FiShield className="w-6 h-6" />, text: 'Monitoreo 24/7' },
                  { icon: <FiCheckCircle className="w-6 h-6" />, text: 'Garantía' },
                  { icon: <FiUsers className="w-6 h-6" />, text: 'Atención personalizada' },
                  { icon: <FiZap className="w-6 h-6" />, text: 'Instalación rápida' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2 text-yellow-400"
                    variants={fadeInUp}
                  >
                    {item.icon}
                    <span className="text-white text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-white/70 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Desplazarse</span>
              <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start p-1 group-hover:border-yellow-400/50 transition-colors">
                <motion.div 
                  className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"
                  animate={{ y: [0, 8] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Us Section */}
        <section id="nosotros" className="relative py-24 bg-gray-50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-yellow-500 font-semibold tracking-wider mb-4">NUESTRA EMPRESA</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertos en Seguridad Integral</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Feature highlights */}
                <motion.div 
                  className="absolute -left-8 -top-8 w-64 h-64 bg-yellow-400/5 rounded-full mix-blend-multiply filter blur-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                <div className="relative space-y-6">
                  <h3 className="text-3xl font-bold leading-tight">
                    Protegiendo lo que más importa <span className="text-yellow-500">desde 2010</span>
                  </h3>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      En <span className="font-semibold text-gray-800">WiNet Soluciones</span>, nos enorgullece ofrecer sistemas de seguridad de última generación respaldados por más de una década de experiencia en el mercado. Nuestro compromiso es brindar tranquilidad a través de soluciones personalizadas que se adaptan a las necesidades únicas de cada cliente.
                    </p>
                    
                    <p>
                      Nuestro equipo de profesionales altamente capacitados combina conocimiento técnico con un profundo entendimiento de las necesidades de seguridad actuales, ofreciendo un servicio integral que abarca desde el diseño hasta la instalación y mantenimiento de sistemas de seguridad.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {[
                      { 
                        icon: <div className="p-3 bg-yellow-50 rounded-lg"><FiShield2 className="w-6 h-6 text-yellow-600" /></div>,
                        title: "Seguridad Garantizada",
                        text: "Sistemas con tecnología de punta y monitoreo 24/7"
                      },
                      { 
                        icon: <div className="p-3 bg-yellow-50 rounded-lg"><FiUsers className="w-6 h-6 text-yellow-600" /></div>,
                        title: "Equipo Profesional",
                        text: "Técnicos certificados y con amplia experiencia"
                      },
                      { 
                        icon: <div className="p-3 bg-yellow-50 rounded-lg"><FiAward className="w-6 h-6 text-yellow-600" /></div>,
                        title: "Garantía Extendida",
                        text: "Soporte post-venta y mantenimiento continuo"
                      },
                      { 
                        icon: <div className="p-3 bg-yellow-50 rounded-lg"><FiCheckCircle className="w-6 h-6 text-yellow-600" /></div>,
                        title: "Soluciones a Medida",
                        text: "Asesoramiento personalizado para cada necesidad"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="flex items-start space-x-4">
                          {item.icon}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/5 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                
                {/* Main image */}
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Equipo de WiNet Soluciones" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-1 bg-yellow-400"></div>
                    <span className="text-sm font-medium text-yellow-300">NUESTRO COMPROMISO</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Seguridad que inspira confianza</h3>
                  <p className="text-gray-200 mb-6 max-w-md">
                    En WiNet Soluciones, cada sistema de seguridad es implementado con el más alto estándar de calidad, garantizando protección real y tranquilidad para nuestros clientes.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[150px] p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">10+</div>
                      <div className="text-sm text-gray-300">Años de experiencia</div>
                    </div>
                    <div className="flex-1 min-w-[150px] p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                      <div className="text-sm text-gray-300">Clientes satisfechos</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="relative py-24 bg-gray-900 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-yellow-400/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
          
          <div className="container mx-auto px-4 relative z-20">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-yellow-400 font-semibold tracking-wider mb-4">NUESTROS SERVICIOS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluciones de Seguridad Integral</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-0.5 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full bg-gray-900 p-8 rounded-xl">
                    <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 text-yellow-400 group-hover:bg-yellow-500/20 transition-colors duration-300">
                      {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <a 
                      href="#contacto" 
                      className="inline-flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors"
                    >
                      Más información
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                ¿No encontrás lo que buscás? Contáctanos para una asesoría personalizada y encuentra la solución perfecta para tus necesidades de seguridad.
              </p>
              <a 
                href="https://wa.me/543515204125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                Consultar por otros servicios
              </a>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-yellow-500 font-semibold">Nuestras Ventajas</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">¿Por qué elegirnos?</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-50 p-2 rounded-full">
                      <FiCheckCircle className="text-yellow-500 text-xl" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-yellow-500 font-semibold">Testimonios</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Lo que dicen nuestros clientes</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`} 
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-gray-200 text-4xl absolute -top-2 -left-2 -z-10" />
                    <p className="text-gray-600 relative z-10">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestros Clientes Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Clientes</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Empresas líderes que confían en nuestros servicios de seguridad</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  name: 'YPF',
                  logo: new URL('./assets/logo_ypf.png', import.meta.url).href,
                },
                {
                  name: 'Shell',
                  logo: new URL('./assets/logo_shell.png', import.meta.url).href,
                },
                {
                  name: 'Axion',
                  logo: new URL('./assets/Axion_energy_logo.png', import.meta.url).href,
                },
                {
                  name: 'Aberturas Maber',
                  logo: new URL('./assets/aberturas_maber_logo.png', import.meta.url).href,
                },
                {
                  name: 'Matricería Austral',
                  logo: new URL('./assets/logo_matriceriaaustral.png', import.meta.url).href,
                },
                {
                  name: 'Consorcio Memphis',
                  logo: new URL('./assets/consorcio_memphislogo.png', import.meta.url).href,
                },
                {
                  name: 'Controlsat',
                  logo: new URL('./assets/controlsat logo.png', import.meta.url).href,
                },
                {
                  name: 'Pretensados Córdoba',
                  logo: new URL('./assets/prentensados_cba_logo.png', import.meta.url).href,
                },
                {
                  name: 'Pollería Santa Rosa',
                  logo: new URL('./assets/pollleria_santa_rosa_logo.png', import.meta.url).href,
                },
                {
                  name: 'Importadora LA',
                  logo: new URL('./assets/importadora_la_logo.png', import.meta.url).href,
                },
                {
                  name: 'Smartshop',
                  logo: new URL('./assets/smartshop logo.png', import.meta.url).href,
                },
                {
                  name: 'Wellmod',
                  logo: new URL('./assets/wellmod_logo.png', import.meta.url).href,
                },
                {
                  name: 'Cabañas Los Leños',
                  logo: new URL('./assets/cabaña_los_leños logo.webp', import.meta.url).href,
                },
                {
                  name: 'Balcón de Nono Cabañas',
                  logo: new URL('./assets/balcon_de_nono logo.webp', import.meta.url).href,
                },
                {
                  name: 'Rentacar',
                  logo: new URL('./assets/renta car logo.webp', import.meta.url).href,
                },
              ].map((client, index) => (
                <motion.div 
                  key={index}
                  className="group bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center h-32 border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = 'none';
                    }}
                  />
                  <div className="mt-3 text-center text-xs font-semibold text-gray-600 tracking-wide">
                    {client.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-gray-600 mb-6">¿Querés que tu empresa aparezca aquí?</p>
              <a 
                href="https://wa.me/543515204125" 
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contratar ahora
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contacto</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaWhatsapp className="text-green-400 text-xl mt-1 mr-3" />
                    <a href="https://wa.me/543515204125" className="hover:text-yellow-400 transition-colors">
                      +54 9 351 520-4125
                    </a>
                  </div>
                  <div className="flex items-start">
                    <FiPhone className="text-gray-300 text-xl mt-1 mr-3" />
                    <a href="tel:+543515891234" className="hover:text-yellow-400 transition-colors">
                      0351 589-1234
                    </a>
                  </div>
                  <div className="flex items-start">
                    <FiMail className="text-gray-300 text-xl mt-1 mr-3" />
                    <a href="mailto:info@winet.com.ar" className="hover:text-yellow-400 transition-colors">
                      info@winet.com.ar
                    </a>
                  </div>
                  <div className="flex items-start">
                    <FiMapPin className="text-gray-300 text-xl mt-1 mr-3 flex-shrink-0" />
                    <span>Olga Orozco 2855, Local 5, Poeta Lugones, Córdoba</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Horario de atención</h3>
                <div className="space-y-2">
                  <p>Lunes a Viernes: 9:00 - 18:00 hs</p>
                  <p>Sábados: 9:00 - 13:00 hs</p>
                  <p className="mt-4">Soporte técnico las 24hs para clientes</p>
                </div>
                <a 
                  href="https://wa.me/543515204125" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors"
                >
                  <FaWhatsapp className="mr-2" /> Envíanos un mensaje
                </a>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold">Nuestra ubicación</h3>
                <a
                  href="https://www.google.com/maps?q=Olga%20Orozco%202855%2C%20Local%205%2C%20Poeta%20Lugones%2C%20C%C3%B3rdoba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
                >
                  Ver en Google Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-lg">
                <iframe
                  title="Ubicación WiNet Soluciones"
                  src="https://www.google.com/maps?q=Olga%20Orozco%202855%2C%20Local%205%2C%20Poeta%20Lugones%2C%20C%C3%B3rdoba&output=embed"
                  className="w-full h-80 md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/543515204125" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110"
          aria-label="Chatear por WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold">WiNet Soluciones</span>
          </div>
          <div className="text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} WiNet Soluciones. Todos los derechos reservados.</p>
            <p className="mt-2">www.winet.com.ar</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
