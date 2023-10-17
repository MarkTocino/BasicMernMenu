'use client'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import { NextUIProvider } from '@nextui-org/react'
import Navigation from './navigation' 

const montserrat = Montserrat({ 
  weight: '500',
  subsets: ['latin'] })


export default function MenuLayout({ children }) {

  return (
    <html lang="en"> 
      <body className={montserrat.className}>
        <NextUIProvider>
        <Navigation className='w-screen h-screen'/>
          {children}
        </NextUIProvider>
      </body> 
    </html>
  )
}
