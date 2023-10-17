import React from "react"
import Link from "next/link"
export default function Home() {
  return (
    <main>
      <div className="bg-[url('../../images/little-italy.jpg')] bg-center h-screen bg-no-repeat">
        <div className="text-white flex flex-col font-bold text-center lg:text-6xl md:text-4xl sm:text-2xl justify-center items-center shadow-lg h-full">
          <h1>PASTABILITIES</h1>
          <Link className="transition ease-in-out delay-75 hover:translate-y-1 hover:scale-100 hover:bg-red-500 rounded-lg p-2" href='/appetizers'>➡MENU⬅</Link>
        </div>
      </div>
    </main>
  )
}
