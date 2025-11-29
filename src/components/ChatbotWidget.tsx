'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import Chatbox from './Chatbox'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center z-50"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-up">
          <Chatbox onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  )
}