'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10 py-32">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-medium text-white">Leadership International Ministerial Academy</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl text-white mb-6 font-serif">
            Empowering Kingdom Leaders
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-light">
            LIMA for you, LIMA for me, LIMA for all
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join a faith-inspired community dedicated to raising purpose-driven leaders 
            who create lasting impact in their ministries and communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register"
              className="group px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-all hover:shadow-xl flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/programs"
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-all"
            >
              Explore Programs
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-200 text-sm">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-200 text-sm">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-primary-200 text-sm">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}