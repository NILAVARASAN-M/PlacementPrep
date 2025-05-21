
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface SolutionPanelProps {
  isOpen: boolean
  onClose: () => void
  problem: {
    name: string
    solution: string
  } | null
}

export const SolutionPanel = ({ isOpen, onClose, problem }: SolutionPanelProps) => {
  const [mounted, setMounted] = useState(false)

  // Handle escape key press to close panel
  useEffect(() => {
    setMounted(true)

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [isOpen, onClose])

  if (!mounted) return null

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 transition-opacity" onClick={onClose} />}

      {/* Solution Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {problem && (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-800">{problem.name}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close solution panel"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Solution Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="prose max-w-none">
                <ReactMarkdown>{problem.solution}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

