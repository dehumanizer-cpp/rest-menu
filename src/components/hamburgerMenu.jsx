// components/HamburgerMenu.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center font-roboto w-screen">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`mt-2 bg-white rounded-lg shadow-lg p-4 w-full ${isOpen ? '': setIsOpen(true)} md:block`}>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-5">
            <Link href="/" className="menu-item py-2">Home</Link>
            <Link href="/appetizers" className="menu-item py-2">Appetizers</Link>
            <Link href="/prix-fixe" className="menu-item py-2">Prix Fixe</Link>
            <Link href="/steak-cuts" className="menu-item py-2">Steak Cuts</Link>
            <Link href="/salads-and-soups" className="menu-item py-2">Salads and Soups</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
