import { Suspense } from 'react'
import JobList from './components/JobList'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <Suspense fallback={<div>Loading jobs...</div>}>
        <JobList />
      </Suspense>
    </div>
  )
}

