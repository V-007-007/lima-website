import Image from 'next/image'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="card-elevated p-8 relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary-200">
        <Quote className="w-12 h-12" />
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  )
}