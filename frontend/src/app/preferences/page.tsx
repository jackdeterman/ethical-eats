'use client';

import { useState } from 'react';

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    environmentalImpact: 50,
    animalWelfare: 50,
    laborConditions: 50,
    religiousConsiderations: 50,
  });

  const handleSliderChange = (key: string, value: number) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Ethical Preferences</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            Adjust the sliders below to indicate how important each factor is in your food choices.
            These preferences will be used to personalize your meal recommendations and shopping lists.
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Environmental Impact</label>
                <span className="text-gray-500">{preferences.environmentalImpact}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={preferences.environmentalImpact}
                onChange={(e) => handleSliderChange('environmentalImpact', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Animal Welfare</label>
                <span className="text-gray-500">{preferences.animalWelfare}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={preferences.animalWelfare}
                onChange={(e) => handleSliderChange('animalWelfare', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Labor Conditions</label>
                <span className="text-gray-500">{preferences.laborConditions}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={preferences.laborConditions}
                onChange={(e) => handleSliderChange('laborConditions', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Religious Considerations</label>
                <span className="text-gray-500">{preferences.religiousConsiderations}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={preferences.religiousConsiderations}
                onChange={(e) => handleSliderChange('religiousConsiderations', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => console.log('Saving preferences:', preferences)}
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}