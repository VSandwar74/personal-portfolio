import './globals.css'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Vishakh Sandwar Portfolio Site',
  description: 'Welcome to my website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>  
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        {/* <link rel="manifest" href="/site.webmanifest"/> */}
        {/* <link rel='icon' href="/vs-real.svg"/> */}
        {/* <link
          rel="icon"
          href="/../public/vs-real.svg"
          type="image"
          sizes="any"
        /> */}
      </head>
      <body className={playfairDisplay.className}>
        {children}
      </body>
    </html>
  )
}
{/* <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/> */}