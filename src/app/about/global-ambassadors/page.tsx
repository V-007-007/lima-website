'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowLeft } from 'lucide-react'
import ambassadorsData from '@/data/global-ambassadors.json'

export default function GlobalAmbassadorsPage() {
  const ambassadors = ambassadorsData.ambassadors

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <Link href="/about" className="inline-flex items-center space-x-2 mb-6 hover:text-primary-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to About</span>
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 font-serif">Global Ambassadors</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our network of Global Ambassadors represents LIMA across continents, 
              bringing kingdom leadership to communities worldwide.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Ambassadors Grid */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ambassadors.map((ambassador) => (
              <div key={ambassador.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 card-elevated">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={ambassador.image}
                      alt={ambassador.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {ambassador.name}
                    </h3>
                    <p className="text-primary-600 font-semibold text-sm mb-3">
                      {ambassador.post}
                    </p>
                    <div className="h-1 w-12 bg-gradient-to-r from-logo-bronze to-primary-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Join Our Global Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with our ambassadors and become part of a worldwide movement for kingdom leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/register" className="btn-secondary">
                Join LIMA
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
