import AnimatedSection from '@/components/AnimatedSection'
import GalleryGrid from '@/components/GalleryGrid'

export default function GalleryPage() {
  // TODO: In the future, fetch from CMS
  // For now, using placeholder images
  const galleryImages = [
    {
      id: '1',
      src: '/images/placeholder-1.jpg',
      alt: 'LIMA Graduation Ceremony 2023',
      title: 'Graduation Ceremony 2023',
    },
    {
      id: '2',
      src: '/images/placeholder-2.jpg',
      alt: 'Leadership Workshop',
      title: 'Leadership Workshop',
    },
    {
      id: '3',
      src: '/images/placeholder-3.jpg',
      alt: 'Community Outreach Program',
      title: 'Community Outreach',
    },
    {
      id: '4',
      src: '/images/placeholder-1.jpg',
      alt: 'Student Fellowship',
      title: 'Student Fellowship',
    },
    {
      id: '5',
      src: '/images/placeholder-2.jpg',
      alt: 'Ministry Training Session',
      title: 'Training Session',
    },
    {
      id: '6',
      src: '/images/placeholder-3.jpg',
      alt: 'Annual Conference',
      title: 'Annual Conference',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 font-serif">Gallery</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Capturing moments of transformation, fellowship, and kingdom impact at LIMA Academy
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Grid */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <GalleryGrid images={galleryImages} />
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Be Part of Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community and create your own transformational journey at LIMA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/register" className="btn-primary">
                  Register
              </a>
              <a href="/programs" className="btn-secondary">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}