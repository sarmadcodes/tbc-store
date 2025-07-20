import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Award, Truck, Users, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'ISO certified manufacturing with rigorous quality control standards'
    },
    {
      icon: Globe,
      title: 'Global Export',
      description: 'Serving 50+ countries with reliable international shipping'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: '35+ years of excellence in Pakistani textile manufacturing'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Efficient logistics and timely delivery worldwide'
    }
  ];

  const fabricHighlights = [
    {
      id: 1,
      name: 'Premium Cotton',
      image: 'https://images.pexels.com/photos/5559959/pexels-photo-5559959.jpeg',
      description: 'High-quality cotton fabrics for global fashion brands'
    },
    {
      id: 2,
      name: 'Denim Collection',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      description: 'Durable denim fabrics in various weights and washes'
    },
    {
      id: 3,
      name: 'Luxury Silk',
      image: 'https://images.pexels.com/photos/6069129/pexels-photo-6069129.jpeg',
      description: 'Exquisite silk fabrics for premium garments'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Masterfully Crafted Cloth Materials
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Weaving tradition with innovation since 2022. Premium cloth materials for discerning global clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
            >
              View Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/request-quote"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TheBrokenColumn?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver premium cloth materials that meet international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:bg-gray-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cloth Materials</h2>
            <p className="text-xl text-gray-600">Discover our premium cloth material collections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricHighlights.map((fabric) => (
              <div key={fabric.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600">{fabric.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">35+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">50+</div>
              <div className="text-lg">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">1000+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">500K+</div>
              <div className="text-lg">Meters Produced</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied clients worldwide who trust us for their textile needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/request-quote"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors"
            >
              Get Your Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
