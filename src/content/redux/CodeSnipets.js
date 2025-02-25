const data = [
    {
        id: 1,
        "code": `
        import { createStore } from 'redux'

function App() {

  const ADD_TASK = "task/add";
  const DELETE_TASK = "task/delete";

  const initialState = {
    task: [],
    isLoading: false
  };


  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          task: [...state.task, action.payload]
        }

      case DELETE_TASK:
        const updatedTask = state.task.filter((curTask, index) => {
          return index !== action.payload;
        })
        return {
          ...state,
          task: updatedTask
        }

      default:
        return state;
    }
  }

  // Step2: Create the Redux store using the reducer. 
  const store = createStore(taskReducer);
  console.log(store)

  // Step3: Log the Initial State
  console.log("Initial State: ", store.getState())

  // Step4: Dispatch an action to add a task 
  store.dispatch({type: ADD_TASK, payload: "Buy Coffee"})
  console.log("Updated State: ", store.getState())
 
  store.dispatch({type: ADD_TASK, payload: "Buy Biscuit"})
  console.log("Updated State: ", store.getState())

  // Step5: Dispatch an action to delete a task 
  store.dispatch({type: DELETE_TASK, payload: 0})
  console.log("Updated State after deleting: ", store.getState())
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App

        `
    },
    {
        id: 2,
        "code": `
        import { createStore } from 'redux'

function App() {

  const ADD_TASK = "task/add";
  const DELETE_TASK = "task/delete";

  const initialState = {
    task: [],
    isLoading: false
  };


  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          task: [...state.task, action.payload]
        }

      case DELETE_TASK:
        const updatedTask = state.task.filter((curTask, index) => {
          return index !== action.payload;
        })
        return {
          ...state,
          task: updatedTask
        }

      default:
        return state;
    }
  }

  // Step2: Create the Redux store using the reducer. 
  const store = createStore(taskReducer);

  // Create Action Creator
  const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
  }
  const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
  }

  // using action creators
  store.dispatch(addTask("Buy Chocoloate"));
  console.log(store.getState());

  store.dispatch(addTask("Buy Mango"));
  console.log(store.getState());

  store.dispatch(deleteTask(1))
  console.log(store.getState());

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App

        `
    },
    {
        id: 3,
        "code": `
        // main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
// import "./store/Store.js";
import { Provider } from 'react-redux';
import { store } from './store/Store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// Todo.jsx
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { addTask, deleteTask } from '../store/Store';

const Todo = () => {
    const [task, setTask] = useState("");
    const tasks = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task));
        return setTask('')
    }

    const handleTaskDelete = (id) => {
        return dispatch(deleteTask(id))
    }
    return (
        <>
            <div className='container'>
                <div className='todo-app'>
                    <h1>
                        <FaPen />
                        To-do List:
                    </h1>
                    <div className='row'>
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" id="input-box" placeholder='Add a new task'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                            <button>Add Task</button>
                        </form>
                    </div>
                    <ul id="list-container">
                        {
                            tasks.map((curTask, index) => {
                                return <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <p>{index}: {curTask}</p>
                                    <div>
                                        <MdDelete
                                            onClick={() => handleTaskDelete(index)}
                                        />
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo

// Store.js
import { createStore } from 'redux'

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task: [],
    isLoading: false
};


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                task: updatedTask
            }

        default:
            return state;
    }
}

// Step2: Create the Redux store using the reducer. 
export const store = createStore(taskReducer);

// Create Action Creator
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}
export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

        `
    },
    {
      id: 4,
      'code': `
      import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

const initialState = {
    task: [],
    isLoading: false
};


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                task: updatedTask
            }
        case FETCH_TASK:
            return {
                ...state,
                task: [...state.task, ...action.payload]
            }

        default:
            return state;
    }
}

// Step2: Create the Redux store using the reducer. 
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)));

// Create Action Creator
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}
export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json();
            dispatch({ type: FETCH_TASK, payload: task.map((curTask) => curTask.title) })
        } catch (error) {
            console.log(error)
        }
    }
}

// Todo.jsx

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { addTask, deleteTask, fetchTask } from '../store/Store';

const Todo = () => {
    const [task, setTask] = useState("");
    const tasks = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task));
        return setTask('')
    }

    const handleTaskDelete = (id) => {
        return dispatch(deleteTask(id))
    }

    const handleFetchTasks = () => {
        // Fetch Tasks from API
        return dispatch(fetchTask())
    }
    return (
        <>
            <div className='container'>
                <div className='todo-app'>
                    <h1>
                        <FaPen />
                        To-do List:
                    </h1>
                    <div className='row'>
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" id="input-box" placeholder='Add a new task'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                            <button>Add Task</button>
                        </form>
                    </div>
                    <button onClick={handleFetchTasks}>Fetch Tasks</button>
                    <ul id="list-container">
                        {
                            tasks.map((curTask, index) => {
                                return <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <p>{index}: {curTask}</p>
                                    <div>
                                        <MdDelete
                                            onClick={() => handleTaskDelete(index)}
                                        />
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo
      `
    }
]

export default data;
