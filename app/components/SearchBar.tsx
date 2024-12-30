export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto relative z-10">
      <form className="relative">
        <input
          type="search"
          className="w-full p-4 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search for jobs or providers..."
        />
        <button
          type="submit"
          className="absolute right-3 top-3 bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </form>
    </div>
  )
}

