/**
 * TYPE DEFINITIONS
 * ================
 * TypeScript interfaces and types for the LIMA Academy application
 */

export interface AcademyRegistration {
  // Personal Information
  fullName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  
  // Address
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  
  // Program Selection
  program: string
  startDate: string
  
  // Background
  educationLevel: string
  currentMinistry: string
  yearsInMinistry: string
  
  // Additional Information
  howDidYouHear: string
  expectations: string
  emergencyContact: string
  emergencyPhone: string
}

export interface MembershipRegistration {
  // Personal Information
  fullName: string
  email: string
  phone: string
  
  // Organization/Ministry
  organizationName: string
  position: string
  organizationType: string
  
  // Membership Type
  membershipType: string
  
  // Additional Information
  areasOfInterest: string[]
  howCanWeHelp: string
  referralSource: string
}

export interface Graduate {
  id: string
  name: string
  email: string
  certificateNumber: string
  program: string
  graduationDate: string
  status: 'valid' | 'revoked'
  createdAt?: string
}

export interface ContactSubmission {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
  published: boolean
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
  category?: string
}

export interface Program {
  id: string
  title: string
  description: string
  duration: string
  icon: string
  features: string[]
  prerequisites?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
  rating?: number
}

export type SubmissionStatus = 'pending' | 'reviewed' | 'approved' | 'rejected'

export interface Submission {
  id: string
  type: 'academy' | 'membership' | 'contact'
  name: string
  email: string
  submittedAt: string
  status: SubmissionStatus
  data: AcademyRegistration | MembershipRegistration | ContactSubmission
}