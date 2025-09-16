import React from 'react';
import { Dumbbell, Users, Heart, Target, Zap, Trophy } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase power with our comprehensive strength training programs.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve your cardiovascular health with high-energy cardio sessions.',
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our motivated community in dynamic group fitness classes.',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific fitness goals.',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Zap,
      title: 'HIIT Sessions',
      description: 'High-intensity interval training for maximum calorie burn.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Trophy,
      title: 'Competition Prep',
      description: 'Professional guidance for bodybuilding and fitness competitions.',
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your peak performance
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
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;