import React, { useState } from 'react';
import { ChefHat, Clock, Flame, Eye } from 'lucide-react';

const FoodieWebsite = () => {
  const [hoveredRecipe, setHoveredRecipe] = useState(null);

  const popularRecipes = [
    {
      id: 1,
      name: 'Pizza',
      image: '/api/placeholder/400/250',
      time: '30 min',
      calories: '350 cal'
    },
    {
      id: 2,
      name: 'Pasta',
      image: '/api/placeholder/400/250',
      time: '25 min',
      calories: '280 cal'
    },
    {
      id: 3,
      name: 'Burger',
      image: '/api/placeholder/400/250',
      time: '20 min',
      calories: '450 cal'
    }
  ];

  const categories = [
    { name: 'Breakfast', color: 'bg-orange-100' },
    { name: 'Lunch', color: 'bg-blue-100' },
    { name: 'Dinner', color: 'bg-pink-100' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-orange-100">
      {/* Header */}
      <header className="bg-white bg-opacity-90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-800">Foodie</h1>
            </div>
            <div className="flex space-x-8 items-center">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Recipe</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Planner</a>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">👤</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-6xl font-bold text-gray-800 leading-tight mb-6">
                  Your<br />
                  <span className="text-orange-500">Personalized</span><br />
                  Recipe Planner
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Plan, Cook and Enjoy Meals<br />
                  Tailored Just for you
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get started
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  See Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative">
                  {/* Plate */}
                  <div className="w-80 h-80 bg-gray-50 rounded-full mx-auto relative shadow-inner">
                    {/* Grilled Chicken */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full shadow-md">
                      <div className="absolute inset-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full">
                        {/* Grill marks */}
                        <div className="absolute top-2 left-2 right-2 h-1 bg-orange-700 opacity-30 rounded"></div>
                        <div className="absolute top-5 left-2 right-2 h-1 bg-orange-700 opacity-30 rounded"></div>
                        <div className="absolute top-8 left-2 right-2 h-1 bg-orange-700 opacity-30 rounded"></div>
                        <div className="absolute top-11 left-2 right-2 h-1 bg-orange-700 opacity-30 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Potatoes */}
                    <div className="absolute top-20 right-16 space-y-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`w-6 h-6 bg-yellow-400 rounded-full shadow-sm ${i % 2 === 0 ? 'ml-2' : ''}`}>
                          <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
                        </div>
                      ))}
                    </div>

                    {/* Salad */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-28 h-16">
                      {/* Lettuce */}
                      <div className="absolute inset-0 bg-green-400 rounded-full opacity-80"></div>
                      <div className="absolute top-1 left-1 w-6 h-6 bg-green-500 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 bg-green-300 rounded-full"></div>
                      {/* Tomatoes */}
                      <div className="absolute top-1 right-8 w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="absolute top-6 left-6 w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="absolute bottom-2 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                      {/* Cucumber */}
                      <div className="absolute bottom-1 left-8 w-4 h-2 bg-green-600 rounded-full"></div>
                      <div className="absolute top-4 left-12 w-3 h-2 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Fork */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-45">
                    <div className="w-2 h-20 bg-gray-300 rounded-full shadow-md"></div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 space-y-1">
                      <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Parsley garnish */}
                  <div className="absolute top-12 left-20 w-3 h-3 bg-green-500 rounded-full opacity-80"></div>
                  <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-600 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Popular Recipes</h2>
            <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold">
              <span>View all</span>
              <Eye className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {popularRecipes.map((recipe) => (
              <div 
                key={recipe.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredRecipe(recipe.id)}
                onMouseLeave={() => setHoveredRecipe(null)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-orange-200 to-orange-300 relative">
                    {recipe.name === 'Pizza' && (
                      <div className="absolute inset-4">
                        <div className="w-full h-full bg-yellow-200 rounded-full relative">
                          <div className="absolute inset-2 bg-yellow-300 rounded-full">
                            {/* Pizza toppings */}
                            <div className="absolute top-3 left-6 w-4 h-4 bg-red-500 rounded-full"></div>
                            <div className="absolute top-8 right-6 w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="absolute bottom-8 right-8 w-4 h-4 bg-red-400 rounded-full"></div>
                            <div className="absolute top-12 left-12 w-2 h-2 bg-green-600 rounded-full"></div>
                            <div className="absolute top-6 right-10 w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="absolute bottom-10 left-14 w-3 h-2 bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {recipe.name === 'Pasta' && (
                      <div className="absolute inset-4 flex justify-center items-center">
                        {/* Fork with pasta */}
                        <div className="relative">
                          <div className="w-16 h-2 bg-gray-400 rounded-full transform rotate-45"></div>
                          <div className="absolute -top-2 left-12 transform rotate-45 space-y-1">
                            <div className="w-6 h-1 bg-yellow-600 rounded-full transform -rotate-45"></div>
                            <div className="w-8 h-1 bg-yellow-500 rounded-full transform rotate-12"></div>
                            <div className="w-7 h-1 bg-yellow-600 rounded-full transform -rotate-12"></div>
                            <div className="w-6 h-1 bg-yellow-500 rounded-full transform rotate-45"></div>
                          </div>
                          {/* Basil leaf */}
                          <div className="absolute top-1 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    )}
                    
                    {recipe.name === 'Burger' && (
                      <div className="absolute inset-4 flex justify-center items-center">
                        <div className="relative">
                          {/* Bun top */}
                          <div className="w-16 h-6 bg-orange-400 rounded-t-full mb-1"></div>
                          {/* Lettuce */}
                          <div className="w-16 h-2 bg-green-400 mb-1"></div>
                          {/* Tomato */}
                          <div className="w-16 h-2 bg-red-500 mb-1"></div>
                          {/* Cheese */}
                          <div className="w-16 h-2 bg-yellow-400 mb-1"></div>
                          {/* Patty */}
                          <div className="w-16 h-3 bg-orange-800 mb-1"></div>
                          {/* Bun bottom */}
                          <div className="w-16 h-4 bg-orange-400 rounded-b-full"></div>
                          {/* Sesame seeds */}
                          <div className="absolute top-1 left-3 w-1 h-1 bg-white rounded-full"></div>
                          <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full"></div>
                          <div className="absolute top-1 right-6 w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{recipe.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Flame className="w-4 h-4" />
                        <span>{recipe.calories}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Browse Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-2xl p-12 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <h3 className="text-3xl font-bold text-gray-800">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Start Planning Your Meals Today!</h2>
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-white text-lg">@foodie All Rights Reserved</p>
          </div>
          <div className="flex justify-center space-x-12 text-white">
            <a href="#" className="hover:text-orange-200 transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-orange-200 transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-orange-200 transition-colors font-medium">License</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoodieWebsite;