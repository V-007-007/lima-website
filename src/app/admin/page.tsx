'use client'

import { useState, useEffect } from 'react'
import { Lock, Users, FileText, UserPlus, Eye, EyeOff } from 'lucide-react'
import programsData from '@/data/programs-data.json'

interface Graduate {
  id: string
  name: string
  certificateNumber: string
  program: string
  graduationDate: string
  email: string
}

interface Submission {
  id: string
  type: string
  name: string
  email: string
  submittedAt: string
  status: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'submissions' | 'graduates' | 'add'>('submissions')
  
  // New Graduate Form State
  const [newGraduate, setNewGraduate] = useState({
    name: '',
    email: '',
    certificateNumber: '',
    program: '',
    graduationDate: '',
  })

  // Submissions (still mock for now)
  {/*const [submissions] = useState<Submission[]>([
    {
      id: '1',
      type: 'Academy Registration',
      name: 'John Doe',
      email: 'john@example.com',
      submittedAt: '2024-01-15T10:30:00Z',
      status: 'Pending'
    },
    {
      id: '2',
      type: 'Membership Application',
      name: 'Jane Smith',
      email: 'jane@example.com',
      submittedAt: '2024-01-14T14:20:00Z',
      status: 'Reviewed'
    }
  ]) */}

  // Graduates loaded from Supabase
  const [graduates, setGraduates] = useState<Graduate[]>([])
  const [loadingGraduates, setLoadingGraduates] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Replace with environment variable check
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  const handleAddGraduate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const payload = {
        name: newGraduate.name,
        email: newGraduate.email,
        certificateNumber: newGraduate.certificateNumber,
        program: newGraduate.program,
        graduationDate: newGraduate.graduationDate,
      }

      const res = await fetch('/api/admin/graduates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()
      if (res.ok && result?.success) {
        alert('Graduate added successfully!')
        // refresh list
        await loadGraduates()
        setNewGraduate({ name: '', email: '', certificateNumber: '', program: '', graduationDate: '' })
      } else {
        alert(`Error: ${result?.error || 'Unable to save graduate'}`)
      }
    } catch (err: any) {
      console.error('Add graduate error:', err)
      alert(err?.message || 'Unexpected error')
    }
  }

  // Load graduates from Supabase
  const loadGraduates = async () => {
    try {
      setLoadingGraduates(true)
      const res = await fetch('/api/admin/graduates')
      const result = await res.json()
      if (res.ok && result?.success) {
        const rows = Array.isArray(result.data) ? result.data : []
        // Normalize DB column names (snake_case) to the camelCase used in the UI
        const normalized = rows.map((g: any) => ({
          id: g.id,
          name: g.name,
          certificateNumber: g.certificate_number ?? g.certificateNumber ?? '',
          program: g.program,
          graduationDate: g.graduation_date ?? g.graduationDate ?? null,
          email: g.email,
        }))

        setGraduates(normalized)
      } else {
        console.error('Failed to load graduates:', result?.error)
        setGraduates([])
      }
    } catch (err) {
      console.error('Error loading graduates:', err)
      setGraduates([])
    } finally {
      setLoadingGraduates(false)
    }
  }

  useEffect(() => {
    loadGraduates()
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Admin Access</h1>
            <p className="text-gray-600 text-center mb-8">Enter password to continue</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="input-label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field pr-12"
                    placeholder="Enter admin password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Access Admin Panel
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="section-container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-lg mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Add and manage graduates</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-8">
          <div className="flex border-b border-gray-200">
            {/*<button
              onClick={() => setActiveTab('submissions')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'submissions'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
               <FileText className="w-5 h-5 inline mr-2" />
              Submissions
            </button> */}
            <button
              onClick={() => setActiveTab('graduates')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'graduates'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            > 
              <Users className="w-5 h-5 inline mr-2" />
              Graduates
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'add'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <UserPlus className="w-5 h-5 inline mr-2" />
              Add Graduate
            </button>
          </div>

          <div className="p-6">
            {/* Submissions Tab */}
            {/*{activeTab === 'submissions' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Submissions</h2>
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                          <p className="text-sm text-gray-600">{submission.email}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          submission.status === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {submission.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{submission.type}</span>
                        <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}*/}

            {/* Graduates Tab */}
            {activeTab === 'graduates' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Graduate List</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Certificate #</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Program</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Graduation Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {graduates.map((graduate) => (
                        <tr key={graduate.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">{graduate.name}</td>
                          <td className="py-3 px-4 font-mono text-sm">{graduate.certificateNumber}</td>
                          <td className="py-3 px-4">{graduate.program}</td>
                          <td className="py-3 px-4">{new Date(graduate.graduationDate).toLocaleDateString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{graduate.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Add Graduate Tab */}
            {activeTab === 'add' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Graduate</h2>
                <form onSubmit={handleAddGraduate} className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="graduateName" className="input-label">Full Name *</label>
                      <input
                        type="text"
                        id="graduateName"
                        value={newGraduate.name}
                        onChange={(e) => setNewGraduate({ ...newGraduate, name: e.target.value })}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="graduateEmail" className="input-label">Email *</label>
                      <input
                        type="email"
                        id="graduateEmail"
                        value={newGraduate.email}
                        onChange={(e) => setNewGraduate({ ...newGraduate, email: e.target.value })}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="certificateNum" className="input-label">Certificate Number *</label>
                      <input
                        type="text"
                        id="certificateNum"
                        value={newGraduate.certificateNumber}
                        onChange={(e) => setNewGraduate({ ...newGraduate, certificateNumber: e.target.value })}
                        required
                        className="input-field"
                        placeholder="LIMA2024001"
                      />
                    </div>

                    <div>
                      <label htmlFor="graduateProgram" className="input-label">Program *</label>
                      <select
                        id="graduateProgram"
                        value={newGraduate.program}
                        onChange={(e) => setNewGraduate({ ...newGraduate, program: e.target.value })}
                        required
                        className="input-field"
                      >
                        <option value="">Select program</option>
                        {programsData?.programs?.map((p: any) => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="gradDate" className="input-label">Graduation Date *</label>
                      <input
                        type="date"
                        id="gradDate"
                        value={newGraduate.graduationDate}
                        onChange={(e) => setNewGraduate({ ...newGraduate, graduationDate: e.target.value })}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary">
                    Add Graduate
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )

}




