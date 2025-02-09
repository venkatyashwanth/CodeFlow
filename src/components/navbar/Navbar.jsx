import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
        <nav className={`${styles.navigationbar}`}>
            <ul className={`${styles.navlist}`}>
                <li className=''>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/react"}>React</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar