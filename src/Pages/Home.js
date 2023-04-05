
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



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
    },[])
    return(
        <>
            <h1> hello {connectedUser.firstname+'    '+connectedUser.lastname} </h1>
            


        </>
    )
}

export default Home; 