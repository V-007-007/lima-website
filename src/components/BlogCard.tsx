import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, User } from 'lucide-react'

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
    <Link href={`/blog/${slug}`} className="group block">
      <div className="card-elevated overflow-hidden h-full flex flex-col transition-smooth hover:scale-[1.02]">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Date */}
          <div className="flex items-center text-sm text-muted mb-3 space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            {author && (
              <>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{author}</span>
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-smooth">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted leading-relaxed mb-4 flex-1">
            {excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            <span>Read More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
