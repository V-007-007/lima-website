import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  duration: string
  link: string
}

export default function ProgramCard({ title, description, icon, duration, link }: ProgramCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="card-elevated p-8 h-full transition-smooth hover:scale-[1.02]">
        {/* Icon */}
        <div className="text-5xl mb-6">{icon}</div>

        {/* Duration Badge */}
        <div className="inline-flex items-center space-x-2 badge mb-4">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-smooth">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-6">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
