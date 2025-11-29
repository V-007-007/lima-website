/**
 * VALIDATION UTILITIES
 * ====================
 * Form validation helpers and regex patterns
 */

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation (flexible format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s()+-]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

// Certificate number validation
export const isValidCertificateNumber = (certNumber: string): boolean => {
  // Example format: LIMA2023001
  const certRegex = /^LIMA\d{7}$/i
  return certRegex.test(certNumber)
}

// Password strength check
export const getPasswordStrength = (password: string): {
  strength: 'weak' | 'medium' | 'strong'
  feedback: string[]
} => {
  const feedback: string[] = []
  let strength: 'weak' | 'medium' | 'strong' = 'weak'

  if (password.length < 8) {
    feedback.push('Password should be at least 8 characters')
  }

  if (!/[A-Z]/.test(password)) {
    feedback.push('Include at least one uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    feedback.push('Include at least one lowercase letter')
  }

  if (!/\d/.test(password)) {
    feedback.push('Include at least one number')
  }

  if (!/[!@#$%^&*]/.test(password)) {
    feedback.push('Include at least one special character')
  }

  if (feedback.length === 0) {
    strength = 'strong'
  } else if (feedback.length <= 2) {
    strength = 'medium'
  }

  return { strength, feedback }
}

// Sanitize input (basic XSS prevention)
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  
  if (cleaned.length === 11) {
    return `+${cleaned.charAt(0)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
  }
  
  return phone
}

// Date validation
export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString)
  return date instanceof Date && !isNaN(date.getTime())
}

// Check if date is in the past
export const is