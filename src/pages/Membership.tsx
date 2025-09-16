import React, { useState } from 'react';
import { Check, Star, Gift, CreditCard, Calendar, Users } from 'lucide-react';

const Membership: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for getting started',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic workout plans',
        'Mobile app access',
        'Free fitness assessment'
      ],
      buttonText: 'Get Started',
      popular: false,
      gradient: 'from-gray-600 to-gray-800',
      savings: 'Save $58/year'
    },
    {
      name: 'Premium',
      monthlyPrice: 59,
      yearlyPrice: 590,
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)',
        'Access to premium equipment'
      ],
      buttonText: 'Join Now',
      popular: true,
      gradient: 'from-purple-600 to-cyan-600',
      savings: 'Save $118/year'
    },
    {
      name: 'Elite',
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'Ultimate fitness experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal plans',
        'Recovery services',
        'Exclusive member events',
        'VIP locker room access',
        '24/7 gym access',
        'Complimentary supplements'
      ],
      buttonText: 'Go Elite',
      popular: false,
      gradient: 'from-yellow-500 to-orange-600',
      savings: 'Save $198/year'
    }
  ];

  const corporateFeatures = [
    'Discounted group rates',
    'Flexible payment options',
    'Corporate wellness programs',
    'Team building activities',
    'Health screenings',
    'Dedicated account manager'
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Membership Plans
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan to achieve your fitness goals with flexible options designed for every lifestyle
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'transform translate-x-8' : ''
                }`}></div>
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save up to 20%
                </span>
              )}
            </div>
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
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-400 text-sm font-semibold">{plan.savings}</p>
                  )}
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
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Gift className="h-4 w-4 mr-1" />
                Free trial
              </span>
              <span className="flex items-center">
                <CreditCard className="h-4 w-4 mr-1" />
                Secure payment
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Flexible cancellation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Membership */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Corporate Membership
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Invest in your team's health and productivity with our comprehensive corporate wellness programs.
              </p>
              
              <ul className="space-y-4 mb-8">
                {corporateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Users className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
                Request Corporate Quote
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Benefits for Your Team</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💪</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Improved Productivity</h4>
                    <p className="text-gray-300 text-sm">Regular exercise boosts energy levels and mental clarity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">❤️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Reduced Healthcare Costs</h4>
                    <p className="text-gray-300 text-sm">Preventive wellness programs lower medical expenses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Team Building</h4>
                    <p className="text-gray-300 text-sm">Shared fitness goals strengthen workplace relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I freeze my membership?",
                answer: "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel."
              },
              {
                question: "Are there any joining fees?",
                answer: "No joining fees for annual memberships. Monthly memberships have a one-time $50 activation fee."
              },
              {
                question: "Can I bring guests?",
                answer: "Premium and Elite members receive guest passes. Basic members can purchase day passes for guests."
              },
              {
                question: "What if I want to cancel?",
                answer: "You can cancel anytime with 30 days notice. No cancellation fees apply."
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

export default Membership;