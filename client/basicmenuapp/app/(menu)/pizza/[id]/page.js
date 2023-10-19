import React from "react";
async function getPizzas(pizzaId) {
    const res = await fetch (`https://muddy-silence-8178.fly.dev/api/collections/pizza/records/${pizzaId}`)
    const data = await res.json()
    return data
}
export default async function PizzaPage({params}) {
    const pizza = await getPizzas(params.id);
    return (
    <div className="flex flex-col flex-wrap justify-center items-center">
        <img className="h-96" src={`${pizza.food_image}`}></img>
        <h1>{pizza.food_name}</h1>
        <div className="text-center xl:w-1/2 lg:w-3/4 md:w-3/4">
            <h1>Description: {pizza.food_description}</h1>
            <h1>Price: ${pizza.price}</h1>
        </div>
    </div>
    )
}