import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-dark p-4 text-white">
      <ul className="flex justify-center space-x-4">
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
    </nav>
  );
}
