import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb Clone created using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:text-white dark:bg-[#000000] text-black transition ease-in-out duration-150'>
        <Providers>
          <div className='flex flex-wrap'>
            <Header />
            <Navbar />
            <SearchBox />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
