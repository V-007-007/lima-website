'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbox({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!input.trim() || loading) return

    const userMessage = input
    setInput('')
    setLoading(true)

    setMessages(prev => [
      ...prev,
      { role: 'user', content: userMessage }
    ])

    // 🔑 persistent session ID
    let sessionId = localStorage.getItem('chat_session_id')
    if (!sessionId) {
      sessionId = crypto.randomUUID()
      localStorage.setItem('chat_session_id', sessionId)
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId,
        }),
      })

      const data = await res.json()

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.reply || 'No response' }
      ])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Error processing request.' }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
              msg.role === 'user'
                ? 'ml-auto bg-primary-600 text-white'
                : 'mr-auto bg-gray-100 text-gray-900'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-3 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message…"
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-primary-600 text-white px-4 rounded-lg flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
