import React from 'react'
import Pocketbase from 'pocketbase'
import Link from 'next/link'

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'

async function getAppetizers () {
  const pb = new Pocketbase('https://muddy-silence-8178.fly.dev')
  const resultAppetizers = await pb.collection('appetizers').getFullList()
  return resultAppetizers
}

export default async function AppetizersPage() {
  const appetizers = await getAppetizers();
  return (
    <div>
      <h1 className='text-center lg:text-9xl md:text-6xl sm:text-5xl'>APPETIZERS</h1>
      <div className='flex flex-row flex-wrap justify-center'>{appetizers?.map((appetizer) => {
        return <ListAppetizers key={appetizer.id} appetizer={appetizer}/>
    })}</div>
    </div>
  )
}

function ListAppetizers({ appetizer }) {
  const { id, food_name, food_image, price} = appetizer || {}
  return (
    <div className='text-center p-5'>
      <Link href={`/appetizers/${id}`}>
        <img className='h-72 w-96 lg:h-64 md:h-64 sm:h-64 transition ease-in-out delay-75 hover:-translate-y-3 rounded-3xl' src={`${food_image}`} alt={`${food_name}`} />
        <h1>{food_name}</h1>
        <h1>Price:${price}</h1>
      </Link>
    </div>
  )
}