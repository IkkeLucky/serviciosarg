'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import ProviderCard from './ProviderCard'
import { Provider } from '../types'

async function fetchProviders({ pageParam = 0 }): Promise<{ providers: Provider[], nextCursor: number | null }> {
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
  
  const providers: Provider[] = Array.from({ length: 10 }, (_, i) => ({
    id: `provider-${pageParam * 10 + i + 1}`,
    name: `Provider ${pageParam * 10 + i + 1}`,
    profession: ['Electrician', 'Plumber', 'Carpenter', 'Painter'][Math.floor(Math.random() * 4)],
    hourlyRate: Math.floor(Math.random() * 100) + 50,
    image: `/placeholder.svg?height=200&width=400&text=Provider+${pageParam * 10 + i + 1}`
  }))

  return {
    providers,
    nextCursor: pageParam < 5 ? pageParam + 1 : null // Limit to 5 pages for this example
  }
}

export default function ProviderList() {
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['providers'],
    queryFn: fetchProviders,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error fetching providers</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.pages.map((page) =>
        page.providers.map((provider) => <ProviderCard key={provider.id} provider={provider} />)
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

