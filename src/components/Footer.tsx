import Link from 'next/link'
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
    { href: '/register/academy', label: 'Academy Registration' },
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
    <Footer className="bg-black border-t border-[#262626]">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                  src="/images/logo-nobg.png"
                  alt="LIMA Logo"
                  fill
                  className="object-contain"
                />

              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">LIMA</span>
                <span className="text-xs text-muted">Leadership Academy</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted mb-6">
              Leadership Impact Ministers Academy - Empowering kingdom-purpose driven leaders through faith-inspired education.
            </p>
            <p className="text-primary font-semibold text-sm">
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
                    className="text-sm text-muted hover:text-primary transition-smooth block"
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
                    className="text-sm text-muted hover:text-primary transition-smooth block"
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
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted">
                  No. 32 Itu Road <br />
                  Uyo Nigeria, West Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted hover:text-primary transition-smooth">
                  +231 773 384 331 | +234 802 302 9201
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@lima-academy.org" className="text-sm text-muted hover:text-primary transition-smooth">
                  leadersministryteam@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              {socialLinks.map((social) => (
                
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-[#262626] hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted hover:text-primary transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#262626] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted">
            © {currentYear} Leadership Impact Ministers Academy. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/admin" className="text-sm text-muted hover:text-primary transition-smooth">
              Admin
            </Link>
            <span className="text-[#262626]">|</span>
            <a href="#" className="text-sm text-muted hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <span className="text-[#262626]">|</span>
            <a href="#" className="text-sm text-muted hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

