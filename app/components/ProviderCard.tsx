import Image from 'next/image'
import { Provider } from '../types'

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden m-2">
      <Image src={provider.image} alt={provider.name} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{provider.name}</h3>
        <p className="text-gray-600 mt-2">{provider.profession}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-indigo-600 font-bold">${provider.hourlyRate}/hr</span>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

