"use client";

import { useState, useEffect } from "react";

interface Nutrition {
  calories: number;
  protein: number;
  carb: number;
  fat: number;
}

interface Food {
  id: number;
  name: string;
  carbon_score: number;
  water_score: number;
  labor_score: number;
  cost_score: number;
  diet_tags: string[];
  nutrition: Nutrition;
}

export default function Page() {
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

  if (loading) return <p className="p-8 text-gray-900">Loading foods…</p>;
  if (error) return <p className="p-8 text-red-500">Error: {error}</p>;

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Ethical Eats: Food List</h1>
      <ul className="space-y-4">
        {foods.map((food) => (
          <li
            key={food.id}
            className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{food.name}</h2>
            <div className="mt-2 text-sm text-gray-700">
              <p>Carbon: {food.carbon_score}</p>
              <p>Water: {food.water_score}</p>
              <p>Labor: {food.labor_score}</p>
              <p>Cost: {food.cost_score}</p>
              <p>Tags: {food.diet_tags.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
