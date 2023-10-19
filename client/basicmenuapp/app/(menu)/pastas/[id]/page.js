import React from "react";
async function getPasta(pastaId) {
    const res = await fetch (`https://muddy-silence-8178.fly.dev/api/collections/pastas/records/${pastaId}`)
    const data = await res.json()
    return data
}
export default async function PastaPage({params}) {
    const pasta = await getPasta(params.id);
    return (
        <div className="flex flex-col flex-wrap justify-center w-full items-center">
            <img className="h-96" src={`${pasta.food_image}`}></img>
            <h1>{pasta.food_name}</h1>
        <div className="text-center xl:w-1/2 lg:w-3/4 md:w-3/4">
            <h1>Description: {pasta.food_description}</h1>
            <h1>Price: ${pasta.price}</h1>
        </div>
        </div>
    )
}