import React from "react";
async function getAppetizer(appetizerId) {
    const res = await fetch (`https://muddy-silence-8178.fly.dev/api/collections/appetizers/records/${appetizerId}`)
    const data = await res.json()
    return data
}
// params is the ID that is passed for the getAppetizer at line 2
export default async function AppetizerPage({params}) {
    const appetizer = await getAppetizer(params.id);
    return (
<div className="flex flex-col flex-wrap justify-center w-full items-center">
        <img className="h-96" src={`${appetizer.food_image}`}></img>
        <h1>{appetizer.food_name}</h1>
    <div className="text-center xl:w-1/2 lg:w-3/4 md:w-3/4">
        <h1>Description: {appetizer.food_description}</h1>
        <h1>Price: ${appetizer.price}</h1>
    </div>
</div>
    )
}