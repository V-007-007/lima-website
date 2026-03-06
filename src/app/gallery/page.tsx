import AnimatedSection from '@/components/AnimatedSection'
import GalleryGrid from '@/components/GalleryGrid'

export default function GalleryPage() {
  // TODO: In the future, fetch from CMS
  // For now, using placeholder images
  const galleryImages = [
    {
      id: '1',
      src: ['/images/jpegs/DSC_0991.jpg', '/images/jpegs/DSC_1009.jpg', '/images/jpegs/DSC_1014.jpg', '/images/jpegs/DSC_1028.jpg', '/images/jpegs/DSC_1030.jpg', '/images/jpegs/DSC_1041.jpg', '/images/jpegs/DSC_1042.jpg', '/images/jpegs/DSC_1050.jpg', 
           '/images/jpegs/DSC_1051.jpg', '/images/jpegs/DSC_1052.jpg', '/images/jpegs/DSC_1053.jpg', '/images/jpegs/DSC_1056.jpg', '/images/jpegs/DSC_1060.jpg', '/images/jpegs/DSC_1064.jpg', '/images/jpegs/DSC_1066.jpg', '/images/jpegs/DSC_1069.jpg', 
           '/images/jpegs/DSC_1074.jpg', '/images/jpegs/DSC_1076.jpg', '/images/jpegs/DSC_1078.jpg', '/images/jpegs/DSC_1079.jpg', '/images/jpegs/DSC_1081.jpg', '/images/jpegs/DSC_1087.jpg', '/images/jpegs/DSC_1091.jpg', '/images/jpegs/DSC_1092.jpg', 
           '/images/jpegs/DSC_1094.jpg', '/images/jpegs/DSC_1097.jpg', '/images/jpegs/DSC_1102.jpg', '/images/jpegs/DSC_1107.jpg', '/images/jpegs/DSC_1113.jpg', '/images/jpegs/DSC_1129.jpg', '/images/jpegs/DSC_1131.jpg', '/images/jpegs/DSC_1133.jpg', 
           '/images/jpegs/DSC_1138.jpg', '/images/jpegs/DSC_1139.jpg', '/images/jpegs/DSC_1131.jpg', '/images/jpegs/DSC_1142.jpg', '/images/jpegs/DSC_1148.jpg', '/images/jpegs/DSC_1161.jpg', '/images/jpegs/DSC_1166.jpg', '/images/jpegs/DSC_1169.jpg', 
           '/images/jpegs/DSC_1170.jpg', '/images/jpegs/DSC_1177.jpg', '/images/jpegs/DSC_1182.jpg', '/images/jpegs/DSC_1186.jpg', '/images/jpegs/DSC_1190.jpg', '/images/jpegs/DSC_1191.jpg', '/images/jpegs/DSC_1193.jpg', '/images/jpegs/DSC_1199.jpg', 
           '/images/jpegs/DSC_1208.jpg', '/images/jpegs/DSC_1208.jpg', '/images/jpegs/DSC_1210.jpg', '/images/jpegs/DSC_1212.jpg', '/images/jpegs/DSC_1214.jpg', '/images/jpegs/DSC_1216.jpg', '/images/jpegs/DSC_1223.jpg', '/images/jpegs/DSC_1232.jpg', 
           '/images/jpegs/DSC_1233.jpg', '/images/jpegs/DSC_1241.jpg', '/images/jpegs/DSC_1242.jpg', '/images/jpegs/DSC_1242.jpg', '/images/jpegs/DSC_1243.jpg', '/images/jpegs/DSC_1244.jpg', '/images/jpegs/DSC_1246.jpg', '/images/jpegs/DSC_1247.jpg', 
           '/images/jpegs/DSC_1248.jpg', '/images/jpegs/DSC_1264.jpg', '/images/jpegs/DSC_1266.jpg'],
      alt: 'LIMA Graduation Ceremony 2023',
      title: 'Graduation Ceremony 2023',
    },
    {
      id: '2',
      src: ['/images/jpegs/DSC_1028.jpg'],
      alt: 'Leadership Workshop',
      title: 'Leadership Workshop',
    },
    {
      id: '3',
      src: ['/images/jpegs/DSC_1030.jpg'],
      alt: 'Community Outreach Program',
      title: 'Community Outreach',
    },
    {
      id: '4',
      src: ['/images/jpegs/DSC_1041.jpg'],
      alt: 'Student Fellowship',
      title: 'Student Fellowship',
    },
    {
      id: '5',
      src: ['/images/jpegs/DSC_1042.jpg'],
      alt: 'Ministry Training Session',
      title: 'Training Session',
    },
    {
      id: '6',
      src: ['/images/jpegs/DSC_1050.jpg'],
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



