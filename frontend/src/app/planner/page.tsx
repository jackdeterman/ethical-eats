'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Meal {
  id: number;
  name: string;
  description: string;
  ethicalScore: number;
  prepTime: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  prepDifficulty: 'quick' | 'moderate' | 'lengthy';
  tags: string[];
  cuisine: string;
  impactBreakdown: {
    environmental: number;
    animalWelfare: number;
    laborConditions: number;
  };
}

const sampleMeals: Meal[] = [
  {
    id: 1,
    name: "Mediterranean Lentil Salad",
    description: "A protein-rich salad with lentils, fresh vegetables, and olive oil",
    ethicalScore: 92,
    prepTime: "20 mins",
    mealType: "lunch",
    prepDifficulty: "quick",
    cuisine: "Mediterranean",
    tags: ["vegan", "quick", "high-protein"],
    impactBreakdown: {
      environmental: 95,
      animalWelfare: 100,
      laborConditions: 85
    }
  },
  {
    id: 2,
    name: "Sustainable Seafood Pasta",
    description: "Pasta with locally-sourced mussels and seasonal vegetables",
    ethicalScore: 88,
    prepTime: "30 mins",
    mealType: "dinner",
    prepDifficulty: "moderate",
    cuisine: "Italian",
    tags: ["seafood", "quick", "balanced"],
    impactBreakdown: {
      environmental: 90,
      animalWelfare: 75,
      laborConditions: 95
    }
  }
];

export default function Recommendations() {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [filters, setFilters] = useState({
    mealType: 'all',
    prepDifficulty: 'all',
    cuisine: 'all'
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Ethical Meal Recommendations</h1>
          <p className="text-gray-600 mb-8">
            Discover meals that align with your ethical preferences. Each recommendation is tailored to your values and includes detailed impact information.
          </p>

          {/* Filter Options */}
          <div className="space-y-4 mb-8">
            {/* Meal Type Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Meal Type</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.mealType === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('mealType', 'all')}
                >
                  All Meals
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.mealType === 'breakfast' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('mealType', 'breakfast')}
                >
                  Breakfast
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.mealType === 'lunch' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('mealType', 'lunch')}
                >
                  Lunch
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.mealType === 'dinner' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('mealType', 'dinner')}
                >
                  Dinner
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.mealType === 'snack' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('mealType', 'snack')}
                >
                  Snack
                </button>
              </div>
            </div>

            {/* Preparation Time Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Preparation Time</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.prepDifficulty === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('prepDifficulty', 'all')}
                >
                  Any Time
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.prepDifficulty === 'quick' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('prepDifficulty', 'quick')}
                >
                  Quick (under 30 mins)
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.prepDifficulty === 'moderate' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('prepDifficulty', 'moderate')}
                >
                  Moderate (30-60 mins)
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.prepDifficulty === 'lengthy' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('prepDifficulty', 'lengthy')}
                >
                  Lengthy (60+ mins)
                </button>
              </div>
            </div>

            {/* Cuisine Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Cuisine</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.cuisine === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('cuisine', 'all')}
                >
                  All Cuisines
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.cuisine === 'Mediterranean' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('cuisine', 'Mediterranean')}
                >
                  Mediterranean
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filters.cuisine === 'Italian' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleFilterChange('cuisine', 'Italian')}
                >
                  Italian
                </button>
              </div>
            </div>
          </div>

          {/* Recommendations Grid */}
          <div className="grid gap-6">
            {sampleMeals.map((meal) => (
              <div 
                key={meal.id} 
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedMeal(meal)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{meal.name}</h2>
                    <p className="text-gray-600 mt-1">{meal.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm text-gray-500">{meal.mealType}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{meal.prepTime}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{meal.cuisine}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{meal.ethicalScore}%</div>
                    <div className="text-sm text-gray-500">Ethical Score</div>
                  </div>
                </div>

                {/* Impact Breakdown */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-medium text-green-600">{meal.impactBreakdown.environmental}%</div>
                    <div className="text-sm text-gray-500">Environmental</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-green-600">{meal.impactBreakdown.animalWelfare}%</div>
                    <div className="text-sm text-gray-500">Animal Welfare</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-green-600">{meal.impactBreakdown.laborConditions}%</div>
                    <div className="text-sm text-gray-500">Labor Conditions</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {meal.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Want to see recommendations that better match your values?
            </p>
            <Link 
              href="/preferences" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Adjust Your Preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}