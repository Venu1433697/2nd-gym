import React from 'react';
import { Clock, Users, Calendar } from 'lucide-react';

const Classes: React.FC = () => {
  const classes = [
    {
      name: 'Power Yoga',
      instructor: 'Sarah Johnson',
      time: '6:00 AM - 7:00 AM',
      participants: '12/15',
      day: 'Mon, Wed, Fri',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Intermediate'
    },
    {
      name: 'CrossFit Intensity',
      instructor: 'Mike Chen',
      time: '7:30 AM - 8:30 AM',
      participants: '8/10',
      day: 'Tue, Thu',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Advanced'
    },
    {
      name: 'Zumba Dance',
      instructor: 'Maria Garcia',
      time: '6:00 PM - 7:00 PM',
      participants: '18/20',
      day: 'Mon, Wed',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Beginner'
    },
    {
      name: 'Strength Circuit',
      instructor: 'David Wilson',
      time: '12:00 PM - 1:00 PM',
      participants: '10/12',
      day: 'Daily',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'All Levels'
    },
    {
      name: 'Pilates Core',
      instructor: 'Emma Thompson',
      time: '5:30 PM - 6:30 PM',
      participants: '14/16',
      day: 'Tue, Thu, Sat',
      image: 'https://images.pexels.com/photos/3822302/pexels-photo-3822302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Intermediate'
    },
    {
      name: 'Boxing Bootcamp',
      instructor: 'Alex Rodriguez',
      time: '7:00 PM - 8:00 PM',
      participants: '6/8',
      day: 'Mon, Wed, Fri',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      difficulty: 'Advanced'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <section id="classes" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Fitness Classes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our expert-led classes designed for all fitness levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
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
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {classItem.name}
                </h3>
                <p className="text-gray-400 mb-4">with {classItem.instructor}</p>

                <div className="space-y-2">
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

                <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;