import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Ethical Eats",
  description: "Personalize your diet based on values",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}