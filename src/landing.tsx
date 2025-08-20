'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

// Define interfaces for type safety
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  images: string[];
}

interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  location: string;
  details: string;
}

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  service: string;
}

const SafariAdventures = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    location: '',
    details: ''
  });

  const services: Service[] = [
    {
      id: 1,
      title: "Wedding Transportation",
      description: "Elegant and reliable transport for your special day with decorated vehicles.",
      icon: "heart-fill",
      category: "celebrations",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Private Vehicle Hire",
      description: "Cars, vans, and buses available for hire with professional drivers.",
      icon: "truck",
      category: "transport",
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Funeral & Send-off Services",
      description: "Respectful and dignified transportation during difficult times.",
      icon: "flower1",
      category: "ceremonies",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1494976688153-d4ac80a96629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Ruracio Ceremonies",
      description: "Traditional ceremony transport with cultural sensitivity and care.",
      icon: "people-fill",
      category: "ceremonies",
      images: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      title: "Birthday Parties",
      description: "Fun and safe transportation for birthday celebrations of all ages.",
      icon: "gift-fill",
      category: "celebrations",
      images: [
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      title: "Road Trips",
      description: "Comfortable long-distance travel with experienced drivers.",
      icon: "signpost-fill",
      category: "adventure",
      images: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 7,
      title: "Camping Adventures",
      description: "Transport to camping sites with equipment handling capabilities.",
      icon: "tree-fill",
      category: "adventure",
      images: [
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 8,
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services to/from airports.",
      icon: "airplane-fill",
      category: "transport",
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 9,
      title: "Graduation Events",
      description: "Celebrate academic achievements with professional transport services.",
      icon: "mortarboard-fill",
      category: "celebrations",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 10,
      title: "Vacation Transport",
      description: "Holiday transportation to make your vacation stress-free.",
      icon: "umbrella-fill",
      category: "leisure",
      images: [
        "https://images.unsplash.com/photo-1520637836862-4d197d17c23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 11,
      title: "Private Parties",
      description: "Exclusive transport for private events and gatherings.",
      icon: "balloon-fill",
      category: "celebrations",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 12,
      title: "Weekend Getaways",
      description: "Quick escapes made easy with comfortable transport solutions.",
      icon: "sunrise-fill",
      category: "leisure",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497436072909-f5e4be1f2562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 13,
      title: "Hiking Events",
      description: "Transport to hiking destinations with gear accommodation.",
      icon: "geo-alt-fill",
      category: "adventure",
      images: [
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 14,
      title: "National Parks & Game Drives",
      description: "Wildlife viewing trips with knowledgeable local guides.",
      icon: "binoculars-fill",
      category: "adventure",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Grace Wanjiku",
      quote: "Safaris Adventure made our wedding day perfect! Professional drivers and beautiful decorated cars.",
      rating: 5,
      service: "Wedding Transportation"
    },
    {
      id: 2,
      name: "John Kariuki",
      quote: "Reliable airport pickup service. Always on time and very courteous drivers. Highly recommended!",
      rating: 5,
      service: "Airport Transfers"
    },
    {
      id: 3,
      name: "The Mwangi Family",
      quote: "Our family vacation transport was excellent. Safe, comfortable, and the driver was very knowledgeable about local attractions.",
      rating: 5,
      service: "Vacation Transport"
    }
  ];

  const handleBooking = (service: Service) => {
    setSelectedService(service.title);
    setBookingDetails(prev => ({ ...prev, service: service.title }));
  };

  const nextImage = (serviceId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (serviceId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppBooking = () => {
    const { name, phone, email, service, date, location, details } = bookingDetails;
    const message = `Hello Safaris Adventure!

I would like to book the following service:
*Service:* ${service}
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Preferred Date:* ${date}
*Location/Pickup Point:* ${location}
*Additional Details:* ${details}

Please confirm availability and provide a quote.

Thank you!`;

    const whatsappUrl = `https://wa.me/254702308649?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal after booking
    setSelectedService('');
    setBookingDetails({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      location: '',
      details: ''
    });
  };

  const handleEmailBooking = () => {
    const { name, phone, email, service, date, location, details } = bookingDetails;
    const subject = `Booking Request - ${service}`;
    const body = `Dear Safaris Adventure Team,

I would like to book the following service:

Service: ${service}
Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Date: ${date}
Location/Pickup Point: ${location}
Additional Details: ${details}

Please confirm availability and provide a quote.

Best regards,
${name}`;

    const mailtoUrl = `mailto:safarisadventure03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
    
    // Close modal after booking
    setSelectedService('');
    setBookingDetails({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      location: '',
      details: ''
    });
  };

  const closeModal = () => {
    setSelectedService('');
    setBookingDetails({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      location: '',
      details: ''
    });
  };

  const isFormValid = () => {
    return bookingDetails.name && bookingDetails.phone && bookingDetails.service && bookingDetails.date;
  };

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 min-h-screen">
      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
      
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <i className="bi bi-truck text-2xl sm:text-3xl text-indigo-600"></i>
              <div>
                <div className="text-indigo-600 font-bold text-lg sm:text-xl lg:text-2xl leading-tight">SAFARIS ADVENTURE</div>
                <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">Road Services Anywhere, Anytime</div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl sm:text-2xl`}></i>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm lg:text-base">Home</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm lg:text-base">Services</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm lg:text-base">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm lg:text-base">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm lg:text-base">Contact</a>
            </div>
            
            {/* CTA Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:flex space-x-3">
              <a href="https://wa.me/254702308649" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 text-sm">
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="space-y-2">
                <a href="#home" className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition-colors">Home</a>
                <a href="#services" className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition-colors">Services</a>
                <a href="#about" className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition-colors">About</a>
                <a href="#testimonials" className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition-colors">Reviews</a>
                <a href="#contact" className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition-colors">Contact</a>
              </div>
              <div className="mt-4 space-y-2">
                <a href="https://wa.me/254702308649" target="_blank" className="block bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center space-x-2">
                  <i className="bi bi-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <div className="max-w-4xl text-white text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Road Services
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block mt-2">
                Anywhere, Anytime
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl">
              Customer comfort and demand is our priority. Professional transport services for all your special moments and travel needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 justify-center sm:justify-start">
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </button>
              <a
                href="https://wa.me/254702308649"
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-indigo-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <i className="bi bi-whatsapp text-lg sm:text-xl"></i>
                <span>Contact WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Our Services</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 px-4">
              Comprehensive road transport services tailored to meet your every need. From celebrations to adventures, we&apos;ve got you covered.
            </p>
          </div>
          
          {/* Services Grid - Fully responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 sm:hover:-translate-y-2">
                {/* Image Carousel */}
                <div className="relative mb-3 sm:mb-4 rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src={service.images[currentImageIndex[service.id] || 0]}
                      alt={`${service.title} - Image ${(currentImageIndex[service.id] || 0) + 1}`}
                      fill
                      className="object-cover transition-opacity duration-300"
                    />
                    
                    {/* Navigation buttons - only show if more than 1 image */}
                    {service.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(service.id, service.images.length)}
                          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        >
                          <i className="bi bi-chevron-left text-xs sm:text-sm"></i>
                        </button>
                        <button
                          onClick={() => nextImage(service.id, service.images.length)}
                          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        >
                          <i className="bi bi-chevron-right text-xs sm:text-sm"></i>
                        </button>
                        
                        {/* Dots indicator */}
                        <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {service.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [service.id]: index }))}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                                (currentImageIndex[service.id] || 0) === index 
                                  ? 'bg-white' 
                                  : 'bg-white/50 hover:bg-white/70'
                              }`}
                            ></button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <i className={`bi bi-${service.icon} text-lg sm:text-xl lg:text-2xl text-indigo-600 group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 line-clamp-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">{service.description}</p>
                <button 
                  onClick={() => handleBooking(service)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Modal/Section */}
      {selectedService && (
        <section 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={(e) => {
            // Close modal when clicking outside
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pr-4">Book {selectedService}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl cursor-pointer hover:bg-gray-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all flex-shrink-0"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                    required
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="date"
                    name="date"
                    value={bookingDetails.date}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Pickup Location"
                    value={bookingDetails.location}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                  />
                </div>
                
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Additional details about your booking..."
                  value={bookingDetails.details}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-sm sm:text-base"
                ></textarea>
                
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 pt-2 sm:pt-4">
                  <button 
                    onClick={handleWhatsAppBooking}
                    disabled={!isFormValid()}
                    className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <i className="bi bi-whatsapp text-lg sm:text-xl"></i>
                    <span>Book via WhatsApp</span>
                  </button>
                  <button 
                    onClick={handleEmailBooking}
                    disabled={!isFormValid()}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <i className="bi bi-envelope-fill text-lg sm:text-xl"></i>
                    <span>Book via Email</span>
                  </button>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-500 text-center px-2">
                  * Required fields. You&apos;ll be redirected to WhatsApp or Email with your booking details.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Why Choose Safaris Adventure</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-bullseye text-2xl sm:text-3xl text-white"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Customer Priority</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">Your comfort and demands are our top priority. We tailor our services to exceed your expectations every time.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-person-check-fill text-2xl sm:text-3xl text-white"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Professional Drivers</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">Our experienced and courteous drivers ensure safe, reliable, and comfortable transportation for all occasions.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="bi bi-clock-fill text-2xl sm:text-3xl text-white"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">Road services anywhere, anytime. We&apos;re available round the clock to meet your transportation needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">What Our Clients Say</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-indigo-600 text-xs sm:text-sm">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Book Your Service?</h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-indigo-100 px-4">
            Get in touch with us today for a quote or to make a reservation. We&apos;re here to serve you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 max-w-2xl mx-auto">
            <a
              href="https://wa.me/254702308649"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <i className="bi bi-whatsapp text-lg sm:text-xl"></i>
              <span className="whitespace-nowrap">WhatsApp: 0702308649</span>
            </a>
            <a
              href="tel:+254780253855"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <i className="bi bi-telephone-fill text-lg sm:text-xl"></i>
              <span className="whitespace-nowrap">Call: 0780253855</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <i className="bi bi-truck text-2xl sm:text-3xl text-indigo-400"></i>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-400">SAFARIS ADVENTURES</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Road Services Anywhere, Anytime</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                We are the best road servers anywhere anytime. Customer comfort and demand is our priority. Professional transportation services for all your needs.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/254702308649" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">
                  <i className="bi bi-whatsapp text-xl sm:text-2xl"></i>
                </a>
                <a href="tel:+254702308649" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <i className="bi bi-telephone-fill text-xl sm:text-2xl"></i>
                </a>
                <a href="mailto:safarisadventure03@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <i className="bi bi-envelope-fill text-xl sm:text-2xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-indigo-400">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Reviews</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-indigo-400">Contact Info</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3">
                  <i className="bi bi-telephone-fill text-indigo-400 mt-1 flex-shrink-0"></i>
                  <div className="text-gray-400 text-sm sm:text-base">
                    <div>0702308649</div>
                    <div>0780253855</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="bi bi-envelope-fill text-indigo-400 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-400 text-sm sm:text-base break-all">safarisadventure03@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="bi bi-whatsapp text-indigo-400 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-400 text-sm sm:text-base">WhatsApp Available 24/7</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="bi bi-geo-alt-fill text-indigo-400 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-400 text-sm sm:text-base">Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Safaris Adventure. All rights reserved. | Designed by Xelerated Tech</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SafariAdventures;