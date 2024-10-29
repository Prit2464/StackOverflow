import React from 'react'
import './rightSideBar.css'
import Widget from './Widget'
import Widgettag from './Widgettag'
const Rightsidebar = () => {
    return (
        <aside className="right-sidebar">
            <Widget />
            <Widgettag />
        </aside>
    )
}

export default Rightsidebar