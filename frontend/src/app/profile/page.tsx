'use client';

import Link from 'next/link';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
            <p className="text-gray-600 mt-2">
              Manage your profile, track your impact, and access your saved preferences and recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User Overview Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">JD</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">John Doe</h3>
                    <p className="text-gray-600">Member since January 2024</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Ethical Impact Score</p>
                    <p className="text-2xl font-bold text-green-600">87/100</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Meals Planned</p>
                    <p className="text-2xl font-bold text-green-600">24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences Summary Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Ethical Preferences</h2>
              <div className="space-y-4">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: '75%' }} />
                </div>
                <p className="text-sm text-gray-600">
                  Your preferences are set to prioritize environmental impact and animal welfare.
                </p>
                <Link
                  href="/preferences"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Edit Preferences
                </Link>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium text-gray-800">Added to Shopping List</p>
                    <p className="text-sm text-gray-600">Organic quinoa, fair trade coffee</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium text-gray-800">Saved Recipe</p>
                    <p className="text-sm text-gray-600">Vegetarian chili with local ingredients</p>
                  </div>
                  <span className="text-sm text-gray-500">Yesterday</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-800">Updated Preferences</p>
                    <p className="text-sm text-gray-600">Increased focus on labor conditions</p>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 