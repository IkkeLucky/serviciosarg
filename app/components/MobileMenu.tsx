'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavLink from './NavLink'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="sm:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex flex-col">
              <NavLink href="/" onClick={toggleMenu}>Jobs</NavLink>
              <NavLink href="/providers" onClick={toggleMenu}>Providers</NavLink>
              <NavLink href="/search" onClick={toggleMenu}>Search</NavLink>
              <NavLink href="/reviews" onClick={toggleMenu}>Reviews</NavLink>
              <NavLink href="/profile" onClick={toggleMenu}>Profile</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

