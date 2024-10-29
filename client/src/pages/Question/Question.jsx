import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Rightsidebar from "../../components/RightSideBar/RightSideBar"
import Homemainbar from '../../components/HomeMainBar/HomeMainBar'
import '../../App.css'
const Question = ({ slideIn }) => {


    return (
        <div className="home-container-1">
            <LeftSideBar slideIn={slideIn} />
            <div className="home-container-2">
                <Homemainbar />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Question