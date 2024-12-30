'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import JobCard from './JobCard'
import { Job } from '../types'

// This is a mock function to simulate fetching jobs from an API
async function fetchJobs({ pageParam = 0 }): Promise<{ jobs: Job[], nextCursor: number | null }> {
  // In a real app, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
  
  const jobs: Job[] = Array.from({ length: 10 }, (_, i) => ({
    id: `job-${pageParam * 10 + i + 1}`,
    title: `Job ${pageParam * 10 + i + 1}`,
    description: 'This is a job description. It would contain details about the job.',
    price: Math.floor(Math.random() * 500) + 50,
    image: `/placeholder.svg?height=200&width=400&text=Job+${pageParam * 10 + i + 1}`
  }))

  return {
    jobs,
    nextCursor: pageParam < 5 ? pageParam + 1 : null // Limit to 5 pages for this example
  }
}

export default function JobList() {
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error fetching jobs</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.pages.map((page) =>
        page.jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
      <div ref={ref}>
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </div>
    </div>
  )
}

