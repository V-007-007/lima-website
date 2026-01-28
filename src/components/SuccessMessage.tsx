import { CheckCircle, X } from 'lucide-react'

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-black border border-[#262626] rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-slide-up">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-[#262626] hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted hover:text-primary transition-smooth"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-muted mb-6">{message}</p>
        
        {onClose && (
          <button onClick={onClose} className="btn-primary w-full">
            Continue
          </button>
        )}
      </div>
    </div>
  )
}
