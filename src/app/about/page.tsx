import AnimatedSection from '@/components/AnimatedSection'
import { Target, Eye, Heart, Users, Award } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Faith-Centered',
      description: 'Every aspect of our teaching is rooted in biblical principles and kingdom values.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of community and collaborative learning for growth.',
    },
    {
      icon: Target,
      title: 'Purpose Focused',
      description: 'Equipping leaders to discover and fulfill their God-given purpose and calling.',
    },
    {
      icon: Eye,
      title: 'Excellence',
      description: 'We pursue excellence in all we do, reflecting the character of our Creator.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 font-serif">About LIMA</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              At LIMA, we believe in fulfilling the Great Commission in accordance with Matthew 24:14:
“And this gospel of the kingdom shall be preached in all the world for a witness unto all nations…”
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                What We Do
              </div>
              <h2 className="heading-lg mb-6">Empowering Leaders</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Leadership International Ministerial Academy (LIMA) is a globally trusted and fully accredited Christian ministerial training institution dedicated to equipping, empowering, and raising Spirit-anointed leaders for global Kingdom impact. Our flexible online and on-campus programs are designed for pastors, ministry leaders, church workers, and believers who desire to grow in biblical knowledge, leadership excellence, and spiritual maturity—right from the comfort of their homes or in our Nigeria campus.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We believe that effective leadership begins with a strong foundation in faith, 
                character, and biblical principles. Our programs are designed to develop not just 
                skilled leaders, but transformational leaders who lead with integrity, compassion, 
                and purpose.
              </p>
              <p className="text-xl font-semibold text-primary-600 mt-6">
                LIMA for you, LIMA for me, LIMA for all
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                LIMA
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                VISION
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Vision and Mandate
              </div>
              <h2 className="heading-lg mb-6">A Global Movement</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our mission is to train, empower, equip, and release men and women who will labor in God’s end-time harvest and advance His Kingdom across the nations.
Guided by scriptures such as Matthew 9:37–38, 2 Timothy 2:2, and Mark 16:15, we are committed to:
<li>Training and teaching believers with sound biblical doctrine</li>

<li>Equipping and empowering students for effective ministry</li>

<li>Raising leaders who influence their communities and the nations</li>

<li>Networking Kingdom laborers for global spiritual advancement</li>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our vision is to create a global network of impact-driven ministers who carry the 
                message of hope, lead with excellence, and create sustainable change in their spheres 
                of influence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through LIMA, we aim to establish a new standard of leadership education that combines 
                spiritual depth with practical wisdom, producing leaders who are both deeply rooted in 
                faith and highly effective in their calling.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

       {/* Why Choose Us */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Why Choose LIMA
              </div>
              <h2 className="heading-lg mb-6">LIMA</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                LIMA stands as one of the world’s leading international ministerial academies, known for its strong academic standards, faithfulness to Scripture, and commitment to God’s mission. We offer:

Accredited Diploma, Bachelor, and Master’s degree programs

Flexible online and distance-learning options for global students

A physical campus in Nigeria offering day and night classes

Spirit-anointed, Bible-based courses in print, disk, and digital formats

A seasoned faculty of experienced ministers and ministry leaders

Relevant 21st-century ministry training tailored to today’s Church

All LIMA degree programs are earned degrees, requiring comprehensive coursework, personal study, and self-discipline. Every course is designed to build spiritual depth, practical ministry skills, and leadership capacity.
              </p>
             
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                LIMA
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

{ /* Commitment Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                COMMITMENT
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Commitment
              </div>
              <h2 className="heading-lg mb-6">We Commit</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
               The mission of LIMA is simple yet profound:
To raise Spirit-anointed Christian leaders who disciple nations and fulfill God’s end-time agenda.

We prepare our students for real Christian service—empowering them with biblical understanding, ministry competence, and spiritual authority.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our vision is to create a global network of impact-driven ministers who carry the 
                message of hope, lead with excellence, and create sustainable change in their spheres 
                of influence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through LIMA, we aim to establish a new standard of leadership education that combines 
                spiritual depth with practical wisdom, producing leaders who are both deeply rooted in 
                faith and highly effective in their calling.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These foundational principles guide everything we do at LIMA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Story Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">How Our Programs Work</h2>
              <p className="text-xl text-gray-300">
                A Modern Approach to Education Designed for Today’s Learners
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Education has changed dramatically—and so have the needs of today’s students. Traditional learning methods based solely on memorization are no longer enough. Modern learners thrive when they can engage, interact, and apply what they learn in real-world situations. Today’s education emphasizes hands-on experience, open expression, and meaningful interaction between instructors and students—making learning more personal, relevant, and unforgettable.
              </p>
              <p>
                At LIMA, we embrace this innovative approach. We believe that learning should be flexible, practical, and aligned with each student’s unique calling and purpose. Instead of limiting education to the four walls of a classroom, we see the world itself as a powerful learning environment where every experience has the potential to teach, shape, and inspire.
              </p>
              <p>
                Many institutions overlook valuable knowledge gained through life experience—but not us.
At LIMA, we believe learning happens everywhere: in ministry, in the workplace, in service, in leadership, and throughout life. If you already possess knowledge, skills, or experience, we help you convert that learning into academic progress.
              </p>
              <p className="text-xl font-semibold text-primary-400">
               Our program is built around a modern, forward-thinking educational approach that provides you with:
              </p>
              <p><li>New ways of learning that go beyond memorization</li>

<li>Stronger instructor–student relationships and personalized guidance</li>

<li>Flexible timelines that adapt to your schedule</li>

<li>Updated evaluation methods based on mastery—not years attended</li>

<li>Diverse instructional resources beyond what a traditional campus can offer</li>

<li>Customized programs tailored to your ministry goals and personal objectives</li>
</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Join the LIMA Family</h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of a global community of kingdom leaders making lasting impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/register" className="btn-primary">
                  Register Now
                </a>
              <a href="/programs" className="btn-secondary">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Leadership Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders and global ambassadors steering LIMA's mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Board of Senate Card */}
            <Link href="/about/board-of-senate">
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 cursor-pointer h-full border-2 border-transparent hover:border-primary-600">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  Board of Senate
                </h3>
                <p className="text-gray-600 mb-4">
                  Meet our board of experienced leaders guiding LIMA's vision and governance.
                </p>
                <div className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                  <span>View Board Members</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            {/* Global Ambassadors Card */}
            <Link href="/about/global-ambassadors">
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 cursor-pointer h-full border-2 border-transparent hover:border-primary-600">
                <div className="w-16 h-16 bg-gradient-to-br from-logo-bronze to-primary-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  Global Ambassadors
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore our network of global ambassadors representing LIMA worldwide.
                </p>
                <div className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                  <span>View Ambassadors</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}