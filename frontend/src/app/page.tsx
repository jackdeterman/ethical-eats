"use client";

import Link from 'next/link';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl font-bold text-gray-900 mb-8 tracking-tight"
            >
              Make Every Meal Count
            </motion.h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Discover how your food choices impact the world. Get personalized recommendations that align with your values.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="/preferences"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                Get Started
              </motion.a>
              <Link
                href="/about"
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium border-2 border-green-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              How Ethical Eats Works
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A simple three-step process to make more ethical food choices
            </p>
          </div>

          <div className="flex flex-col gap-24 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 rounded-2xl p-8 shadow-sm" style={{ background: 'var(--moss)' }}>
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <img src="https://placehold.co/320x320?text=Step+1" alt="Set Preferences" className="w-64 h-64 rounded-xl object-cover" />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl font-extrabold text-[var(--moss-dark)] mb-4">1</span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Set Your Preferences</h3>
                <p className="text-gray-800 leading-relaxed">
                  Tell us what matters to you—environmental impact, animal welfare, labor conditions, and more.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 rounded-2xl p-8 shadow-sm" style={{ background: 'var(--coral)' }}>
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <img src="https://placehold.co/320x320?text=Step+2" alt="Get Recommendations" className="w-64 h-64 rounded-xl object-cover" />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl font-extrabold text-[var(--moss-dark)] mb-4">2</span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Get Recommendations</h3>
                <p className="text-gray-800 leading-relaxed">
                  Receive personalized meal and shopping suggestions that align with your values.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-2xl p-8 shadow-sm">
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="rounded-2xl p-4 shadow-md" style={{ background: 'var(--moss)' }}>
                  <img src="https://placehold.co/320x320?text=Step+3" alt="Make an Impact" className="w-64 h-64 rounded-xl object-cover" />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl font-extrabold text-[var(--moss-dark)] mb-4">3</span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Make an Impact</h3>
                <p className="text-gray-800 leading-relaxed">
                  Track your progress and see how your choices contribute to positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              The Power of Ethical Eating
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Small changes in your food choices can have a big impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Environmental Impact</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Food production accounts for 26% of global greenhouse gas emissions. Your choices matter.
              </p>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Social Impact</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Supporting fair trade and ethical labor practices helps create a more just food system.
              </p>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to Make a Difference?
            </h2>
            <p className="text-green-100 mb-12 text-xl leading-relaxed">
              Join thousands of others who are making more ethical food choices every day.
            </p>
            <Link
              href="/preferences"
              className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
