import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
export default function App(){
    const cards= data.map(card=>{
        // console.log(card)
        return (
            <Card card={card} />
        )
    })
    return(
        <div>
            <Header />
            {cards}
        </div>
    )
}