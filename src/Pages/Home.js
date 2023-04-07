/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';



const Home = () => {
    const [connectedUser,setConnectedUser]=useState({});
    const navigate=useNavigate();

   const getConnectedUserData=()=>{
       setConnectedUser(JSON.parse(localStorage.getItem('user_data')))
       if(localStorage.getItem('user_data')===undefined){//user not connected
        //redirection vers login
           navigate('/Login');
       }
    };

    useEffect(()=>{
        
        getConnectedUserData()
    },[getConnectedUserData])
    return(
        <>
        <Navbar/>
            <h1> hello {connectedUser.firstname+'    '+connectedUser.lastname} </h1>
            


        </>
    )
}

export default Home; 