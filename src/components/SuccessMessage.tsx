import { CheckCircle } from 'lucide-react'

interface SuccessMessageProps {
  title?: string
  message: string
  onClose?: () => void
}

export default function SuccessMessage({ 
  title = 'Success!', 
  message, 
  onClose 
}: SuccessMessageProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-slide-up">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        
        {onClose && (
          <button onClick={onClose} className="btn-primary w-full">
            Continue
          </button>
        )}
      </div>
    </div>
  )
}