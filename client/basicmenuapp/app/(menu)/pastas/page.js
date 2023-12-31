import React from 'react'
import Pocketbase from 'pocketbase'
import Link from 'next/link'
import CreatePasta from './create'
export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'

async function getPastas () {
  const pb = new Pocketbase('https://muddy-silence-8178.fly.dev')
  const resultPastas = await pb.collection('pastas').getFullList()
  return resultPastas
  
}

export default async function Pastas() {
  const pastas = await getPastas();
  return (
    <div>
    <h1 className='text-center lg:text-9xl md:text-6xl sm:text-5xl'>PASTAS</h1>
    <div className='flex flex-row flex-wrap justify-center'>{pastas?.map((pasta) => {
      return <ListPastas key={pasta.id} pasta={pasta}/>
  })}</div>
  <CreatePasta />
  </div>
  )
}

function ListPastas({ pasta }) {
  const { id, food_name, food_description, food_image, price} = pasta || {}
  return (
    <div className='text-center p-5'>
      <Link href={`/pastas/${id}`}>
        <img className='h-72 w-96 lg:h-64 md:h-64 sm:h-64 transition ease-in-out delay-75 hover:-translate-y-3 rounded-3xl' src={`${food_image}`} alt={`${food_name}`} />
        <h1>{food_name}</h1>
        <h1>Price:${price}</h1>
      </Link>
    </div>
  )
}