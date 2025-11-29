'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import SuccessMessage from '@/components/SuccessMessage'
import { User, Mail, Phone, Building2, Heart } from 'lucide-react'
import { saveMembershipRegistration } from '@/lib/actions'

export default function MembershipRegistrationPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState<any>({
    fullName: '',
    homePhone: '',
    mobile: '',
    ministryName: '',
    ministryAddress: '',
    location: '',
    residentialAddress: '',
    postalAddress: '',
    email: '',
    age: '',
    maritalStatus: '',
    divorceStatus: '',
    numberOfChildren: '',
    spouseName: '',
    spousePhone: '',
    yearsAsChristian: '',
    calledToMinistryWhen: '',
    churchHasBranches: 'no',
    numberOfBranches: '',
    ordainedUnder: '',
    ordainedWhen: '',
    ordainedWhere: '',
    affiliatedToLima: 'no',
    wantToAffiliate: 'no',
    licensedWithLima: 'no',
    wantToBeLicensed: 'no',
    attendedBibleSchool: 'no',
    bibleCollegeAttended: '',
    photo: null,
    agreeDoctrinal: false,
    agreeConduct: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setFormData((prev: any) => ({ ...prev, photo: file }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev: any) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email) {
      alert('Please fill name and email')
      return
    }

    try {
      const result = await saveMembershipRegistration(formData)
      if (result.success) {
        setShowSuccess(true)
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (err: any) {
      alert(`Error submitting form: ${err.message}`)
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <AnimatedSection className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="heading-lg mb-2">Membership Application</h1>
            <p className="text-gray-600">Apply to join LIMA — complete the form and submit required documents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Member Benefits</h3>
              <p className="text-sm text-gray-600">Access to training, events and community</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-sm text-gray-600">Ministry resources and networking</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Events</h3>
              <p className="text-sm text-gray-600">Conferences and local gatherings</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Full Name *</label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="input-field" />
              </div>
              <div>
                <label className="input-label">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Home Phone</label>
                <input name="homePhone" value={formData.homePhone} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">Mobile</label>
                <input name="mobile" value={formData.mobile} onChange={handleInputChange} className="input-field" />
              </div>

              <div className="md:col-span-2">
                <label className="input-label">Ministry / Organization Name</label>
                <input name="ministryName" value={formData.ministryName} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Ministry Address</label>
                <input name="ministryAddress" value={formData.ministryAddress} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">Location</label>
                <input name="location" value={formData.location} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Residential Address</label>
                <input name="residentialAddress" value={formData.residentialAddress} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">Postal Address</label>
                <input name="postalAddress" value={formData.postalAddress} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Age</label>
                <input name="age" value={formData.age} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">Marital Status</label>
                <input name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Divorce Status</label>
                <input name="divorceStatus" value={formData.divorceStatus} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Number of Children</label>
                <input name="numberOfChildren" value={formData.numberOfChildren} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Spouse Name</label>
                <input name="spouseName" value={formData.spouseName} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">Spouse Phone</label>
                <input name="spousePhone" value={formData.spousePhone} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">How long have you been a Christian?</label>
                <input name="yearsAsChristian" value={formData.yearsAsChristian} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">When were you called to ministry?</label>
                <input name="calledToMinistryWhen" value={formData.calledToMinistryWhen} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Does your church have branches?</label>
                <select name="churchHasBranches" value={formData.churchHasBranches} onChange={handleInputChange} className="input-field">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="input-label">If yes, how many branches?</label>
                <input name="numberOfBranches" value={formData.numberOfBranches} onChange={handleInputChange} className="input-field" />
              </div>

              <div className="md:col-span-2">
                <label className="input-label">Under which ministry/church were you first ordained?</label>
                <input name="ordainedUnder" value={formData.ordainedUnder} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">When were you ordained?</label>
                <input name="ordainedWhen" value={formData.ordainedWhen} onChange={handleInputChange} className="input-field" />
              </div>
              <div>
                <label className="input-label">Where were you ordained?</label>
                <input name="ordainedWhere" value={formData.ordainedWhere} onChange={handleInputChange} className="input-field" />
              </div>

              <div>
                <label className="input-label">Has your ministry/church affiliated to LIMA?</label>
                <select name="affiliatedToLima" value={formData.affiliatedToLima} onChange={handleInputChange} className="input-field">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="input-label">If not, do you want to affiliate?</label>
                <select name="wantToAffiliate" value={formData.wantToAffiliate} onChange={handleInputChange} className="input-field">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div>
                <label className="input-label">Are you a licensed minister with LIMA?</label>
                <select name="licensedWithLima" value={formData.licensedWithLima} onChange={handleInputChange} className="input-field">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="input-label">If not, do you want to be licensed?</label>
                <select name="wantToBeLicensed" value={formData.wantToBeLicensed} onChange={handleInputChange} className="input-field">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="input-label">Did you attend any Bible school? If yes, list school and certificate obtained</label>
                <textarea name="bibleCollegeAttended" value={formData.bibleCollegeAttended} onChange={handleInputChange} className="textarea-field" rows={3} />
              </div>

              <div>
                <label className="input-label">Upload a photograph (optional)</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center gap-2"><input type="checkbox" name="agreeDoctrinal" checked={formData.agreeDoctrinal} onChange={handleCheckbox} className="mt-1"/> I agree with the official Doctrinal Statements of LIMA</label>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center gap-2"><input type="checkbox" name="agreeConduct" checked={formData.agreeConduct} onChange={handleCheckbox} className="mt-1"/> I agree to abide by rules, laws and conduct described in the membership document</label>
              </div>
            </div>

            <div className="bg-primary-50 p-4 rounded-lg text-sm text-gray-700">
              <p>A non-refundable fee of twenty dollars ($20) is required annually. Photographs of yourself and family are required to be submitted alongside with this form.</p>
            </div>

            <button type="submit" className="btn-primary w-full">Submit Membership Application</button>
          </form>
        </div>
      </AnimatedSection>

      {showSuccess && (
        <SuccessMessage
          title="Membership Application Submitted"
          message="Thank you. Your membership application has been received. Our team will contact you with next steps."
          onClose={() => {
            setShowSuccess(false)
            window.location.href = '/'
          }}
        />
      )}
    </div>
  )
}