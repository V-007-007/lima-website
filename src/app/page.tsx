import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'
import ProgramCard from '@/components/ProgramCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import programsData from '@/data/programs-data.json'

export default function HomePage() {
  // Use first 3 programs from the data file for the homepage
  const programs = (programsData?.programs || [])
    .slice(0, 3)
    .map((p: any) => ({
      title: p.title,
      description: p.description,
      icon: p.icon || '📚',
      duration: p.duration || `${p.credits ?? ''} Credits`,
      link: `/programs/${p.id}`,
    }))

  const testimonials = [
    {
      name: 'Amb. Prof. Irene Udofa-Essien',
      role: 'Graduate 2023',
      content: 'LIMA transformed my approach to ministry leadership. The foundation-like teaching and practical wisdom equipped me to lead with greater confidence and purpose.',
      image: '/images/placeholder-1.jpg',
    },
    {
      name: 'Dr. Joseph Kui',
      role: 'Graduate 2022',
      content: 'The kingdom-purpose driven curriculum at LIMA gave me the tools to build leaders in my congregation. Truly life-changing.',
      image: '/images/placeholder-2.jpg',
    },
  ]

  return (
    <>
      <Hero />

      {/* Who We Are Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Leadership International Ministerial Academy (LIMA) is a faith-inspired institution dedicated to raising 
              kingdom-purpose driven leaders. We believe in equipping ministers and leaders with the wisdom, 
              knowledge, and practical skills needed to create lasting impact in their communities.
            </p>
            <p className="text-xl font-semibold text-primary-600">
              LIMA for you, LIMA for me, LIMA for all
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What We Offer Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to develop your leadership potential and deepen your ministry impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard isClickable={false} key={index} {...program} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-primary">
              Explore All Programs
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What Our Graduates Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from leaders who have been transformed through LIMA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Join a community of purpose-driven leaders committed to making a lasting impact in the kingdom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )

}


