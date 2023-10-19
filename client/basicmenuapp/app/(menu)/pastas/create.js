"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function CreatePasta() {
    const [food_name, setFood_Name] = useState('')
    const [food_description, setFood_Description] = useState('')
    const [food_image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const router = useRouter()
    const createFood = async(e) => {
        e.preventDefault()
        await fetch('https://muddy-silence-8178.fly.dev/api/collections/pastas/records',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                food_name,
                food_description,
                price,
                food_image,
            }),
        })
        setFood_Name('')
        setFood_Description('')
        setImage('')
        setPrice('')

        router.refresh()
    }
    return (
    <div className='w-full flex justify-center p-2'>
        <form className='rounded-2xl border-black border-2 xl:w-2/5 lg:w-2/5 md:w-2/5 justify-center items-center p-2' onSubmit={createFood}>
            <h1 className='text-center'>Create A New Pasta!</h1>
            <div className='flex flex-col justify-center items-center p-2 text-lg sm:text-base'>
                <input
                type='text'
                placeholder='Pasta Name'
                value={food_name}
                onChange={(e) => setFood_Name(e.target.value)}
                />
                <input
                type='text'
                placeholder='Pasta Description'
                value={food_description}
                onChange={(e) => setFood_Description(e.target.value)}
                />
                <input
                type='number'
                placeholder='Pasta Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <input
                type='url'
                placeholder='Image URL'
                value={food_image}
                onChange={(e) => setImage(e.target.value)}
                />
            <button className='text-black hover:-translate-y-1 transition delay-75 ease-in-out bg-cyan-200 rounded-lg p-2'>Click to Create Pasta!</button>
            </div>
        </form>
    </div>
    )

}
