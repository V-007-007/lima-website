'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { Search, CheckCircle, XCircle, Award } from 'lucide-react'

interface VerificationResult {
  found: boolean
  data?: {
    certificateNumber: string
    graduateName: string
    program: string
    graduationDate: string
    status: string
  }
}

export default function VerifyPage() {
  const [certificateNumber, setCertificateNumber] = useState('')
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateNumber })
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Verification failed')

      if (json.found && json.data) {
        setResult({ found: true, data: {
          certificateNumber: json.data.certificate_number || certificateNumber.toUpperCase(),
          graduateName: json.data.name || json.data.graduateName || 'Unknown',
          program: json.data.program || 'Unknown',
          graduationDate: json.data.graduation_date || json.data.graduationDate || new Date().toISOString(),
          status: json.data.status || 'Unknown',
        }})
      } else {
        setResult({ found: false })
      }
    } catch (err: any) {
      console.error('Verification error:', err)
      alert(err.message || String(err))
      setResult({ found: false })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <AnimatedSection className="section-padding">
        <div className="section-container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="heading-lg mb-4">Certificate Verification</h1>
            <p className="text-lg text-gray-600">
              Verify the authenticity of LIMA Academy certificates
            </p>
          </div>

          {/* Verification Form */}
          <div className="card-elevated p-8 mb-8">
            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label htmlFor="certificateNumber" className="input-label">
                  Certificate Number
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="certificateNumber"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    required
                    className="input-field flex-1"
                    placeholder="e.g., LIMA2023001"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !certificateNumber.trim()}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        <span>Verify</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Enter the certificate number exactly as it appears on the certificate. 
                  Certificate numbers are case-insensitive.
                </p>
              </div>
            </form>
          </div>

          {/* Verification Result */}
          {result && (
            <AnimatedSection className="animate-fade-in">
              {result.found && result.data ? (
                <div className="card-elevated p-8 border-2 border-green-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate Verified</h3>
                      <p className="text-gray-600">This certificate is authentic and valid</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Certificate Number</p>
                        <p className="font-semibold text-gray-900">{result.data.certificateNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Status</p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {result.data.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Graduate Name</p>
                        <p className="font-semibold text-gray-900">{result.data.graduateName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Program</p>
                        <p className="font-semibold text-gray-900">{result.data.program}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-500 mb-1">Graduation Date</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(result.data.graduationDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-primary-50 p-4 rounded-lg">
                    <p className="text-sm text-primary-900">
                      This certificate has been verified against LIMA Academy's official records. 
                      For any questions or concerns, please contact us at verify@lima-academy.org
                    </p>
                  </div>
                </div>
              ) : (
                <div className="card-elevated p-8 border-2 border-red-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate Not Found</h3>
                      <p className="text-gray-600">
                        No record found for certificate number: <strong>{certificateNumber}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl">
                    <p className="text-sm text-red-900 mb-4">
                      This could mean:
                    </p>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>The certificate number was entered incorrectly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>The certificate is not from LIMA Academy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>The certificate may have been revoked or is invalid</span>
                      </li>
                    </ul>
                    <p className="text-sm text-red-900 mt-4">
                      If you believe this is an error, please contact us at verify@lima-academy.org
                    </p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          )}

          {/* Information Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Verification</h3>
              <p className="text-sm text-gray-600">
                All certificates are verified against our secure database
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-sm text-gray-600">
                Get immediate verification results in seconds
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-sm text-gray-600">
                Simply enter the certificate number to verify
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}