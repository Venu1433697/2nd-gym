import React, { useState } from 'react';
import { Clock, Users, Calendar, Filter, Search } from 'lucide-react';

const Classes: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const classes = [
    {
      name: 'Power Yoga',
      instructor: 'Sarah Johnson',
      time: '6:00 AM - 7:00 AM',
      participants: '12/15',
      day: 'Mon, Wed, Fri',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Intermediate',
      category: 'Yoga',
      description: 'Dynamic yoga flow combining strength, flexibility, and mindfulness.'
    },
    {
      name: 'CrossFit Intensity',
      instructor: 'Mike Chen',
      time: '7:30 AM - 8:30 AM',
      participants: '8/10',
      day: 'Tue, Thu',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Advanced',
      category: 'CrossFit',
      description: 'High-intensity functional movements for maximum fitness gains.'
    },
    {
      name: 'Zumba Dance',
      instructor: 'Maria Garcia',
      time: '6:00 PM - 7:00 PM',
      participants: '18/20',
      day: 'Mon, Wed',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Beginner',
      category: 'Dance',
      description: 'Fun Latin-inspired dance workout that burns calories and lifts spirits.'
    },
    {
      name: 'Strength Circuit',
      instructor: 'David Wilson',
      time: '12:00 PM - 1:00 PM',
      participants: '10/12',
      day: 'Daily',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'All Levels',
      category: 'Strength',
      description: 'Full-body strength training using various equipment and techniques.'
    },
    {
      name: 'Pilates Core',
      instructor: 'Emma Thompson',
      time: '5:30 PM - 6:30 PM',
      participants: '14/16',
      day: 'Tue, Thu, Sat',
      image: 'https://images.pexels.com/photos/3822302/pexels-photo-3822302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Intermediate',
      category: 'Pilates',
      description: 'Core-focused Pilates exercises for stability and strength.'
    },
    {
      name: 'Boxing Bootcamp',
      instructor: 'Alex Rodriguez',
      time: '7:00 PM - 8:00 PM',
      participants: '6/8',
      day: 'Mon, Wed, Fri',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Advanced',
      category: 'Boxing',
      description: 'High-energy boxing workout combining technique and conditioning.'
    },
    {
      name: 'Spin Cycle',
      instructor: 'Lisa Park',
      time: '8:00 AM - 9:00 AM',
      participants: '15/20',
      day: 'Daily',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'All Levels',
      category: 'Cardio',
      description: 'Indoor cycling class with energizing music and motivating instruction.'
    },
    {
      name: 'Aqua Fitness',
      instructor: 'Tom Johnson',
      time: '10:00 AM - 11:00 AM',
      participants: '8/12',
      day: 'Tue, Thu',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Beginner',
      category: 'Aqua',
      description: 'Low-impact water-based exercises perfect for all fitness levels.'
    }
  ];

  const categories = ['All', 'Yoga', 'CrossFit', 'Dance', 'Strength', 'Pilates', 'Boxing', 'Cardio', 'Aqua'];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const filteredClasses = classes.filter(classItem => {
    const matchesFilter = selectedFilter === 'All' || classItem.category === selectedFilter;
    const matchesSearch = classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Fitness Classes
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our expert-led classes designed for all fitness levels. From high-energy workouts to mindful practices, find your perfect fit.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search classes or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getDifficultyColor(classItem.difficulty)}`}>
                      {classItem.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 rounded-full">
                      {classItem.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {classItem.name}
                  </h3>
                  <p className="text-gray-400 mb-3">with {classItem.instructor}</p>
                  <p className="text-gray-300 text-sm mb-4">{classItem.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-purple-400" />
                      <span className="text-sm">{classItem.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-cyan-400" />
                      <span className="text-sm">{classItem.participants} participants</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-pink-400" />
                      <span className="text-sm">{classItem.day}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No classes found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Weekly Schedule
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-purple-400 font-semibold">Time</th>
                    <th className="pb-4 text-purple-400 font-semibold">Monday</th>
                    <th className="pb-4 text-purple-400 font-semibold">Tuesday</th>
                    <th className="pb-4 text-purple-400 font-semibold">Wednesday</th>
                    <th className="pb-4 text-purple-400 font-semibold">Thursday</th>
                    <th className="pb-4 text-purple-400 font-semibold">Friday</th>
                    <th className="pb-4 text-purple-400 font-semibold">Saturday</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium">6:00 AM</td>
                    <td className="py-4">Power Yoga</td>
                    <td className="py-4">-</td>
                    <td className="py-4">Power Yoga</td>
                    <td className="py-4">-</td>
                    <td className="py-4">Power Yoga</td>
                    <td className="py-4">Pilates Core</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium">7:30 AM</td>
                    <td className="py-4">-</td>
                    <td className="py-4">CrossFit Intensity</td>
                    <td className="py-4">-</td>
                    <td className="py-4">CrossFit Intensity</td>
                    <td className="py-4">-</td>
                    <td className="py-4">-</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium">8:00 AM</td>
                    <td className="py-4">Spin Cycle</td>
                    <td className="py-4">Spin Cycle</td>
                    <td className="py-4">Spin Cycle</td>
                    <td className="py-4">Spin Cycle</td>
                    <td className="py-4">Spin Cycle</td>
                    <td className="py-4">Spin Cycle</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium">12:00 PM</td>
                    <td className="py-4">Strength Circuit</td>
                    <td className="py-4">Strength Circuit</td>
                    <td className="py-4">Strength Circuit</td>
                    <td className="py-4">Strength Circuit</td>
                    <td className="py-4">Strength Circuit</td>
                    <td className="py-4">Strength Circuit</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium">6:00 PM</td>
                    <td className="py-4">Zumba Dance</td>
                    <td className="py-4">-</td>
                    <td className="py-4">Zumba Dance</td>
                    <td className="py-4">-</td>
                    <td className="py-4">-</td>
                    <td className="py-4">-</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">7:00 PM</td>
                    <td className="py-4">Boxing Bootcamp</td>
                    <td className="py-4">-</td>
                    <td className="py-4">Boxing Bootcamp</td>
                    <td className="py-4">-</td>
                    <td className="py-4">Boxing Bootcamp</td>
                    <td className="py-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;