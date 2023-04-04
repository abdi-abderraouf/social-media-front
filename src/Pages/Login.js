/* eslint-disable eqeqeq */
import React from 'react'
import { useState } from 'react'
import UserService from './../Services/UserService';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors,setErrors]=useState({
      email:'',
      password:'',
    })
    const formValidations = () =>{
      let status=true;
      let localErrors ={...errors}
      
         if (email =='') {
          localErrors.email=' Email required';
          status=false;
         }
         if ((password =='')||(password.length<8)) {
          localErrors.password='password required and must be min 8 caracters';
          status=false;
         }
         setErrors(localErrors);
         console.log('localErrors=',localErrors);
         return status;
    }  
const login = async (e)=>{
    e.preventDefault();
console.log('submited');
console.log("form data",email,password);
if(formValidations()){ // if form valide
const data ={
    email:email,
    password:password
}
try{
    const response = await UserService.login(data);
    console.log('la response =',response);
    toast.success('welocome to our site!');
    //pour vider le form
    setEmail('')
    setPassword('')
    //save user data to local storage
    localStorage.setItem('user_data',JSON.stringify(response.data.user));
    localStorage.setItem('token',response.data.token);

    //redirection vers home on cas de success
    navigate('/home');

}catch(err){
    console.log('voila lerreur en detail',err.response.data.message);
    toast.error(err.response.data.message);
}
}
  else{
    console.log('form invalide')
  }
}
    return(
        <>
        <div className='register'>
        <div className='register-cover'>
        </div>
        <div className='register-content'>
        <div>
        <form className="form" onSubmit={login}>
        <div className="title">
        <div>
        welcome community to our application: social media 
        </div></div>
        <div className="subtitle">Let's Signin now!</div>
        <div className="input-container ic2">
          <input  className="input"value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder=" " />
          <div className="cut cut-short"></div>
          <label className="placeholder">{
            errors.email!=''?<div className='errors'>{errors.email} </div>:'email'
          }</label>
        </div>
        <div className="input-container ic2">
        <input  className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder=" " />
        <div className="cut cut-short"></div>
        <label className="placeholder">{
          errors.password!=''?<div className='errors'>{errors.password} </div>:'password'
        }</label>
        </div>
         <button className='submit'/*disabled={isFormEmpty}*/ type='submit'>Sign In</button>
        <Toaster/>
        <Link to='/Register'> not Registered yet Go to Register </Link>
      </form>
        </div>
        </div>
        </div>
   
        </>
    )
}

export default Login