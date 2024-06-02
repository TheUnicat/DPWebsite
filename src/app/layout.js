// src/app/layout.js
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-primary-light font-sans text-gray-900">
      <Navbar />
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-primary p-4 text-white text-center">
        <p>&copy; 2024 My Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}
