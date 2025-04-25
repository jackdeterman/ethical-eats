'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-900">Ethical Eats</h1>
          </Link>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
          <Link href="/" className="block">
            <h1 className="text-2xl font-bold text-gray-900">Ethical Eats</h1>
          </Link>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            <li>
              <Link 
                href="/" 
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'border-b-2 border-green-500'
                    : 'border-transparent'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/profile" 
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                  pathname === '/profile'
                    ? 'border-b-2 border-green-500'
                    : 'border-transparent'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/preferences" 
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                  pathname === '/preferences'
                    ? 'border-b-2 border-green-500'
                    : 'border-transparent'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Your Preferences</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/planner" 
                className={`flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                  pathname === '/planner'
                    ? 'border-b-2 border-green-500'
                    : 'border-transparent'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Your Recommendations</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/shopper" 
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Shopping Assistant</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/data-sources" 
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>Database & References</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Menu Toggle Button (outside sidebar) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`fixed top-4 left-4 z-40 p-2 rounded-lg hover:bg-gray-100 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-1">
        <div className="pt-16"> {/* Add padding to account for fixed header */}
          <main className="p-8">{children}</main>
          <footer className="bg-white shadow mt-12">
            <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-700">
              &copy; {new Date().getFullYear()} Ethical Eats • <Link href="https://github.com/jackdeterman/ethical-eats" className="hover:text-gray-900">GitHub</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
} 