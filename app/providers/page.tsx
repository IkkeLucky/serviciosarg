import { Suspense } from 'react'
import ProviderList from '../components/ProviderList'

export default function ProvidersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Service Providers</h1>
      <Suspense fallback={<div>Loading providers...</div>}>
        <ProviderList />
      </Suspense>
    </div>
  )
}

