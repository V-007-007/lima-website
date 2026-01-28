'use client'

import { useState } from 'react'
import { ArrowRight, Clock, ChevronDown, ChevronUp } from 'lucide-react'

interface Course {
  code: string
  name: string
  credits: number
}

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  duration: string
  courses?: Course[]
  isClickable?: boolean
}

export default function ProgramCard({ 
  title, 
  description, 
  icon, 
  duration, 
  courses = [],
  isClickable = false 
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    if (isClickable && courses.length > 0) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div className="card-elevated transition-smooth">
      {/* Main Card Content */}
      <div
        className={`p-8 ${isClickable && courses.length > 0 ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
      >
        {/* Icon */}
        <div className="text-5xl mb-6">{icon}</div>

        {/* Duration Badge */}
        <div className="inline-flex items-center space-x-2 badge mb-4">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 hover:text-primary transition-smooth">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-6">
          {description}
        </p>

        {/* Expand Indicator or Learn More */}
        {isClickable && courses.length > 0 ? (
          <div className="flex items-center justify-between text-primary font-semibold">
            <span>View Courses</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        ) : (
          <div className="flex items-center text-primary font-semibold group hover:gap-2 transition-all">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>

      {/* Expandable Courses Table */}
      {isClickable && courses.length > 0 && (
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-8 pb-8 border-t border-[#262626] pt-6">
            <h4 className="text-lg font-semibold text-white mb-4">Course List</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">Code</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">Course Name</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-white">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="border-b border-[#262626]/50 hover:bg-[#0a0a0a] transition-smooth">
                      <td className="py-3 px-4 text-sm text-primary font-mono">{course.code}</td>
                      <td className="py-3 px-4 text-sm text-muted">{course.name}</td>
                      <td className="py-3 px-4 text-sm text-right text-white">{course.credits}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-[#262626]">
                    <td colSpan={2} className="py-3 px-4 text-sm font-semibold text-white">Total Credits</td>
                    <td className="py-3 px-4 text-sm text-right font-bold text-primary">
                      {courses.reduce((sum, course) => sum + course.credits, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
