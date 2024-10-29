import React from 'react'
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
import RightSideBar from "../../components/RightSideBar/RightSideBar"
import HomeMainBar from "../../components/HomeMainBar/HomeMainBar"
import "../../App.css"


function Home({ slideIn }) {

    return (
        <div className="home-container-1">
            <LeftSideBar slideIn={slideIn} />
            <div className="home-container-2">
                <HomeMainBar />
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home