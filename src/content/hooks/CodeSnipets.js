const data = [
    {
        "id": 1,
        "code": `
const [color,setColor] = useState("Red");

const changeColor = () => {
    setColor('Blue');
}

return (
    <div>
        <h1>My Favorite Color: {color}</h1>
        <button onClick={changeColor}>Blue</button>
    </div>
)
`
    },
    {
        "id": 2,
        "code": `
const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red"
})

const changeColor = () => {
    setCar(prev => ({ ...prev, color: "Blue" }))
}

return (
    <>
        <h1>My {car.brand}</h1>
        <h2>It is a {car.color} color {car.model} from {car.year}</h2>
        <button onClick={changeColor}>Blue</button>
    </>
)
`
    },
    {
        "id": 3,
        "code": `
const [count, setCount] = useState(0);

const increaseCount = () => {
    setCount(count => count + 4)
}

return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase 4</button>
    </>
)
`
    },
    {
        "id": 4,
        "code": `
const [count, setCount] = useState(0);

useEffect(() => {
    setTimeout(() => {
        setCount(count => count + 1)
    }, 2000)
}, [])

return (
    <>
        <h1>I've rendered {count} times!</h1>
    </>
)
`
    },
    {
        "id": 5,
        "code": `
const [count, setCount] = useState(0);
const [render, setRender] = useState(0);

useEffect(() => {
    setRender(render => render + 1)
}, [count])

const increaseCount = () => {
    setCount(count => count + 1)
}

return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase</button>
        <h1>I've Rendered {render} times!</h1>
    </>
)
`
    },
    {
        "id": 6,
        "code": `
const [value, setValue] = useState(0);
const count = useRef(0);

useEffect(() => {
    count.current = count.current + 1;
}, [value])

return (
    <>
        <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
        <h1>{value}</h1>
        <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
        <h1>Render Count: {count.current}</h1>
    </>
)
`
    },
    {
        "id": 7,
        "code": `
const inputElem = useRef();
const btnClicked = () => {
    inputElem.current.style.background = "blue";
}

return (
    <>
        <input type="text" ref={inputElem} />
        <button onClick={btnClicked}>Click Here</button>
    </>
)
`
    },
    {
        "id": 8,
        "code": `
const [number, setNumber] = useState(0);
const [counter, setCounter] = useState(0);

function cubeNum(num) {
    console.log('Calculation Done!');
    return Math.pow(num, 3)
}

const result = useMemo(() => cubeNum(number), [number])

return (
    <>
        <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
        <h1>Cube of the number: {result}</h1>
        <button onClick={() => { setCounter(counter + 1) }}>Counter++</button>
        <h1>Counter: {counter}</h1>
    </>
)
`
    },
    {
        "id": 9,
        "code": `
import React from "react"

const Header = () => {
    console.log("Header Rendered")
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}

export default React.memo(Header) 

// --------------------------------------------------

import React, { useCallback, useState } from 'react';
import Header from './Header';

const IuseCallback = () => {
    const [count, setCount] = useState(0);
    const newFn = useCallback(() => {}, [])
    return (
        <>
            <Header newFn={newFn} />
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
        </>
    )
}

export default IuseCallback
`
    }
]


export default data;