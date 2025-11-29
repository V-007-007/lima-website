'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import ProgramCard from '@/components/ProgramCard'
import { BookOpen, Users, Target, Award, Clock, Globe, ChevronDown } from 'lucide-react'
import programsData from '@/data/programs-data.json'

export default function ProgramsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null)

  const programs = programsData.programs.slice(0, 9).map(program => ({
    id: program.id,
    title: program.title,
    description: program.description,
    icon: program.icon,
    duration: `${program.credits} credits`,
    link: `#${program.id}`,
    courses: program.courses,
  }))

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'In-depth study materials covering leadership, theology, and practical ministry skills',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from experienced ministry leaders and seasoned practitioners',
    },
    {
      icon: Target,
      title: 'Practical Application',
      description: 'Real-world projects and assignments that prepare you for ministry challenges',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Receive recognized certification upon successful completion of programs',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with online and in-person learning options',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with fellow leaders from over 50 countries worldwide',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 font-serif">Our Programs</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Transformational leadership programs designed to equip you for kingdom impact. 
              Choose the path that aligns with your calling and season.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Programs Grid */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id}>
                <ProgramCard
                  {...program}
                  isClickable={true}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setExpandedProgram(expandedProgram === program.id ? null : program.id)
                  }}
                />
                
                {/* Expanded Courses Table */}
                {expandedProgram === program.id && (
                  <div className="mt-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 animate-in fade-in duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span>Courses</span>
                      <ChevronDown className="w-5 h-5 text-primary-600" />
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-primary-300">
                            <th className="text-left py-2 px-3 font-semibold text-gray-800">Code</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-800">Course Name</th>
                            <th className="text-center py-2 px-3 font-semibold text-gray-800">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {program.courses && program.courses.length > 0 ? (
                            program.courses.map((course, idx) => (
                              <tr
                                key={idx}
                                className={`border-b border-primary-200 hover:bg-primary-200/50 transition-colors ${
                                  idx % 2 === 0 ? 'bg-white/50' : 'bg-primary-100/30'
                                }`}
                              >
                                <td className="py-2 px-3 font-mono text-primary-700 font-semibold">{course.code}</td>
                                <td className="py-2 px-3 text-gray-700">{course.name}</td>
                                <td className="py-2 px-3 text-center text-gray-700 font-semibold">{course.credits}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={3} className="py-4 px-3 text-center text-gray-500">
                                No courses available
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Program Features */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What Makes LIMA Programs Unique</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our programs are designed with your success in mind, offering comprehensive support 
              and practical tools for real-world ministry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Take the next step in your leadership development. Register for a program today 
              and join a community of kingdom leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Register Now
              </a>
              <a href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}