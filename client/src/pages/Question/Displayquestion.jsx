import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Rightsidebar from '../../components/RightSideBar/RightSideBar'
import Qustiondetails from './Questiondetails'
const Displayquestion = ({ slideIn }) => {
    return (
        <div className="home-container-1">
            <LeftSideBar slideIn={slideIn} />
            <div className="home-container-2">
                <Qustiondetails />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Displayquestion