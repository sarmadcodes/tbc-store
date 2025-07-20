import React from 'react';
import { CheckCircle, Award, Globe, Users, Factory, Truck } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1985', event: 'Company founded in Faisalabad' },
    { year: '1992', event: 'First international export to Europe' },
    { year: '2001', event: 'ISO 9001 certification achieved' },
    { year: '2010', event: 'Expansion to serve 25+ countries' },
    { year: '2018', event: 'Sustainable manufacturing initiatives launched' },
    { year: '2024', event: 'Serving 50+ countries worldwide' }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'OEKO-TEX Standard 100',
    'GOTS (Global Organic Textile Standard)',
    'BCI (Better Cotton Initiative)',
    'WRAP (Worldwide Responsible Accredited Production)'
  ];

  const capabilities = [
    {
      icon: Factory,
      title: 'State-of-the-Art Manufacturing',
      description: 'Modern machinery and production facilities with capacity for large-scale orders'
    },
    {
      icon: Globe,
      title: 'Global Export Network',
      description: 'Established shipping and logistics partnerships covering 50+ countries'
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: '500+ experienced artisans and technicians ensuring quality craftsmanship'
    },
    {
      icon: Truck,
      title: 'Efficient Logistics',
      description: 'Streamlined supply chain management for timely delivery worldwide'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Crafting Excellence Since 1985
              </h1>
              <p className="text-xl text-blue-100 mb-8">
              </p>
              <p className="text-xl text-gray-200 mb-8">
                From a small family business to a globally recognized textile manufacturer, 
                our journey has been defined by unwavering commitment to quality and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-300">35+</div>
                  <div className="text-gray-200">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-300">50+</div>
                  <div className="text-gray-200">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5559959/pexels-photo-5559959.jpeg"
                alt="Textile Manufacturing"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global recognition, discover how we've grown while 
              maintaining our commitment to quality and craftsmanship.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-gray-700 rounded-full transform md:-translate-x-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border">
                      <div className="text-2xl font-bold text-gray-700 mb-2">{milestone.year}</div>
                      <div className="text-gray-800">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
            <p className="text-xl text-gray-600">
              Our state-of-the-art manufacturing process ensures consistent quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <capability.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Quality Certifications
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our commitment to quality is validated by international certifications 
                and industry standards that ensure excellence in every product.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6069129/pexels-photo-6069129.jpeg"
                alt="Quality Control"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Global Export Capabilities</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              With established partnerships and efficient logistics, we serve clients across continents 
              with reliable, timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+ Countries</h3>
              <p className="text-gray-200">Global reach across all continents</p>
            </div>
            <div className="text-center">
              <Truck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fast Shipping</h3>
              <p className="text-gray-200">Efficient logistics network</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-200">International quality standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;