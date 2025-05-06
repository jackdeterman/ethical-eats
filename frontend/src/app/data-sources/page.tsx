'use client';

import { useState, useEffect } from 'react';

interface Food {
  id: number;
  name: string;
  carbon_footprint: number;
  sources: string[];
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
          Explore our open-source database of food carbon footprints. Each entry includes environmental
          impact information to help you make informed choices.
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
                
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Environmental Impact</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carbon Footprint</span>
                        <span className="text-gray-600">{food.carbon_footprint} kg CO₂e</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Sources</h3>
                    <div className="space-y-2">
                      {(food.sources || []).map((source, index) => (
                        <div key={index} className="text-gray-600">
                          {source}
                        </div>
                      ))}
                      {(!food.sources || food.sources.length === 0) && (
                        <div className="text-gray-500 italic">No sources available</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Data</h2>
          <p className="text-gray-600 mb-4">
            Our database is open-source and community-driven. Each food item's carbon footprint is
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