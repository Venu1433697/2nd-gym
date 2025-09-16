import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '5000+', label: 'Active Members', icon: Users },
    { number: '15', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Expert Trainers', icon: Award },
    { number: '3', label: 'Locations', icon: MapPin }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About FitZone Pro
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              For over 15 years, FitZone Pro has been the premier destination for fitness enthusiasts 
              seeking transformation, community, and excellence. We believe fitness is not just about 
              physical strength—it's about building mental resilience, fostering connections, and 
              creating lasting lifestyle changes.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our state-of-the-art facilities, world-class equipment, and expert trainers provide 
              the perfect environment for achieving your goals. Whether you're a beginner taking 
              your first steps or an athlete pushing your limits, we're here to support your journey.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Modern gym interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Certified Excellence</div>
                  <div className="text-sm text-gray-400">ISO 9001:2015 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;