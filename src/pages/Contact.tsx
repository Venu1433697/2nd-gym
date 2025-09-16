import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      name: 'Downtown Location',
      address: '123 Fitness Street, Downtown District, New York, NY 10001',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
    },
    {
      name: 'Uptown Branch',
      address: '456 Health Avenue, Uptown District, New York, NY 10002',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
    },
    {
      name: 'Westside Center',
      address: '789 Wellness Boulevard, Westside, New York, NY 10003',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our friendly staff',
      details: ['Main: (555) 123-4567', 'Emergency: (555) 987-6543'],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message anytime',
      details: ['info@fitzonepro.com', 'support@fitzonepro.com'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us online',
      details: ['Available 24/7', 'Instant responses'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Calendar,
      title: 'Schedule Visit',
      description: 'Book a facility tour',
      details: ['Free consultation', 'Flexible scheduling'],
      color: 'from-cyan-500 to-cyan-700'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your fitness journey? Get in touch with us today and let's make it happen together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <div className="space-y-1">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="" className="bg-gray-800">Select a subject</option>
                    <option value="membership" className="bg-gray-800">Membership Inquiry</option>
                    <option value="personal-training" className="bg-gray-800">Personal Training</option>
                    <option value="classes" className="bg-gray-800">Group Classes</option>
                    <option value="facilities" className="bg-gray-800">Facilities Tour</option>
                    <option value="corporate" className="bg-gray-800">Corporate Membership</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell us how we can help you"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Our Locations</h3>
                    <p className="text-gray-300 mb-2">
                      We have three convenient locations across the city to serve you better.
                    </p>
                    <p className="text-purple-400 font-semibold">See all locations below</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">
                      Main: (555) 123-4567<br />
                      Emergency: (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">
                      info@fitzonepro.com<br />
                      support@fitzonepro.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      Mon - Fri: 5:00 AM - 11:00 PM<br />
                      Sat - Sun: 6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Response Guarantee</h3>
                  <p className="text-gray-300 mb-4">
                    We're committed to responding to all inquiries within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-400 font-semibold">Our team is here to help!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Locations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the FitZone Pro location nearest to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{location.phone}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{location.hours}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your operating hours?",
                answer: "We're open Monday-Friday 5AM-11PM and Saturday-Sunday 6AM-10PM. Some locations may have extended hours."
              },
              {
                question: "Do you offer day passes?",
                answer: "Yes, we offer day passes for $25. This gives you full access to all facilities and equipment for one day."
              },
              {
                question: "Can I tour the facility before joining?",
                answer: "Absolutely! We encourage prospective members to tour our facilities. Contact us to schedule a free tour and consultation."
              },
              {
                question: "Do you have parking available?",
                answer: "Yes, all our locations offer free parking for members and visitors."
              },
              {
                question: "What safety measures do you have in place?",
                answer: "We maintain the highest safety standards with regular equipment maintenance, trained staff, and comprehensive safety protocols."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;