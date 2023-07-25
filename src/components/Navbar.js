import React, { useState, useContext } from 'react'
import "../components/navbar.css"
import {appContext} from "../App"
const Navbar = () => {
    const {data} = useContext(appContext)

    let [button, setButton] = useState(false)
    let [click, setClick] = useState(false)
    let show = () =>{
        if(window.innerWidth<=960){
            setButton(true)
        }
        else{
            setButton(false)
        }
    }
    window.addEventListener('resize', show)
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <div className="navbar-logo">
                DoRang
            </div>
            <div className="nav-icon">
            {button && <i className={click? 'fas fa-bars' : 'fas fa-cross'} onClick={
                ()=>{
                    setClick(!click);
                }
            }></i>}
            </div>
            <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <div className="nav-link">
                    Home
                    </div>
                </li>
                <li className="nav-item"><div className="nav-link">
                    Home
                    </div></li>
                <li className="nav-item"><div className="nav-link">
                    Home
                    </div></li>{data.name}{data.relegion}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
