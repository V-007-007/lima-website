import AnimatedSection from '@/components/AnimatedSection'
import BlogCard from '@/components/BlogCard'

export default function BlogPage() {
  // Single placeholder blog post as requested
  const blogPost = {
    title: 'The Foundation of Kingdom Leadership: Building on Solid Ground',
    excerpt: 'Discover the essential principles that form the bedrock of effective kingdom leadership. Learn how biblical foundations shape transformational leaders who create lasting impact in their communities.',
    date: 'January 15, 2024',
    slug: 'foundation-of-kingdom-leadership',
    image: '/images/placeholder-1.jpg',
    author: 'Dr. Samuel Williams',
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 font-serif">LIMA Blog</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Insights, teachings, and inspiration for kingdom-purpose driven leaders
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Posts */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <BlogCard {...blogPost} />
          </div>

          {/* Coming Soon Message */}
          <div className="max-w-2xl mx-auto text-center mt-16 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Content Coming Soon</h3>
            <p className="text-gray-600 leading-relaxed">
              We're preparing more inspiring content for you. Subscribe to our newsletter to be 
              notified when new blog posts are published.
            </p>
            <div className="mt-6">
              <a href="/contact" className="btn-primary inline-block">
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Categories Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Upcoming Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay tuned for articles on these leadership themes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Leadership Development', 'Ministry Growth', 'Spiritual Formation', 'Community Impact'].map((category) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-600">Articles coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}