import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'THShop',
  description: 'The best shop app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          <div className="wrapper">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
