const data = [
    {
        id: 1, 
        "code": `
    import { useEffect, useState } from 'react';
    import styles from "./PaginationStyles.module.css";
    
    const ProductCard = ({ image, title }) => {
        return (
            <>
                <div className={\`\${styles.prodCard}\`}>
                    <img src={image} alt={title} />
                    <span>{title}</span>
                </div>
            </>
        )
    }
    
    const page_size = 10;
    
    const Pagination_mc = () => {
        const [products, setProducts] = useState([]);
        const [currentPg, setCurrentPg] = useState(0);
    
        const fetchData = async () => {
            const data = await fetch("https://dummyjson.com/products?limit=194");
            const json = await data.json();
            setProducts(json.products);
        }
    
        useEffect(() => {
            fetchData();
        }, [])
    
        const total_products = products.length;
        const noOfPages = Math.ceil(total_products / page_size);
        const start = currentPg * page_size;
        const end = start + page_size;
        const handlePgChange = (n) => {
            setCurrentPg(n)
        }
    
        const goToNext = () => {
            setCurrentPg(prev => prev + 1)
        }
        const goToPrev = () => {
            setCurrentPg(prev => prev - 1)
        }
    
        return (
            <>
                {!products.length ? <h1>No Products</h1> : (
                    <div>
                        <h1>Pagination</h1>
                        <div>
                            <button disabled={currentPg === 0} className={\`\${styles.pgNo}\`} onClick={() => goToPrev()}>◀️</button>
                            {[...Array(noOfPages).keys()].map((n) => (
                                <button className={\`\${styles.pgNo} \${n === currentPg ? \`\${styles.active}\` : ''}\`} key={n} onClick={() => handlePgChange(n)}>
                                    {n}
                                </button>
                            ))}
                            <button disabled={currentPg === noOfPages - 1} className={\`\${styles.pgNo}\`} onClick={() => goToNext()}>▶️</button>
                        </div>
                        <div className={\`\${styles.wrapper}\`}>
                            {
                                products.slice(start, end).map((product) =>
                                    <ProductCard key={product.id} image={product.thumbnail} title={product.title} />
                                )
                            }
                        </div>
                    </div>
                )}
            </>
        )
    }
    
    export default Pagination_mc;
        `
    },
    {
        id: 13,
        'code':`
import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const Icustomhook = () => {
    const [name, setName] = UseLocalStorage('username', '');
    const [id, setId] = UseLocalStorage('userId', '');
    return (
        <>
            <input type="text" placeholder='Enter your name' value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h2>Hello {name}!</h2>
            <input type="text" placeholder='Enter your Id' value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <h2>My Id: {id}!</h2>
        </>
    )
}

export default Icustomhook

// --------------------------------------------------

import React, { useEffect, useState } from 'react'

const UseLocalStorage = (key, initialValue) => {
    const [name, setName] = useState(
        localStorage.getItem(key) ?
            localStorage.getItem(key) : initialValue
    );

    useEffect(() => {
        localStorage.setItem(key, name)
    }, [name, key])
    return [name, setName]
}

export default UseLocalStorage

        `
    }
]

export default data;
