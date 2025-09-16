import React from 'react';
import { Check, Star } from 'lucide-react';

const Membership: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      description: 'Perfect for getting started',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic workout plans',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      popular: false,
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Premium',
      price: '$59',
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)'
      ],
      buttonText: 'Join Now',
      popular: true,
      gradient: 'from-purple-600 to-cyan-600'
    },
    {
      name: 'Elite',
      price: '$99',
      period: 'per month',
      description: 'Ultimate fitness experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal plans',
        'Recovery services',
        'Exclusive member events',
        'VIP locker room access',
        '24/7 gym access'
      ],
      buttonText: 'Go Elite',
      popular: false,
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Membership Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 bg-gradient-to-r ${plan.gradient} text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            All plans include a 7-day free trial • Cancel anytime • No hidden fees
          </p>
          <button className="text-purple-400 hover:text-purple-300 font-semibold underline">
            View detailed comparison →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Membership;