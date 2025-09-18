import React from 'react';
import dumbbellCursorImg from '../assets/dumbbell-cursor.png';
import { useEffect } from 'react';
import { Play, ArrowRight, Award, Users, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Dumbbell cursor logic
  useEffect(() => {
    const cursor = document.getElementById('dumbbell-cursor');
    if (!cursor) return;
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 20}px`;
      cursor.style.top = `${e.clientY - 20}px`;
    };
    const shrinkCursor = () => {
      cursor.style.transform = 'scale(0.6)';
    };
    const restoreCursor = () => {
      cursor.style.transform = 'scale(1)';
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', shrinkCursor);
    document.addEventListener('mouseup', restoreCursor);
    document.body.style.cursor = 'none';
    cursor.style.transform = 'scale(1)';
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', shrinkCursor);
      document.removeEventListener('mouseup', restoreCursor);
      document.body.style.cursor = '';
    };
  }, []);
  const stats = [
    { number: '5000+', label: 'Active Members', icon: Users },
    { number: '15', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Expert Trainers', icon: Award },
    { number: '3', label: 'Locations', icon: MapPin }
  ];

  return (
  <>
      {/* Custom Dumbbell Cursor */}
      <div id="dumbbell-cursor" style={{position: 'fixed', left: 0, top: 0, pointerEvents: 'none', zIndex: 9999, width: 80, height: 80, transition: 'transform 0.15s', transform: 'scale(1)'}}>
        <img src={dumbbellCursorImg} alt="Dumbbell Cursor" style={{width: '80px', height: '80px', objectFit: 'contain', animation: 'dumbbell-rotate 5s linear infinite'}} />
      </div>
      <style>{`
        @keyframes dumbbell-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div className="min-h-screen">
        {/* Social Media Icon Bar */}
        <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.922.001c-1.506 0-1.797.716-1.797 1.765v2.316h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.007-.857 3.17 0 2.188 1.115 4.116 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323 1.281.059 1.69.072 4.946.072s3.665-.013 4.946-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M20.52 3.478A11.797 11.797 0 0 0 12.004.001C5.373.001.001 5.373.001 12.004c0 2.119.555 4.187 1.607 6.013L.057 23.943l5.065-1.327a11.93 11.93 0 0 0 5.882 1.501h.005c6.631 0 12.003-5.372 12.003-12.003a11.93 11.93 0 0 0-3.492-8.637zm-8.516 18.41h-.004a10.6 10.6 0 0 1-5.377-1.475l-.386-.229-3.006.788.802-2.933-.251-.402a10.63 10.63 0 0 1-1.583-5.729c0-5.867 4.775-10.642 10.643-10.642a10.6 10.6 0 0 1 7.537 3.117 10.6 10.6 0 0 1 3.106 7.526c-.001 5.867-4.776 10.642-10.643 10.642zm6.063-7.563c-.331-.166-1.957-.966-2.26-1.077-.303-.111-.524-.166-.745.166-.221.332-.854 1.077-1.047 1.299-.192.221-.384.249-.715.083-.331-.166-1.398-.515-2.664-1.642-.985-.878-1.65-1.963-1.844-2.294-.192-.332-.021-.511.145-.677.149-.148.332-.384.498-.576.166-.192.221-.332.332-.554.111-.221.055-.415-.027-.576-.083-.166-.745-1.799-1.021-2.465-.269-.646-.542-.559-.745-.569-.192-.008-.415-.01-.636-.01-.221 0-.576.083-.878.415-.303.332-1.154 1.129-1.154 2.754 0 1.625 1.181 3.191 1.345 3.414.166.221 2.324 3.553 5.635 4.832.788.34 1.402.543 1.88.694.789.252 1.508.217 2.078.132.634-.094 1.957-.799 2.234-1.57.276-.771.276-1.432.193-1.57-.083-.138-.303-.221-.634-.387z"/></svg>
          </a>
        </div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Transform Your</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the ultimate fitness experience with state-of-the-art equipment, expert trainers, 
            and a community that pushes you to achieve greatness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/membership"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose FitZone Pro?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of members who have transformed their lives with us
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-900">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white mb-2">Q: Do I need prior experience to join?</h3>
                  <p className="text-gray-300">A: No, we welcome all fitness levels! Our trainers will guide you based on your goals.</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white mb-2">Q: Are there personal training sessions?</h3>
                  <p className="text-gray-300">A: Yes, we offer one-on-one personal training customized to your fitness level.</p>
                </div>
              </div>
            </div>
          </section>
      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  State-of-the-Art Facilities
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Experience fitness like never before with our cutting-edge equipment, 
                spacious workout areas, and premium amenities designed for your comfort and success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Latest cardio and strength equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Spacious group fitness studios</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Luxury locker rooms and amenities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Recovery and wellness areas</span>
                </div>
              </div>

              <Link 
                to="/about"
                className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                  alt="Modern gym interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Begin Your Fitness Journey?</h2>
            <p className="text-lg text-gray-300 mb-8">Start today and become a part of the FitZone family.</p>
            <Link
              to="/membership"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Now
            </Link>
          </div>
        </section>
    </div>
  </>
  );
};

export default Home;