import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-dark p-4 text-white relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none ${isOpen ? 'hidden' : ''}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:items-center md:space-x-4">
          <li>
            <Link href="/" className="hover:text-primary-grey transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary-grey transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary-grey transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-primary-grey transition duration-300">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/volunteer" className="hover:text-primary-grey transition duration-300">
              Volunteer
            </Link>
          </li>
          <li>
            <Link href="/low_entropy" className="hover:text-primary-grey transition duration-300">
              Low Entropy
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-black text-white z-50 p-4">
          <button onClick={toggleMenu} className="text-2xl">
            &times;
          </button>
          <ul className="mt-8 space-y-4">
            <li>
              <Link href="/" className="block hover:text-primary-grey transition duration-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-primary-grey transition duration-300" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-primary-grey transition duration-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/resources" className="block hover:text-primary-grey transition duration-300" onClick={toggleMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="block hover:text-primary-grey transition duration-300" onClick={toggleMenu}>
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/low_entropy" className="block hover:text-primary-grey transition duration-300" onClick={toggleMenu}>
                Low Entropy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
