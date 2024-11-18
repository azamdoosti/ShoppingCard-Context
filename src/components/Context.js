import { createContext, useState } from "react";


export const DataContext = createContext()
export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "id": "1",
            "title": "آیفون 11",
            'images': [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg"
            ],
            "description": "جدیدترین محصول شرکت ما",
            "content": "شرکتهای زیادی در دنیا از این مدل استفاده می کنند",
            "color": ["red", "blue", "teal"],
            "price": 11000,
            "count": 1
        },
        {
            "id": "2",
            "title": "آیفون 12",
            'images': [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg"
            ],
            "description": "جدیدترین محصول شرکت ما",
            "content": "شرکتهای زیادی در دنیا از این مدل استفاده می کنند",
            "color": ["red", "blue", "teal"],
            "price": 22000,
            "count": 1
        },
        {
            "id": "3",
            "title": "آیفون 13",
            'images': [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg"
            ],
            "description": "جدیدترین محصول شرکت ما",
            "content": "شرکتهای زیادی در دنیا از این مدل استفاده می کنند",
            "color": ["red", "blue", "teal"],
            "price": 33000,
            "count": 1
        },
        {
            "id": "4",
            "title": "آیفون 14",
            'images': [
                "/images/9.jpg",
                "/images/10.jpg",
                "/images/11.jpg"
            ],
            "description": "جدیدترین محصول شرکت ما",
            "content": "شرکتهای زیادی در دنیا از این مدل استفاده می کنند",
            "color": ["red", "blue", "teal"],
            "price": 44000,
            "count": 1
        },
    ])
    const value = {
        products: [products, setProducts]
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}