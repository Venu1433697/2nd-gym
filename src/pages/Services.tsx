import React from 'react';
import { Dumbbell, Users, Heart, Target, Zap, Trophy, Clock, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase power with our comprehensive strength training programs using state-of-the-art equipment.',
      features: ['Free weights', 'Resistance machines', 'Functional training', 'Progressive overload'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve your cardiovascular health with high-energy cardio sessions designed for all fitness levels.',
      features: ['Treadmills & bikes', 'HIIT training', 'Dance cardio', 'Outdoor activities'],
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our motivated community in dynamic group fitness classes led by certified instructors.',
      features: ['Yoga & Pilates', 'Zumba & Dance', 'Spin classes', 'Boot camps'],
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific fitness goals with personalized workout plans.',
      features: ['Custom programs', 'Nutrition guidance', 'Progress tracking', 'Flexible scheduling'],
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Zap,
      title: 'HIIT Sessions',
      description: 'High-intensity interval training for maximum calorie burn and improved athletic performance.',
      features: ['Circuit training', 'Metabolic workouts', 'Plyometrics', 'Core conditioning'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Trophy,
      title: 'Competition Prep',
      description: 'Professional guidance for bodybuilding and fitness competitions with expert coaching.',
      features: ['Contest prep', 'Posing practice', 'Diet planning', 'Peak conditioning'],
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  const additionalServices = [
    {
      title: 'Nutrition Counseling',
      description: 'Work with certified nutritionists to develop meal plans that complement your fitness goals.',
      icon: '🥗'
    },
    {
      title: 'Recovery Services',
      description: 'Massage therapy, stretching sessions, and recovery protocols to optimize your performance.',
      icon: '💆‍♂️'
    },
    {
      title: 'Fitness Assessments',
      description: 'Comprehensive body composition analysis and fitness testing to track your progress.',
      icon: '📊'
    },
    {
      title: 'Wellness Programs',
      description: 'Holistic approach to health including stress management and lifestyle coaching.',
      icon: '🧘‍♀️'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive fitness solutions designed to help you reach your peak performance and achieve lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Star className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete wellness solutions for a holistic approach to your health and fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Hours</h2>
            <p className="text-gray-300">Our services are available during these hours</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Personal Training</h3>
              <p className="text-gray-300">Mon-Fri: 6AM - 10PM<br />Sat-Sun: 7AM - 8PM</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Group Classes</h3>
              <p className="text-gray-300">Daily: 6AM - 9PM<br />Various time slots</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Recovery Services</h3>
              <p className="text-gray-300">Mon-Fri: 9AM - 8PM<br />Sat: 10AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;