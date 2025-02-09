import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Nopage from "./pages/noPage/Nopage";
import Input from "./content/forminput/Input";
import ReactSnips from "./pages/reactpage/ReactSnips";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/react" element={<ReactSnips />} />
          <Route path="forms" element={<Input />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
