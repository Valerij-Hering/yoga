import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Loader from './Loader';



function App() {

  const [loading, setLoading] = useState(true);



  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2300)
  },[])

  if (loading ){
    return <Loader/>
   }
  

  return(
    <div>
      <Navbar/>
      <Footer/>
    </div>
  )
  
}

export default App;
