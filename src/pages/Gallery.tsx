import React, { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Equipment',
      title: 'State-of-the-Art Equipment'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Training',
      title: 'Personal Training Session'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Classes',
      title: 'Group Fitness Classes'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Classes',
      title: 'Yoga Sessions'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Classes',
      title: 'Dance Fitness'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3822302/pexels-photo-3822302.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Classes',
      title: 'Pilates Classes'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Training',
      title: 'Boxing Training'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Facilities',
      title: 'Swimming Pool'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Equipment',
      title: 'Cardio Equipment'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Facilities',
      title: 'Locker Rooms'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Training',
      title: 'Strength Training'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      category: 'Facilities',
      title: 'Recovery Area'
    }
  ];

  const categories = ['All', 'Equipment', 'Training', 'Classes', 'Facilities'];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the transformation and energy of our fitness community through our state-of-the-art facilities and vibrant atmosphere
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-800"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.category}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Virtual Tour
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a virtual walk through our facilities and see what makes FitZone Pro special
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Experience Our Facilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Main Workout Floor</h4>
                    <p className="text-gray-300">Over 10,000 sq ft of premium equipment and open space</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Group Fitness Studios</h4>
                    <p className="text-gray-300">Multiple studios for various class types and sizes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Recovery Zone</h4>
                    <p className="text-gray-300">Dedicated area for stretching, massage, and relaxation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Premium Amenities</h4>
                    <p className="text-gray-300">Luxury locker rooms, sauna, and member lounge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
                  alt="Virtual Tour Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg mb-1">360° Virtual Tour</h4>
                  <p className="text-gray-300 text-sm">Click to explore our facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Transformations */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Member Transformations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the incredible results our members have achieved with dedication and our expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="aspect-square bg-gray-700 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Before & After</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Amazing Transformation</h3>
                <p className="text-gray-300 text-sm">
                  "FitZone Pro helped me achieve results I never thought possible. The trainers and community support made all the difference."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;