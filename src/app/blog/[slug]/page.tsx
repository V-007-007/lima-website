import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// --- FIX APPLIED HERE ---
// Correct typing for Next.js App Router params
interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params

  // Placeholder blog post content (you’ll replace later with dynamic data)
  const post = {
    title: 'The Foundation of Kingdom Leadership: Building on Solid Ground',
    date: 'January 15, 2024',
    author: 'Dr. Emmanuel Etuk',
    image: '/images/placeholder-1.jpg',
    content: (
      <>
        <p>Leadership in the kingdom of God requires a foundation unlike any other. While the world teaches leadership principles based on power, position, and personal achievement, kingdom leadership begins with a completely different paradigm—one rooted in servanthood, sacrifice, and spiritual authority.</p>

        <h2>The Biblical Foundation</h2>
        <p>Jesus Christ modeled the ultimate example of kingdom leadership....</p>

        <h2>Character Before Competence</h2>
        <p>In today's leadership culture...</p>

        <h2>The Principle of Multiplication</h2>
        <p>Kingdom leaders understand...</p>

        <h2>Leading from Overflow</h2>
        <p>Perhaps one of the most critical aspects...</p>

        <h2>Practical Steps Forward</h2>
        <ul>
          <li>Commit to daily time in prayer and Bible study</li>
          <li>Find a mentor...</li>
          <li>Identify someone you can mentor...</li>
          <li>Regularly evaluate your motives...</li>
          <li>Create rhythms of rest...</li>
          <li>Stay connected to community...</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The foundation of kingdom leadership is not built in a day...</p>
      </>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <article>

        {/* Hero Image */}
        <div className="relative h-[500px] w-full bg-gray-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 section-container pb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-white hover:text-primary-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            <h1 className="heading-xl text-white mb-6 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatedSection className="section-padding">
          <div className="section-container max-w-4xl">
            <div
              className="prose prose-lg max-w-none"
              style={{ lineHeight: '1.8' }}
            >
              {post.content}
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Emmanuel Etuk is a leadership consultant...
                  </p>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Found this helpful? Share it with your network
              </p>

              <div className="flex justify-center space-x-4">
                <a href="#" className="btn-secondary">Share on Twitter</a>
                <a href="#" className="btn-secondary">Share on Facebook</a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </article>

      {/* More Articles */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">More Articles Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay tuned for more inspiring content on kingdom leadership and ministry impact
            </p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
