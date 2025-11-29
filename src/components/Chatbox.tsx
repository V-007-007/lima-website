'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatbotProps {
  onClose: () => void
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m LIA, your LIMA assistant. How can I help you today? I can answer questions about our programs, registration, or help you navigate the site.',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // TODO: Replace with actual API call to LLM
    // For now, using mock responses based on keywords
    setTimeout(() => {
      const response = getMockResponse(userMessage)
      setMessages((prev) => [...prev, { role: 'assistant', content: response }])
      setIsLoading(false)
    }, 1000)
  }

  const getMockResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    // FAQ responses
    if (lowerQuery.includes('program') || lowerQuery.includes('course')) {
      return 'LIMA offers three main programs: Foundation Program (6 months), Advanced Leadership (12 months), and Ministry Impact (9 months). Each program is designed to equip you with kingdom-purpose driven leadership skills. Would you like to learn more about a specific program?'
    }

    if (lowerQuery.includes('register') || lowerQuery.includes('enroll') || lowerQuery.includes('sign up')) {
      return 'Registration is easy! You can register for the Academy through our Academy Registration page, or become a member through our Membership Registration. Both forms will guide you through the process step by step. Would you like me to direct you to one of these pages?'
    }

    if (lowerQuery.includes('cost') || lowerQuery.includes('price') || lowerQuery.includes('fee')) {
      return 'For detailed information about program costs and payment plans, please visit our Programs page or contact our admissions team at info@lima-academy.org. We offer flexible payment options to make education accessible.'
    }

    if (lowerQuery.includes('verify') || lowerQuery.includes('certificate')) {
      return 'You can verify a graduate\'s certificate on our Certificate Verification page. Simply enter the certificate number to confirm authenticity and view graduate details.'
    }

    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone')) {
      return 'You can reach us at info@lima-academy.org or call +1 (234) 567-890. You can also visit our Contact page to send us a message directly. We typically respond within 24 hours.'
    }

    if (lowerQuery.includes('about') || lowerQuery.includes('mission') || lowerQuery.includes('vision')) {
      return 'LIMA (Leadership Impact Ministers Academy) is dedicated to raising kingdom-purpose driven leaders. Our mission is to equip ministers and leaders with wisdom, knowledge, and practical skills for lasting impact. Learn more on our About page!'
    }

    // Default response
    return 'Thank you for your question! I\'m here to help with information about LIMA programs, registration, certificates, and general inquiries. You can also browse our website for more details, or contact our team directly at info@lima-academy.org. What else would you like to know?'
  }

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">LIA Assistant</h3>
          <p className="text-xs text-primary-100">Here to help you</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-primary-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-900 rounded-bl-sm shadow-sm'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </>
  )
}