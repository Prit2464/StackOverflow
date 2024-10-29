import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom"
import Allroutes from './Allroutes';
import './App.css';
import { fetchallusers } from './action/users';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchallquestion } from './action/question';


function App() {
  const [slideIn, setSlideIn] = useState(true)
  const dispatch = useDispatch()

  // const user = useSelector((state) => state.currentuserreducer)
  // const questions = useSelector((state) => state.questionreducer)



  useEffect(() => {
    dispatch(fetchallusers())

  }, [dispatch])


  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlideIn(false)
    }
  }, [])

  const handleSlideIN = () => {
    // if (window.innerWidth <= 768) {
    //   setSlideIn((state) => !state)
    // }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlideIn(false); // Sidebar out of view
      } else {
        setSlideIn(true); // Sidebar in view
      }
    };

    // Set initial sidebar state based on window width
    handleResize();

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }

  return (
    <div className="App">
      <Router>
        <Navbar slideIn={slideIn} handleSlideIN={handleSlideIN} />
        <Allroutes slideIn={slideIn} handleSlideIN={handleSlideIN}></Allroutes>
      </Router>
    </div>
  );
}

export default App;
