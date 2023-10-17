import React from 'react'
import Pocketbase from 'pocketbase'
import Link from 'next/link'


export const dynamic = 'auto',
dynamicParams = true,
revalidate = 2,
runtime = 'nodejs',
prefferedRegion = 'auto'

async function getPizzas () {
  let numberOfItems = 8
  async function handleMore() {
    numberOfItems += 4
  }
  const res = await fetch(`http://127.0.0.1:8090/api/collections/pizza/records?page=1&perPage=${numberOfItems}`)
  const data = await res.json()
  return data?.items 
}

export default async function Pizza() {
  
  const pizzas = await getPizzas();
  return (
    <div>
    <h1 className='text-center lg:text-9xl md:text-6xl sm:text-5xl'>PIZZA'S</h1>
    <div className='flex flex-row flex-wrap justify-center'>{pizzas?.map((pizza) => {
      return <ListPizzas key={pizza.id} pizza={pizza}/>
  })}</div>
  <button className='text-center w-screen'>MORE</button>
  </div>
  )
}

function ListPizzas({pizza}) {
  const { id, food_name, food_description, food_image, price} = pizza || {}
  return (
    <div className='text-center p-5'>
    <Link href={`/pizza/${id}`}>
      <img className='h-72 w-96 lg:h-64 md:h-64 sm:h-64' src={`${food_image}`} alt={`${food_name}`} />
      <h1>{food_name}</h1>
      <h1>Price:${price}</h1>
    </Link>
    
  </div>
  )
}