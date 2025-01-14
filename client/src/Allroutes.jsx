import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Askquestion from './pages/Askquestion/Askquestion'
import Auth from './pages/Auth/Auth'
import Question from './pages/Question/Question'
import Displayquestion from "./pages/Question/Displayquestion"
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import Userprofile from './pages/Userprofile/Userprofile'

function Allroutes({ slideIn, handleSlideIN }) {
    return (
        <Routes>
            <Route path='/' element={<Home slideIn={slideIn} handleSlideIN={handleSlideIN} />} />
            <Route path='/askquestion' element={<Askquestion />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Question' element={<Question slideIn={slideIn} handleSlideIN={handleSlideIN} />} />
            <Route path='/Question/:id' element={<Displayquestion slideIn={slideIn} handleSlideIN={handleSlideIN} />} />
            <Route path='/Tags' element={<Tags slideIn={slideIn} handleSlideIN={handleSlideIN} />} />
            <Route path='/Users' element={<Users slideIn={slideIn} handleSlideIN={handleSlideIN} />} />
            <Route path='/Users/:id' element={<Userprofile slideIn={slideIn} handleSlideIN={handleSlideIN} />} />

        </Routes>
    )
}

export default Allroutes