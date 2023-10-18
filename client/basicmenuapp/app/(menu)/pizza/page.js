"use client";

import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { get } from 'stream-http';


export const dynamic = 'auto',
dynamicParams = true,
revalidate = 2,
runtime = 'nodejs',
prefferedRegion = 'auto'

async function getPizzas (page) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/pizza/records?page=1&perPage=${page}`)
  const data = await res.json()
  return data?.items
}
export default function Pizza() {
  const [pizzas, setPizzas] = useState([])
  const [page, setPage] = useState(8)
  // This is for the button, Once it is clicked it, adds four more pizza's and uses page as a parameter for pagination
  async function morePizza () {
    const more = page + 4
    const newPizza = await getPizzas(more);
    setPizzas((currentPizza) => [...currentPizza, ...newPizza]);
    setPage(more)
  }
  // Note to self, First it uses useEffect to fetch the current pizza
  useEffect(() => {
    getPizzas(page).then((initialState) => setPizzas(initialState))
  },[page])
  return (
    <div>
    <h1 className='text-center lg:text-9xl md:text-6xl sm:text-5xl'>PIZZA'S</h1>
    <div className='flex flex-row flex-wrap justify-center'>{pizzas?.map((pizza) => {
      return <ListPizzas key={pizza.id} pizza={pizza}/>
  })}</div>
  <div className='flex flex-row justify-center w-full'>
  <button onClick={morePizza} className='text-center align-middle text-black hover:-translate-y-1 transition delay-75 ease-in-out bg-cyan-200 rounded-lg w-fit p-3'>CLICK FOR MORE</button>
  </div>
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