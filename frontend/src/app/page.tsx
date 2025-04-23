"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Ethical Eats
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Make informed food choices that align with your values. 
            Personalize your diet based on what matters most to you.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/preferences" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Set Your Preferences
            </Link>
            <Link 
              href="/planner" 
              className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Plan Your Meals
            </Link>
          </div>
        </div>
      </section>

      {/* User Profile Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Ethical Profile</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Environmental Impact</span>
              <span className="text-green-600 font-medium">High Priority</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Animal Welfare</span>
              <span className="text-green-600 font-medium">Medium Priority</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Labor Conditions</span>
              <span className="text-green-600 font-medium">High Priority</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Religious Considerations</span>
              <span className="text-gray-400">Not Set</span>
            </div>
          </div>
          <div className="mt-8">
            <Link 
              href="/preferences" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Adjust Your Preferences →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Recommendations</h3>
            <p className="text-gray-600">
              Get meal suggestions tailored to your ethical priorities and dietary needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Grocery Shopping</h3>
            <p className="text-gray-600">
              Let us help you shop for ingredients that match your values.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Transparent Data</h3>
            <p className="text-gray-600">
              Access our open-source database of food impact scores and sources.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
