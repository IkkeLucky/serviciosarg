import Link from 'next/link'
import './globals.css'
import Providers from './providers'
import NavLink from './components/NavLink'
import MobileMenu from './components/MobileMenu'

export const metadata = {
  title: 'Service Provider App',
  description: 'Connect with local service providers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Providers>
          <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex">
                  <Link href="/" className="flex-shrink-0 flex items-center">
                    Service App
                  </Link>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink href="/">Jobs</NavLink>
                    <NavLink href="/providers">Providers</NavLink>
                    <NavLink href="/search">Search</NavLink>
                    <NavLink href="/reviews">Reviews</NavLink>
                    <NavLink href="/profile">Profile</NavLink>
                  </div>
                </div>
                <MobileMenu />
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

