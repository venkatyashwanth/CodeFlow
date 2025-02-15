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
    },
    {
        id: 10,
        "code": `
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const appState = {
        phone: "+1 1234567890", 
        name: "John"
    };
    return (
        <AppContext.Provider value={appState}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider

// --------------------------------------------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/Hooks/IuseContext/context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)

// --------------------------------------------------

import React from 'react'
import Profile from './components/Profile'
import Footer from './components/Footer'

const IuseContext = () => {
    return (
        <>
            <Profile />
            <Footer/>
        </>
    )
}

export default IuseContext

// --------------------------------------------------

import React from 'react'
import Contact from './Contact'

const Profile = () => {
    return (
        <div>
            <h2>Profile</h2>
            <Contact />
        </div>
    )
}

export default Profile

// --------------------------------------------------

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {
    const appState = useContext(AppContext);
    return (
        <div>
            <h2>Contact</h2>
            <span>Phone: {appState.phone}</span>
        </div>
    )
}

export default Contact

// --------------------------------------------------

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const  appState  = useContext(AppContext)
    return (
        <div>
            <h2>Footer</h2>
            <span>Phone: {appState.phone}</span><br />
            <span>Name: {appState.name}</span>
        </div>
    )
}

export default Footer

        `
    },
    {
        id: 11,
        "code": `
import React, { useReducer } from 'react'

const IuseReducer = () => {
    const initialState = { count: 0 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': {
                return { count: state.count + 1 }
            }
            case 'decrease': {
                return { count: state.count - 1 }
            }
            case 'input': {
                return { count: action.payload }
            }
            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase</button >
            <button onClick={() => dispatch({ type: 'decrease' })}>Deccrease</button>
            <br />
            <input
                value={state.count}
                onChange={(e) => { dispatch({ type: 'input', payload: Number(e.target.value) }) }}
                type="number"
            />
        </>
    )
}

export default IuseReducer
        `
    },
    {
        id: 12,
        "code": `
        const containerRef = useRef(null);

    useLayoutEffect(() => {
        if (containerRef.current) {
            // Scroll to the bottom BEFORE the next paint
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, []);
    
    return (
        <div>
            <h2>useLayoutEffect Scroll Example</h2>
            <div
                ref={containerRef}
                style={{
                    height: "200px",
                    width: "300px",
                    overflow: "auto",
                    border: "1px solid black",
                    padding: "10px",
                }}
            >
                {Array.from({ length: 50 }, (_, i) => (
                    <p key={i}>Item {i + 1}</p>
                ))}
            </div>
        </div>
    );
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