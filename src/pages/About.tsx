import React from 'react';
import { Award, Users, Clock, MapPin, Target, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '5000+', label: 'Active Members', icon: Users },
    { number: '15', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Expert Trainers', icon: Award },
    { number: '3', label: 'Locations', icon: MapPin }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our equipment to our service.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and motivated.',
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly evolving with the latest fitness trends and technology.',
      color: 'from-cyan-500 to-cyan-700'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Personal Training',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Certified trainer with 10+ years experience in strength training and nutrition.',
      certifications: ['NASM-CPT', 'Precision Nutrition']
    },
    {
      name: 'Mike Chen',
      role: 'CrossFit Director',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Former competitive athlete specializing in functional fitness and HIIT.',
      certifications: ['CrossFit Level 3', 'Olympic Lifting']
    },
    {
      name: 'Maria Garcia',
      role: 'Group Fitness Manager',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Dance and fitness instructor passionate about making workouts fun and inclusive.',
      certifications: ['Zumba Instructor', 'Yoga Alliance RYT-200']
    },
    {
      name: 'David Wilson',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Sports performance specialist working with athletes and fitness enthusiasts.',
      certifications: ['CSCS', 'FMS Level 2']
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
                About FitZone Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming lives through fitness for over 15 years with dedication, expertise, and community spirit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Story
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in 2009, FitZone Pro began as a small neighborhood gym with a big vision: 
                to create a fitness community where everyone could achieve their personal best. 
                What started with just 200 square feet and basic equipment has grown into a 
                premier fitness destination spanning three locations.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our journey has been driven by one simple belief: fitness is not just about 
                physical transformation—it's about building confidence, creating connections, 
                and fostering a lifestyle that enhances every aspect of your life. Today, 
                we're proud to serve over 5,000 members who have become part of our extended family.
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

      {/* Mission & Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Mission & Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to empowering individuals to achieve their fitness goals through 
              expert guidance, state-of-the-art facilities, and unwavering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h3>
            <p className="text-xl text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
              "To inspire and empower individuals to transform their lives through fitness, 
              creating a supportive community where everyone can achieve their personal best 
              and live healthier, more fulfilling lives."
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified trainers and fitness experts are here to guide you on your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  {member.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="inline-block bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs mr-1"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                World-Class Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art equipment and amenities designed for your comfort and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cardio Zone',
                description: 'Latest treadmills, ellipticals, and bikes with entertainment systems',
                image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
              },
              {
                title: 'Strength Training',
                description: 'Premium free weights and resistance machines for all levels',
                image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
              },
              {
                title: 'Group Fitness Studios',
                description: 'Spacious studios with professional sound and lighting systems',
                image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
              },
              {
                title: 'Recovery Center',
                description: 'Massage therapy, stretching areas, and relaxation zones',
                image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
              },
              {
                title: 'Swimming Pool',
                description: 'Olympic-size pool for lap swimming and aqua fitness classes',
                image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
              },
              {
                title: 'Luxury Amenities',
                description: 'Premium locker rooms, sauna, steam room, and member lounge',
                image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
              }
            ].map((facility, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                  <p className="text-gray-300">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognized for excellence in fitness and customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2023', award: 'Best Gym in the City', organization: 'City Fitness Awards' },
              { year: '2022', award: 'Excellence in Customer Service', organization: 'Fitness Industry Association' },
              { year: '2021', award: 'Innovation in Fitness Technology', organization: 'Tech Fitness Awards' },
              { year: '2020', award: 'Community Impact Award', organization: 'Local Business Council' }
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{award.year}</div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">{award.award}</h3>
                <p className="text-gray-400 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;