import React from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import  { Toaster } from 'react-hot-toast';

function App() {

  return(
    <div>
      <Navbar/>
      <Footer/>
      <Toaster 
                toastOptions={{
                success: {
                style: {
                background: 'white',
                padding: '10px 20px',
                }
            },
        }}
        />
    </div>
  )
  
}

export default App;
