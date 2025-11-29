'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import SuccessMessage from '@/components/SuccessMessage'
import { User, Mail, Phone, MapPin, BookOpen, FileText } from 'lucide-react'
import { saveAcademyRegistration } from '@/lib/actions'

export default function AcademyRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState<any>({
    // Personal
    fullName: '',
    nickname: '',
    homePhone: '',
    workPhone: '',
    email: '',
    dateOfBirth: '',
    placeOfBirth: '',
    age: '',
    gender: '',
    nationality: '',
    foreignStudent: 'no',
    countryOfCitizenship: '',
    visaType: '',
    passportNumber: '',

    // Address
    address: '',
    city: '',
    state: '',
    postalCode: '',

    // Employment
    employer: '',
    employerAddress: '',
    employerPhone: '',

    // Family
    maritalStatus: '',
    spouseName: '',
    spouseOccupation: '',
    numberOfChildren: '',
    childrenAges: '',
    childrenAtHome: '',
    parentsBornAgain: 'no',
    parentsApprove: 'no',
    visionStatement: '',

    // Education
    currentlyInHighSchool: 'no',
    highSchoolGraduate: 'no',
    highestGradeAttended: '',
    lastDateOfAttendance: '',
    previouslyApplied: 'no',
    previouslyAppliedName: '',
    transferStudent: 'no',
    honorsAwards: '',
    foreignLanguages: '',
    specialSkills: '',

    // Program
    programOfStudy: '',
    fullTimeMinistry: 'no',
    reasonToAttend: '',
    howDidYouHear: '',

    // Christian life
    dateBecameChristian: '',
    baptizedByImmersion: 'no',
    baptizedHolySpirit: 'no',
    seekingSpirit: 'no',
    churchMember: 'no',
    churchName: '',
    churchDenomination: '',
    churchAddress: '',
    seniorPastor: '',
    churchPhone: '',
    christianWork: '',
    calledToMinistry: 'no',
    calledExplanation: '',
    useTobacco: 'no',
    useAlcohol: 'no',
    usedDrugs: 'no',
    drugsWhen: '',
    deniedAdmission: 'no',
    deniedExplanation: '',
    personalGrowth: '',

    // References & misc
    pastorRefName: '',
    pastorRefPosition: '',
    pastorRefChurch: '',
    pastorRefPhone: '',

    agreeCodeOfConduct: false,
    applicationFeeAmount: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as any
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev: any) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email) {
      alert('Please complete required fields: Full name and Email')
      return
    }

    try {
      const result = await saveAcademyRegistration(formData)
      if (result.success) {
        setShowSuccess(true)
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (err: any) {
      alert(`Error submitting form: ${err.message}`)
    }
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <AnimatedSection className="section-padding">
        <div className="section-container max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="heading-lg mb-2">Academy Application</h1>
            <p className="text-gray-600">Complete the form below to apply for admission to LIMA Academy</p>
          </div>

          <div className="card-elevated p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicators */}
              <div className="flex items-center justify-center mb-6">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold ${currentStep >= s ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      {s}
                    </div>
                    {s < 4 && <div className={`w-16 h-1 ${currentStep > s ? 'bg-primary-600' : 'bg-gray-200'} mx-3`} />}
                  </div>
                ))}
              </div>

              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold flex items-center gap-2"><User className="w-5 h-5 text-primary-600"/> Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="input-label">Full Name *</label>
                      <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Nickname</label>
                      <input name="nickname" value={formData.nickname} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Home Telephone</label>
                      <input name="homePhone" value={formData.homePhone} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Work Telephone</label>
                      <input name="workPhone" value={formData.workPhone} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Place of Birth</label>
                      <input name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Date of Birth</label>
                      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Nationality</label>
                      <input name="nationality" value={formData.nationality} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Foreign Student?</label>
                      <select name="foreignStudent" value={formData.foreignStudent} onChange={handleInputChange} className="input-field">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div>
                      <label className="input-label">Passport #</label>
                      <input name="passportNumber" value={formData.passportNumber} onChange={handleInputChange} className="input-field" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={nextStep} className="btn-primary">Continue</button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold flex items-center gap-2"><MapPin className="w-5 h-5 text-primary-600"/> Address & Employment</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="input-label">Address</label>
                      <input name="address" value={formData.address} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">City</label>
                      <input name="city" value={formData.city} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">State</label>
                      <input name="state" value={formData.state} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Postal Code</label>
                      <input name="postalCode" value={formData.postalCode} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Employer</label>
                      <input name="employer" value={formData.employer} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Employer Address</label>
                      <input name="employerAddress" value={formData.employerAddress} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Employer Phone</label>
                      <input name="employerPhone" value={formData.employerPhone} onChange={handleInputChange} className="input-field" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
                    <button type="button" onClick={nextStep} className="btn-primary">Continue</button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary-600"/> Education & Objectives</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="input-label">Currently in High School?</label>
                      <select name="currentlyInHighSchool" value={formData.currentlyInHighSchool} onChange={handleInputChange} className="input-field">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                    <div>
                      <label className="input-label">High School Graduate?</label>
                      <select name="highSchoolGraduate" value={formData.highSchoolGraduate} onChange={handleInputChange} className="input-field">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div>
                      <label className="input-label">Highest Grade Attended</label>
                      <input name="highestGradeAttended" value={formData.highestGradeAttended} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Last Date of Attendance</label>
                      <input type="date" name="lastDateOfAttendance" value={formData.lastDateOfAttendance} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Colleges Attended (list up to 3)</label>
                      <textarea name="collegesAttended" value={(formData.collegesAttended || '')} onChange={handleInputChange} className="textarea-field" placeholder="Name - City/State - Dates - Degree" rows={4} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Honors / Awards</label>
                      <input name="honorsAwards" value={formData.honorsAwards} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Foreign Languages / Skills</label>
                      <input name="foreignLanguages" value={formData.foreignLanguages} onChange={handleInputChange} className="input-field" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
                    <button type="button" onClick={nextStep} className="btn-primary">Continue</button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold flex items-center gap-2"><FileText className="w-5 h-5 text-primary-600"/> Christian Life & References</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="input-label">When did you become a Christian?</label>
                      <input name="dateBecameChristian" value={formData.dateBecameChristian} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Baptized in water by immersion?</label>
                      <select name="baptizedByImmersion" value={formData.baptizedByImmersion} onChange={handleInputChange} className="input-field">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Church Name</label>
                      <input name="churchName" value={formData.churchName} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div>
                      <label className="input-label">Senior Pastor</label>
                      <input name="seniorPastor" value={formData.seniorPastor} onChange={handleInputChange} className="input-field" />
                    </div>
                    <div>
                      <label className="input-label">Church Phone</label>
                      <input name="churchPhone" value={formData.churchPhone} onChange={handleInputChange} className="input-field" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Christian Work / Participation</label>
                      <textarea name="christianWork" value={formData.christianWork} onChange={handleInputChange} className="textarea-field" rows={3} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="input-label">Briefly tell how and when you became a Christian and your growth in Christ</label>
                      <textarea name="personalGrowth" value={formData.personalGrowth} onChange={handleInputChange} className="textarea-field" rows={4} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2"><input type="checkbox" name="agreeCodeOfConduct" checked={formData.agreeCodeOfConduct} onChange={handleCheckbox} className="mt-1"/> I certify that the information provided is complete and agree to the Code of Conduct</label>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
                    <button type="submit" className="btn-primary">Submit Application</button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </AnimatedSection>

      {showSuccess && (
        <SuccessMessage
          title="Application Submitted"
          message="Thank you. Your application has been received. Our admissions team will contact you within 3-5 business days."
          onClose={() => {
            setShowSuccess(false)
            window.location.href = '/'
          }}
        />
      )}
    </div>
  )
}