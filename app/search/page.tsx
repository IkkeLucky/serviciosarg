import SearchBar from '../components/SearchBar'
import ShowcaseCard from '../components/ShowcaseCard'

const showcaseWorks = [
  { id: 1, imageUrl: '/placeholder.svg?height=300&width=400&text=Kitchen+Remodel', title: 'Kitchen Remodel' },
  { id: 2, imageUrl: '/placeholder.svg?height=300&width=400&text=Electrical+Wiring', title: 'Electrical Wiring' },
  { id: 3, imageUrl: '/placeholder.svg?height=300&width=400&text=Bathroom+Renovation', title: 'Bathroom Renovation' },
  { id: 4, imageUrl: '/placeholder.svg?height=300&width=400&text=Landscaping', title: 'Landscaping' },
  { id: 5, imageUrl: '/placeholder.svg?height=300&width=400&text=Roof+Repair', title: 'Roof Repair' },
  { id: 6, imageUrl: '/placeholder.svg?height=300&width=400&text=Interior+Painting', title: 'Interior Painting' },
]

export default function SearchPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-6">Search Jobs and Providers</h1>
      
      <SearchBar />
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Some of Our Best Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-2">
          {showcaseWorks.map((work) => (
            <ShowcaseCard key={work.id} imageUrl={work.imageUrl} title={work.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

