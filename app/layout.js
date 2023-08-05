import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vishakh Sandwar Portfolio Site',
  description: 'Welcome to my website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>  
        {/* <link rel='icon' href="/vs-real.svg"/> */}
        <link
          rel="icon"
          href="/../public/vs-real.svg"
          type="image"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
<link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>