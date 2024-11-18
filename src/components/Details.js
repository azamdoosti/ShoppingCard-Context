import React from 'react'
import { useContext } from "react"
import { DataContext } from "./Context"
import formatCurrency from '../util'
import { useParams } from 'react-router-dom'



function Details() {
    const { id } = useParams();
    const value = useContext(DataContext)
    const [products, setProducts] = value.products;

    // console.log(id)

    const details = products.filter((product, index) => {
        return product.id === id;
    })
    console.log(details);


    return (
        <div>
            Details
        </div>
    )
}

export default Details
