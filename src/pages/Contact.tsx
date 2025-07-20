import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const offices = [
    {
      title: 'Head Office',
      address: '123 Industrial Area, Faisalabad, Punjab, Pakistan 38000',
      phone: '+92-41-123-4567',
      email: 'info@pakistantextiles.com'
    },
    {
      title: 'Export Office',
      address: '456 Export Zone, Karachi, Sindh, Pakistan 74000',
      phone: '+92-21-987-6543',
      email: 'export@pakistantextiles.com'
    },
    {
      title: 'International Office',
      address: '789 Trade Center, Dubai, UAE',
      phone: '+971-4-555-0123',
      email: 'international@pakistantextiles.com'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team to discuss your textile requirements. 
            We're here to help you find the perfect cloth material solutions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-700 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-gray-800">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-700 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-gray-800">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Facility</h3>
              
              {/* Map Placeholder */}
              <div className="bg-gray-300 rounded-lg h-64 mb-6 flex items-center justify-center">
                <p className="text-gray-600">Interactive map will be integrated here</p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-gray-700 mr-2" />
                  Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                  Quick Support
                </h4>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Contact us on WhatsApp for quick responses.
                </p>
                <a
                  href="https://wa.me/924112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors inline-flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What is your minimum order quantity?",
                answer: "Our minimum order quantity varies by fabric type, typically starting from 500 meters per design/color."
              },
              {
                question: "How long does international shipping take?",
                answer: "International shipping typically takes 7-14 business days depending on the destination and shipping method selected."
              },
              {
                question: "Do you provide fabric samples?",
                answer: "Yes, we provide sample swatches for evaluation. Please contact us with your specific requirements."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept wire transfers, letters of credit, and other standard international payment methods."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;