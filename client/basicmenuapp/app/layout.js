import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  weight: '500',
  subsets: ['latin'] })

export const metadata = {
  title: 'Italian Menu',
  description: `Full Italian Menu Including Pizza, Bread, Pasta's`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
