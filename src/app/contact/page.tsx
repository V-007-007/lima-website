'use client'
import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import SuccessMessage from '@/components/SuccessMessage'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { saveContactSubmission } from '@/lib/actions'

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    try {
      const result = await saveContactSubmission(formData)
      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (err: any) {
      alert(`Error submitting form: ${err.message}`)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Faith Street', 'Kingdom City, KC 12345'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+234 802 302 9201', 'Mon-Fri: 9AM - 5PM EST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['ireneudofa2020@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday', '9:00 AM - 5:00 PM EST'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 font-serif">Get In Touch</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Info Cards */}
      <AnimatedSection className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="input-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="input-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="input-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="input-label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions Question</option>
                      <option value="programs">Program Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="input-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="textarea-field"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Info Sidebar */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Admissions Support</h3>
                    <p className="text-gray-600">
                      Get answers about our programs, admission requirements, and application process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Technical Assistance</h3>
                    <p className="text-gray-600">
                      Need help with certificate verification or accessing resources? We're here to help.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Partnership Opportunities</h3>
                    <p className="text-gray-600">
                      Interested in partnering with LIMA? Let's discuss how we can collaborate.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">General Inquiries</h3>
                    <p className="text-gray-600">
                      Have questions about LIMA, our mission, or how to get involved? Reach out!
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                  <h3 className="font-bold text-primary-900 mb-2">Quick Response</h3>
                  <p className="text-sm text-primary-800">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section (Placeholder) */}
      <AnimatedSection className="section-padding bg-gray-100">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
            <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">Map integration coming soon</p>
                <p className="text-sm">123 Faith Street, Kingdom City, KC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {showSuccess && (
        <SuccessMessage
          title="Message Sent!"
          message="Thank you for contacting us. We've received your message and will respond within 24 hours."
          onClose={() => {
            setShowSuccess(false)
          }}
        />
      )}
    </div>
  )
}