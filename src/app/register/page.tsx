import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function RegisterOptionsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <AnimatedSection className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Register</h1>
            <p className="text-lg text-gray-600">Choose the registration type that fits you — Academy admission or Membership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/register/academy" className="block">
              <div className="card-elevated hover:shadow-lg transition-shadow p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-2">Academy Application</h3>
                  <p className="text-gray-600">Apply for a certificate, diploma or degree program at LIMA Academy.</p>
                </div>
                <div className="mt-6">
                  <span className="inline-block btn-primary">Apply to Academy</span>
                </div>
              </div>
            </Link>

            <Link href="/register/membership" className="block">
              <div className="card-elevated hover:shadow-lg transition-shadow p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold mb-2">Membership Application</h3>
                  <p className="text-gray-600">Join the LIMA community — apply for membership to access resources and events.</p>
                </div>
                <div className="mt-6">
                  <span className="inline-block btn-primary">Apply for Membership</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
