'use client';

import { useState, useEffect } from 'react';

interface Food {
  id: number;
  name: string;
  carbon_score: number;
  water_score: number;
  labor_score: number;
  cost_score: number;
  diet_tags: string[];
  nutrition: {
    calories: number;
    protein: number;
    carb: number;
    fat: number;
  };
}

export default function DataSources() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/foods")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Food[]) => setFoods(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Food Impact Database</h1>
        <p className="text-gray-600 mb-8">
          Explore our open-source database of food impact scores. Each entry includes environmental,
          social, and nutritional information to help you make informed choices.
        </p>

        {loading ? (
          <p className="text-gray-600">Loading database...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="grid gap-6">
            {foods.map((food) => (
              <div key={food.id} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{food.name}</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Impact Scores</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carbon Impact</span>
                        <span className="text-gray-600">{food.carbon_score}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Water Usage</span>
                        <span className="text-gray-600">{food.water_score}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Labor Conditions</span>
                        <span className="text-gray-600">{food.labor_score}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost Impact</span>
                        <span className="text-gray-600">{food.cost_score}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Nutritional Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Calories</span>
                        <span className="text-gray-600">{food.nutrition.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Protein</span>
                        <span className="text-gray-600">{food.nutrition.protein}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carbohydrates</span>
                        <span className="text-gray-600">{food.nutrition.carb}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fat</span>
                        <span className="text-gray-600">{food.nutrition.fat}g</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Dietary Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {food.diet_tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Data</h2>
          <p className="text-gray-600 mb-4">
            Our database is open-source and community-driven. Each food item's impact scores are
            calculated based on peer-reviewed research and verified sources.
          </p>
          <p className="text-gray-600">
            Want to contribute to our database or suggest improvements? Visit our GitHub repository
            to learn more about our data collection methodology and submission process.
          </p>
        </div>
      </div>
    </main>
  );
}