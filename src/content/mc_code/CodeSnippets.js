const data = [
    {
        "id": 1,
        "code": "import { useEffect, useState } from 'react';\nimport styles from \"./PaginationStyles.module.css\";\n\nconst ProductCard = ({ image, title }) => {\n    return (\n        <>\n            <div className={`${styles.prodCard}`}>\n                <img src={image} alt={title} />\n                <span>{title}</span>\n            </div>\n        </>\n    )\n}\n\nconst page_size = 10;\n\nconst Pagination_mc = () => {\n    const [products, setProducts] = useState([]);\n    const [currentPg, setCurrentPg] = useState(0);\n\n    const fetchData = async () => {\n        const data = await fetch(\"https://dummyjson.com/products?limit=194\");\n        const json = await data.json();\n        setProducts(json.products);\n    }\n\n    useEffect(() => {\n        fetchData();\n    }, [])\n\n    const total_products = products.length;\n    const noOfPages = Math.ceil(total_products / page_size);\n    const start = currentPg * page_size;\n    const end = start + page_size;\n    const handlePgChange = (n) => {\n        setCurrentPg(n)\n    }\n\n    const goToNext = () => {\n        setCurrentPg(prev => prev + 1)\n    }\n    const goToPrev = () => {\n        setCurrentPg(prev => prev - 1)\n    }\n\n    return (\n        <>\n            {!products.length ? <h1>No Products</h1> : (\n                <div>\n                    <h1>Pagination</h1>\n                    <div>\n                        <button disabled={currentPg === 0} className={`${styles.pgNo}`} onClick={() => goToPrev()}>◀️</button>\n                        {[...Array(noOfPages).keys()].map((n) => (\n                            <button className={`${styles.pgNo} ${n === currentPg ? `${styles.active}` : ''}`} key={n} onClick={() => handlePgChange(n)}>\n                                {n}\n                            </button>\n                        ))}\n                        <button disabled={currentPg === noOfPages - 1} className={`${styles.pgNo}`} onClick={() => goToNext()}>▶️</button>\n                    </div>\n                    <div className={`${styles.wrapper}`}>\n                        {\n                            products.slice(start, end).map((product) =>\n                                <ProductCard key={product.id} image={product.thumbnail} title={product.title} />\n                            )\n                        }\n                    </div>\n                </div>\n            )}\n        </>\n    )\n}\n\nexport default Pagination_mc;"
      },
      {
        "id": 2,
        "code": "import React, { useEffect, useState } from 'react';\nimport styles from './AutocompleteSearch.styles.module.css';\n\nconst AutocompleteSearch = () => {\n    const [input, setInput] = useState(\"\")\n    const [results, setResults] = useState([]);\n    const [showResults, setShowResults] = useState(false);\n    const [cache,setCache] = useState({});\n\n    const fetchData = async () => {\n        if(cache[input]){\n            console.log(\"Cache returned: \",input)\n            setResults(cache[input]);\n            return;\n        }\n        console.log(\"API Call \",input)\n        const data = await fetch(\"https://dummyjson.com/recipes/search?q=\" + input);\n        const json = await data.json();\n        setResults(json?.recipes);\n        setCache((prev) => ({...prev, [input]: json?.recipes}))\n    }\n    useEffect(() => {\n        const timer = setTimeout(fetchData, 300)\n        return () => {\n            clearTimeout(timer)\n        }\n    }, [input])\n    return (\n        <div>\n            <h1>Autocomplete Search</h1>\n            <input type=\"text\" className={`${styles.searchInput}`} \n            value={input} \n            onChange={(e) => setInput(e.target.value)} \n            onFocus={() => setShowResults(true)}\n            onBlur={() => setShowResults(false)}\n            />\n            {showResults &&\n                <div className={`${styles.resultsContainer}`}>\n                    {results.map((r) => (\n                        <span key={r.id} className={styles.result}>{r.name}</span>\n                    ))}\n                </div>\n            }\n        </div>\n    )\n}\n\nexport default AutocompleteSearch;"
      }
]

export default data;