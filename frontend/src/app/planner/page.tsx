'use client';

import { useState } from 'react';

interface Meal {
  id: number;
  name: string;
  description: string;
  ethicalScore: number;
  prepTime: string;
  tags: string[];
}

const sampleMeals: Meal[] = [
  {
    id: 1,
    name: "Mediterranean Lentil Salad",
    description: "A protein-rich salad with lentils, fresh vegetables, and olive oil",
    ethicalScore: 92,
    prepTime: "20 mins",
    tags: ["vegan", "quick", "high-protein"]
  },
  {
    id: 2,
    name: "Sustainable Seafood Pasta",
    description: "Pasta with locally-sourced mussels and seasonal vegetables",
    ethicalScore: 88,
    prepTime: "30 mins",
    tags: ["seafood", "quick", "balanced"]
  }
];

export default function Planner() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Meal Planner</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Calendar */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Weekly Schedule</h2>
            <div className="grid grid-cols-7 gap-2">
              {days.map((day) => (
                <div
                  key={day}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedDay === day
                      ? 'bg-green-100 border-2 border-green-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  <h3 className="font-medium text-gray-800">{day}</h3>
                  <div className="mt-2 space-y-2">
                    {meals.map((meal) => (
                      <div
                        key={meal}
                        className="text-sm text-gray-600 bg-white p-2 rounded"
                      >
                        {meal}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Suggestions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Suggested Recipes</h2>
            <div className="space-y-4">
              {sampleMeals.map((meal) => (
                <div key={meal.id} className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-800">{meal.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{meal.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-green-600">
                      Ethical Score: {meal.ethicalScore}%
                    </span>
                    <span className="text-sm text-gray-500">{meal.prepTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {meal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Add to Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Day Details */}
        {selectedDay && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {selectedDay}'s Meals
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {meals.map((meal) => (
                <div key={meal} className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-800">{meal}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    No meal planned yet. Click "Add to Plan" on a recipe to add it here.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}