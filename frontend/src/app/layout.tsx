import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Ethical Eats",
  description: "Personalize your diet based on values",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Ethical Eats</h1>
            <nav className="space-x-6 text-gray-700">
              <Link href="/" className="hover:underline hover:text-gray-900">Home</Link>
              <Link href="/preferences" className="hover:underline hover:text-gray-900">Preferences</Link>
              <Link href="/browse" className="hover:underline hover:text-gray-900">Browse Foods</Link>
              <Link href="/meal-planner" className="hover:underline hover:text-gray-900">Meal Planner</Link>
              <Link href="/grocery-shopper" className="hover:underline hover:text-gray-900">Grocery Shopper</Link>
              <Link href="/data-sources" className="hover:underline hover:text-gray-900">Data & Sources</Link>
              <Link href="/about" className="hover:underline hover:text-gray-900">About</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-8">{children}</main>
        <footer className="bg-white shadow mt-12">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Ethical Eats • <Link href="https://github.com/jackdeterman/ethical-eats" className="hover:text-gray-900">GitHub</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}