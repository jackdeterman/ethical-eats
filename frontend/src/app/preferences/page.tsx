'use client';

import { useState } from 'react';

interface Preference {
  name: string;
  value: number;
  description: string;
}

const MAX_POINTS = 100;

export default function Preferences() {
  const [preferences, setPreferences] = useState<Preference[]>([
    {
      name: "Environmental Impact",
      value: 0,
      description: "Consideration of carbon footprint, water usage, and land use in food production"
    },
    {
      name: "Animal Welfare",
      value: 0,
      description: "Treatment and living conditions of animals in food production"
    },
    {
      name: "Labor Conditions",
      value: 0,
      description: "Working conditions and fair wages for food production workers"
    },
    {
      name: "Religious Considerations",
      value: 0,
      description: "Adherence to religious dietary laws and practices"
    }
  ]);

  const [showMethodology, setShowMethodology] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const calculatePointsUsed = () => {
    return preferences.reduce((total, pref) => total + (pref.value * pref.value), 0);
  };

  const pointsRemaining = MAX_POINTS - calculatePointsUsed();

  const handleValueChange = (index: number, newValue: number) => {
    const newPreferences = [...preferences];
    const oldValue = newPreferences[index].value;
    const pointsChange = (newValue * newValue) - (oldValue * oldValue);
    
    if (pointsRemaining + (oldValue * oldValue) - (newValue * newValue) >= 0) {
      newPreferences[index].value = newValue;
      setPreferences(newPreferences);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    // TODO: Implement save functionality
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSaving(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Your Ethical Preferences</h1>
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              {showMethodology ? 'Hide Methodology' : 'About This System'}
            </button>
          </div>

          {showMethodology && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transform transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Understanding Quadratic Voting</h2>
              <p className="text-gray-600 mb-4">
                This system uses quadratic voting to help you express the relative importance of different ethical considerations in your food choices.
              </p>
              <p className="text-gray-600 mb-4">
                You have {MAX_POINTS} total points to allocate across all categories. The points you allocate to each category are squared to determine their cost. For example:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>A value of 1 costs 1 point (1² = 1)</li>
                <li>A value of 2 costs 4 points (2² = 4)</li>
                <li>A value of 3 costs 9 points (3² = 9)</li>
                <li>A value of 4 costs 16 points (4² = 16)</li>
              </ul>
              <p className="text-gray-600">
                This system encourages you to make meaningful trade-offs and truly consider the relative importance of each ethical dimension in your food choices.
              </p>
            </div>
          )}

          <div className="flex gap-8">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Points Remaining</h2>
                  <div className="text-3xl font-bold text-green-600">{pointsRemaining}</div>
                </div>
                {pointsRemaining < MAX_POINTS && (
                  <button
                    onClick={() => setPreferences(preferences.map(p => ({ ...p, value: 0 })))}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Reset All
                  </button>
                )}
              </div>

              <div className="space-y-8">
                {preferences.map((preference, index) => (
                  <div key={preference.name} className="border-b pb-6 last:border-b-0">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{preference.name}</h3>
                        <p className="text-sm text-gray-600">{preference.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{preference.value}</div>
                        <div className="text-sm text-gray-500">Points: {preference.value * preference.value}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={preference.value}
                        onChange={(e) => handleValueChange(index, parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleValueChange(index, Math.max(0, preference.value - 1))}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={preference.value === 0}
                        >
                          -
                        </button>
                        <button
                          onClick={() => handleValueChange(index, Math.min(10, preference.value + 1))}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={pointsRemaining < ((preference.value + 1) * (preference.value + 1)) - (preference.value * preference.value)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    'Save Preferences'
                  )}
                </button>
              </div>
            </div>

            <div className="w-80 bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Point Distribution</h2>
              <div className="space-y-4">
                {preferences.map((preference) => (
                  <div key={preference.name} className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{preference.name}</span>
                      <span>{preference.value * preference.value} points</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full transition-all duration-300"
                        style={{ width: `${(preference.value * preference.value / MAX_POINTS) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Value: {preference.value}</span>
                      <span>Cost: {preference.value * preference.value}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-600">Total Points Used:</span>
                    <span className="text-green-600">{calculatePointsUsed()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-600">Points Remaining:</span>
                    <span className="text-green-600">{pointsRemaining}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}