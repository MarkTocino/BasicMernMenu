"use client";

import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Pocketbase from 'pocketbase'


export const dynamic = 'auto',
dynamicParams = true,
revalidate = 2,
runtime = 'nodejs',
prefferedRegion = 'auto'

async function getPizzas (page) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/pizza/records?page=1&perPage=${page}`)
  const data = await res.json()
  // console.log(data?.items.length)
  return data?.items
}

async function getAllPizzas () {
  const pb = new Pocketbase('http://127.0.0.1:8090')
  const pizzas = await pb.collection('pizza').getFullList()
  return pizzas
}

export default function Pizza() {
  const [pizzas, setPizzas] = useState([])
  const [page, setPage] = useState(8)
  const [maxPizzas, setMaxPizzas] = useState('')
  // This is for the button, Once it is clicked it, adds four more pizza's and uses page as a parameter for pagination
  async function morePizza () {
    const more = page + 4
    const newPizza = await getPizzas(more);
    setPizzas((currentPizza) => [...currentPizza, ...newPizza]);
    setPage(more)
  }
  // Note to self, First it uses useEffect to fetch the current pizza
  useEffect(() => {
    getAllPizzas().then((pizzas) => {
      setMaxPizzas(pizzas.length)
    })
  },[])
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
  <button disabled={maxPizzas === pizzas.length} onClick={morePizza} className='text-center align-middle text-black hover:-translate-y-1 transition delay-75 ease-in-out bg-cyan-200 rounded-lg w-fit p-3'>{maxPizzas === pizzas.length ? 'No More Pizza Available 😢' : 'More Yummy Pizzas!'}</button>

  </div>
  </div>
  )
}

function ListPizzas({pizza}) {
  const { id, food_name, food_description, food_image, price} = pizza || {}
  return (
    <div className='text-center p-5 '>
    <Link href={`/pizza/${id}`}>
      <img className='h-72 w-96 lg:h-64 md:h-64 sm:h-64 transition ease-in-out delay-75 hover:-translate-y-3  rounded-3xl ' src={`${food_image}`} alt={`${food_name}`} />
      <h1 >{food_name}</h1>
      <h1>Price:${price}</h1>
    </Link>
  </div>
  )
}