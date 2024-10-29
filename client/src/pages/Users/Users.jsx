import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import './Users.css'
import Userslist from './Userslist'
const Users = ({ slideIn }) => {
    return (
        <div className="home-container-1">
            <LeftSideBar slideIn={slideIn} />
            <div className="home-container-2" style={{ marginTop: "30px" }}>
                <h1 style={{ fontWeight: "400" }}>Users</h1>
                <Userslist />
            </div>
        </div>
    )
}

export default Users