import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb Clone created using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:text-white dark:bg-black text-black transition ease-in-out duration-150'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
