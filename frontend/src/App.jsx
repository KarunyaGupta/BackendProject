import { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import ReviewPanel from './components/ReviewPanel'
import { analyzeCode } from './services/api'
import './App.css'

function App() {
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (code) => {
    try {
      setLoading(true)
      const result = await analyzeCode(code)
      setReview(result)
    } catch (error) {
      console.error('Error:', error)
      setReview('Error analyzing code. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <h1>Code Review AI</h1>
      <div className="main-content">
        <CodeEditor onSubmit={handleSubmit} />
        {loading ? (
          <div>Analyzing code...</div>
        ) : (
          <ReviewPanel review={review} />
        )}
      </div>
    </div>
  )
}

export default App
