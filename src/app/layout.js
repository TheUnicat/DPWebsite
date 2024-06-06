import Link from 'next/link';
import Navbar from '../components/Navbar';
import { Analytics } from "@vercel/analytics/react"


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-primary-light font-sans text-gray-900">
      <header className="bg-primary p-4 text-white flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Link href="/" className="hover:scale-105 transition duration-300">
            <h1 className="text-2xl md:text-4xl font-bold whitespace-nowrap">The Dignity Project</h1>
          </Link>
          <p className="mt-2">at JH</p>
        </div>
        <Navbar />
      </header>
      <main className="flex-grow p-4 mx-auto w-full max-w-3xl">
        {children}
      </main>
      <footer className="bg-primary p-4 text-white">
        <p>&copy; 2024 The Dignity Project. All rights reserved. Website by Matthew</p>
      </footer>
    </div>
  );
}

