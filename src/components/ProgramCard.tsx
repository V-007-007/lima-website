import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  duration: string
  link: string
  onClick?: (e: React.MouseEvent) => void
  isClickable?: boolean
}

export default function ProgramCard({ title, description, icon, duration, link, onClick, isClickable }: ProgramCardProps) {
  // If onClick is provided, render as a div instead of a Link
  if (isClickable && onClick) {
    return (
      <div onClick={onClick} className="group cursor-pointer">
        <div className="card-elevated p-8 h-full hover:scale-105 transition-transform duration-300">
          {/* Icon */}
          <div className="text-5xl mb-6">{icon}</div>

          {/* Duration Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {description}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    )
  }

  // Default: render as a Link
  return (
    <Link href={link} className="group">
      <div className="card-elevated p-8 h-full hover:scale-105 transition-transform duration-300">
        {/* Icon */}
        <div className="text-5xl mb-6">{icon}</div>

        {/* Duration Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
