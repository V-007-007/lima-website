import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
  author?: string
}

export default function BlogCard({ title, excerpt, date, slug, image, author }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className="card-elevated overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Date */}
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
            {author && (
              <>
                <span className="mx-2">•</span>
                <span>{author}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-4 flex-1">{excerpt}</p>

          {/* Read More */}
          <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
            <span>Read More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}