'use client';

import { useState } from 'react';

interface GroceryItem {
  id: number;
  name: string;
  quantity: string;
  category: string;
  ethicalScore: number;
  alternatives?: string[];
}

const sampleGroceryList: GroceryItem[] = [
  {
    id: 1,
    name: "Organic Lentils",
    quantity: "1 lb",
    category: "Pantry",
    ethicalScore: 95,
    alternatives: ["Regular Lentils", "Chickpeas"]
  },
  {
    id: 2,
    name: "Local Seasonal Vegetables",
    quantity: "2 lbs",
    category: "Produce",
    ethicalScore: 90
  },
  {
    id: 3,
    name: "Sustainable Seafood",
    quantity: "1 lb",
    category: "Meat & Seafood",
    ethicalScore: 85,
    alternatives: ["Plant-based Protein", "Local Fish"]
  }
];

export default function Shopper() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(sampleGroceryList.map(item => item.category)));

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Grocery Shopper</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Grocery List */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Grocery List</h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === null
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All Items
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grocery Items */}
            <div className="space-y-4">
              {sampleGroceryList
                .filter(item => selectedCategory === null || item.category === selectedCategory)
                .map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.quantity}</p>
                      </div>
                      <span className="text-sm text-green-600">
                        Ethical Score: {item.ethicalScore}%
                      </span>
                    </div>
                    
                    {item.alternatives && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-600 mb-2">Alternative Options:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.alternatives.map((alt) => (
                            <button
                              key={alt}
                              className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200"
                            >
                              {alt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Shopping Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Shopping Tips</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Seasonal Shopping</h3>
                <p className="text-sm text-green-700">
                  Choose seasonal produce to reduce environmental impact and support local farmers.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Bulk Buying</h3>
                <p className="text-sm text-green-700">
                  Consider buying in bulk to reduce packaging waste and save money.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Local Markets</h3>
                <p className="text-sm text-green-700">
                  Visit local farmers' markets for fresh, seasonal produce with lower transportation impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}