import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear() 

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/blog', label: 'Blog' },
    { href: '/gallery', label: 'Gallery' },
  ]

  const resources = [
    { href: '/verify', label: 'Verify Certificate' },
    { href: '/register', label: 'Academy Registration' },
    { href: '/register/membership', label: 'Membership' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/images/logo-nobg.png"
                  alt="LIMA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white">LIMA</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leadership International Ministerial Academy - Empowering kingdom-purpose driven leaders through faith-inspired education.
            </p>
            <p className="text-primary-400 font-semibold text-sm">
              LIMA for you, LIMA for me, LIMA for all
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  No. 32 Itu Road, Uyo<br />
                  Uyo, Nigeria, West Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+2348060784292" className="text-sm hover:text-primary-400 transition-colors">
                  +234 806 078 4292 | +234 802 302 9201
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:ireneudofa2020@gmail.com" className="text-sm hover:text-primary-400 transition-colors">
                  leadersministryteam@gmail.com | ireneudofa2020@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} Leadership International Ministerial Academy. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/admin" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Admin
            </Link>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )

}


