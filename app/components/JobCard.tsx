import Image from 'next/image'
import { Job } from '../types'

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden m-2">
      <Image src={job.image} alt={job.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-600 mt-2">{job.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-indigo-600 font-bold">${job.price}</span>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors">
            Contact Provider
          </button>
        </div>
      </div>
    </div>
  )
}

