'use client'

import { useState } from 'react'
import ReviewCard from '../components/ReviewCard'
import ReviewComment from '../components/ReviewComment'

const providers = [
  { id: '1', name: 'John Doe', profession: 'Electrician', rating: 4.5, image: '/placeholder.svg?height=200&width=400&text=John+Doe' },
  { id: '2', name: 'Jane Smith', profession: 'Plumber', rating: 4.8, image: '/placeholder.svg?height=200&width=400&text=Jane+Smith' },
  { id: '3', name: 'Bob Johnson', profession: 'Carpenter', rating: 4.2, image: '/placeholder.svg?height=200&width=400&text=Bob+Johnson' },
]

const initialComments = [
  { id: '1', author: 'Alice', rating: 5, comment: 'Great service! Very professional.', date: '2023-05-15' },
  { id: '2', author: 'Charlie', rating: 4, comment: 'Good work, but a bit pricey.', date: '2023-05-10' },
  { id: '3', author: 'Eve', rating: 5, comment: 'Excellent job! Highly recommended.', date: '2023-05-05' },
]

export default function ReviewsPage() {
  const [comments, setComments] = useState(initialComments)

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-6">Service Provider Reviews</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <ReviewCard key={provider.id} {...provider} />
        ))}
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
        {comments.map((comment) => (
          <ReviewComment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  )
}

