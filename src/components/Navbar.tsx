'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/blog', label: 'Blog' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/20 backdrop-blur-md border-b border-white/30 ${
        isScrolled
          ? 'bg-white/95 shadow-lg border-gray-200'
          : 'bg-gradient-to-b from-primary-600/20 to-primary-500/10'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/images/logo-nobg.png"
                alt="LIMA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">LIMA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors link-hover ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-gray-800 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/register"
              className="btn-primary"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-gray-800 hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20 animate-slide-down">
          <div className="section-container py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
