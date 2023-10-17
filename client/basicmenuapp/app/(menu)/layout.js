import { Montserrat } from 'next/font/google'
import '../globals.css'

const montserrat = Montserrat({ 
  weight: '500',
  subsets: ['latin'] })


export default function MenuLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
