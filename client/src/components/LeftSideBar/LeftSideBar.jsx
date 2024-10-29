import React from 'react'
import "./leftsidebar.css"
import { NavLink } from "react-router-dom"
import Globe from "../../assets/Globe.svg"

function LeftSideBar({ slideIn }) {
    const slideInStyle = {
        transform: "translateX(0%)",
        // display: "block"
    };
    const slideOutStyle = {
        transform: "translateX(-100%)",
        // display: "none"
    }

    return (
        <div className="left-sidebar" style={slideIn ? slideInStyle : slideOutStyle}>
            <nav className='side-nav'>
                <button className="nav-btnn">
                    <NavLink to='/' className="side-nav-links" activeclassname='active'>
                        <p>Home</p>
                    </NavLink>
                </button>
                <div className="side-nav-div">
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    <button className='nav-btnn'>
                        <NavLink to='/Question' className='side-nav-links' activeclassname='active'>
                            <img src={Globe} alt="globe" />
                            <p style={{ paddingLeft: '10px' }}>Questions</p>
                        </NavLink>
                    </button>
                    <button className='nav-btnn'>
                        <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                            <p >Tags</p>
                        </NavLink>
                    </button>
                    <button className='nav-btnn'>
                        <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                            <p >Users</p>
                        </NavLink>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar