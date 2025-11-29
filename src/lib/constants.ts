/**
 * CONSTANTS
 * =========
 * Application-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: 'LIMA Academy',
  fullName: 'Leadership Impact Ministers Academy',
  tagline: 'LIMA for you, LIMA for me, LIMA for all',
  description: 'Empowering kingdom-purpose driven leaders through faith-inspired education.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  contact: {
    email: 'info@lima-academy.org',
    phone: '+1 (234) 567-890',
    address: '123 Faith Street',
    city: 'Kingdom City',
    state: 'KC',
    zip: '12345',
    country: 'United States',
  },
  
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
}

export const PROGRAMS = {
  foundation: {
    id: 'foundation',
    title: 'Foundation Program',
    duration: '6 Months',
    icon: '📚',
    shortDescription: 'Build a solid foundation in leadership principles and kingdom values.',
  },
  advanced: {
    id: 'advanced',
    title: 'Advanced Leadership',
    duration: '12 Months',
    icon: '🎓',
    shortDescription: 'Take your leadership to the next level with advanced strategies and mentorship.',
  },
  impact: {
    id: 'impact',
    title: 'Ministry Impact',
    duration: '9 Months',
    icon: '✨',
    shortDescription: 'Learn to create lasting impact in your community and ministry.',
  },
}

export const MEMBERSHIP_TYPES = {
  individual: {
    id: 'individual',
    title: 'Individual Membership',
    description: 'For individual leaders and ministers',
  },
  organizational: {
    id: 'organizational',
    title: 'Organizational Membership',
    description: 'For churches and ministry organizations',
  },
  partner: {
    id: 'partner',
    title: 'Partnership Membership',
    description: 'For strategic partners and supporters',
  },
}

export const EDUCATION_LEVELS = [
  { value: 'high-school', label: 'High School' },
  { value: 'associate', label: 'Associate Degree' },
  { value: 'bachelor', label: "Bachelor's Degree" },
  { value: 'master', label: "Master's Degree" },
  { value: 'doctorate', label: 'Doctorate' },
]

export const ORGANIZATION_TYPES = [
  { value: 'local-church', label: 'Local Church' },
  { value: 'ministry-org', label: 'Ministry Organization' },
  { value: 'non-profit', label: 'Non-Profit' },
  { value: 'parachurch', label: 'Parachurch Organization' },
  { value: 'educational', label: 'Educational Institution' },
  { value: 'other', label: 'Other' },
]

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'admissions', label: 'Admissions Question' },
  { value: 'programs', label: 'Program Information' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'support', label: 'Technical Support' },
  { value: 'other', label: 'Other' },
]

export const AREAS_OF_INTEREST = [
  'Leadership Development',
  'Ministry Resources',
  'Networking Opportunities',
  'Conferences & Events',
  'Mentorship Programs',
  'Online Courses',
]

// Chatbot FAQs
export const CHATBOT_FAQS = {
  programs: {
    keywords: ['program', 'course', 'curriculum', 'study'],
    response: 'LIMA offers three main programs: Foundation Program (6 months), Advanced Leadership (12 months), and Ministry Impact (9 months). Each program is designed to equip you with kingdom-purpose driven leadership skills. Would you like to learn more about a specific program?',
  },
  registration: {
    keywords: ['register', 'enroll', 'sign up', 'apply', 'application'],
    response: 'Registration is easy! You can register for the Academy through our Academy Registration page, or become a member through our Membership Registration. Both forms will guide you through the process step by step. Would you like me to direct you to one of these pages?',
  },
  cost: {
    keywords: ['cost', 'price', 'fee', 'tuition', 'payment'],
    response: 'For detailed information about program costs and payment plans, please visit our Programs page or contact our admissions team at info@lima-academy.org. We offer flexible payment options to make education accessible.',
  },
  verification: {
    keywords: ['verify', 'certificate', 'certification', 'credential'],
    response: 'You can verify a graduate\'s certificate on our Certificate Verification page. Simply enter the certificate number to confirm authenticity and view graduate details.',
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk'],
    response: 'You can reach us at info@lima-academy.org or call +1 (234) 567-890. You can also visit our Contact page to send us a message directly. We typically respond within 24 hours.',
  },
  about: {
    keywords: ['about', 'mission', 'vision', 'who', 'what'],
    response: 'LIMA (Leadership Impact Ministers Academy) is dedicated to raising kingdom-purpose driven leaders. Our mission is to equip ministers and leaders with wisdom, knowledge, and practical skills for lasting impact. Learn more on our About page!',
  },
}

// Admin configuration
export const ADMIN_CONFIG = {
  passwordEnvVar: 'ADMIN_PASSWORD',
  defaultPassword: 'admin123', // Only for development - change in production
}