const data = [
    {
        "code": `
const [color,setColor] =  useState("Red");

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
        "code": `
const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red"
})

const changeColor = () => {
    setCar(prev=>({...prev,color: "Blue"}))
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
        "code": `
const [count, setCount] = useState(0);

const increaseCount = () => {
    setCount(count => count+4)
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
        "code": `
const [count,setCount] = useState(0);

useEffect(() => {
    setTimeout(() => {
            setCount(count => count+1)
    },2000)
},[])

return (
    <>
        <h1>I've rendered {count} times!</h1>
    </>
)
        `
    },
    {
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
    }
]

export default data;