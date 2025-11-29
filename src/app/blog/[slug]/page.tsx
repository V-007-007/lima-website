import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// TODO: In the future, fetch this from CMS based on slug
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Placeholder blog post content
  const post = {
    title: 'The Foundation of Kingdom Leadership: Building on Solid Ground',
    date: 'January 15, 2024',
    author: 'Dr. Emmanuel Etuk',
    image: '/images/placeholder-1.jpg',
    content: 
      <>
      <p>Leadership in the kingdom of God requires a foundation unlike any other. While the world teaches leadership principles based on power, position, and personal achievement, kingdom leadership begins with a completely different paradigm—one rooted in servanthood, sacrifice, and spiritual authority.</p>
      <h2>The Biblical Foundation</h2>
      <p>Jesus Christ modeled the ultimate example of kingdom leadership. In Philippians 2:5-8, we see how He, though being in the form of God, did not consider equality with God something to be grasped, but emptied Himself, taking the form of a servant. This is the foundation upon which all kingdom leadership must be built.</p>
      <p>When we study the great leaders in Scripture—Moses, David, Esther, Paul—we discover common threads: humility before God, courage in adversity, faithfulness in small things, and a heart for God's people. These leaders understood that their position was not about personal glory but about advancing God's purposes on earth.</p>

      <h2>Character Before Competence</h2>
      <p>In today's leadership culture, competence and skill often take precedence. However, kingdom leadership prioritizes character development. The Apostle Paul, in his letters to Timothy and Titus, outlines the qualifications for spiritual leadership, and notably, most of these qualifications relate to character rather than capability.</p>
      <p>A leader's integrity, self-control, faithfulness, and love for others matter more than their natural talents or acquired skills. This doesn't diminish the importance of developing our gifts and abilities, but it places them in proper perspective. Skills can be learned, but character must be formed through intentional discipleship and submission to the Holy Spirit's work in our lives.</p>

  <h2>The Principle of Multiplication</h2>
  <p>Kingdom leaders understand that true success is measured not by personal achievement but by multiplication—raising up other leaders who will, in turn, raise up others. Jesus invested three years in twelve disciples, and through them, the gospel spread to the ends of the earth.</p>

  <p>This principle challenges our natural tendency toward building our own kingdoms. Instead, we must ask: "Who am I investing in? Who am I raising up? How am I using my influence to empower others for kingdom impact?"</p>

  <h2>Leading from Overflow</h2>
  <p>Perhaps one of the most critical aspects of kingdom leadership is maintaining our own spiritual vitality. We cannot lead others where we have not gone ourselves. Our leadership must flow from a vibrant, intimate relationship with Christ.</p>

  <p>This means prioritizing time in God's presence, staying rooted in Scripture, maintaining accountability, and creating margin in our lives for spiritual renewal. When we lead from a place of overflow rather than depletion, we bring life to those we serve.</p>

  <h2>Practical Steps Forward</h2>
  <p>Building on this foundation requires intentionality. Here are some practical steps:</p>

  <ul>
    <li>Commit to daily time in prayer and Bible study</li>
    <li>Find a mentor who models kingdom leadership</li>
    <li>Identify someone you can mentor and invest in regularly</li>
    <li>Regularly evaluate your motives and heart attitudes</li>
    <li>Create rhythms of rest and renewal in your schedule</li>
    <li>Stay connected to a community that provides accountability</li>
  </ul>

  <h2>Conclusion</h2>
  <p>The foundation of kingdom leadership is not built in a day. It requires patience, perseverance, and a willingness to be shaped by the Master Builder. But as we commit to building on the solid ground of Christ and His principles, we position ourselves to lead with authority, integrity, and lasting impact.</p>

  <p>The world needs kingdom leaders now more than ever—leaders who will stand firm on biblical principles, serve with humility, and advance God's purposes with courage and conviction. The question is: Will you be one of them?</p>
      </>
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
        <Link href="/blog" className="inline-flex items-center text-white hover:text-primary-300 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
        <h1 className="heading-xl text-white mb-6 max-w-4xl">{post.title}</h1>
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
          style={{
            lineHeight: '1.8',
          }}
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
              <h3 className="font-bold text-gray-900 text-lg mb-2">{post.author}</h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Emmanuel Etuk is a leadership consultant, author, and founding director of LIMA Academy. 
                With over 20 years of experience in ministry leadership, he is passionate about equipping 
                the next generation of kingdom leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Found this helpful? Share it with your network</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="btn-secondary">Share on Twitter</a>
            <a href="#" className="btn-secondary">Share on Facebook</a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </article>

  {/* Related/More Articles */}
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