/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import UserService from './../Services/UserService';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Register = () => {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [bio,setBio]=useState('')
    const [birthDate,setBirthDate]=useState('')
    const [picture,setPicture]=useState('')
    const [errors,setErrors]=useState({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      bio:bio,
      birthDate:'',
    })
  
    const formValidations = () =>{
      let status=true;
      let localErrors ={...errors}
  /* { firstname:'', est remplacer par {...errors}
        lastname:'',
        email:'',
        password:'',
        bio:bio,
        birthDate:'',}*/
      
         if (firstname=='') {
          localErrors.firstname='Firstname required';
          status=false;
         }
         if (lastname=='') {
          localErrors.lastname='Lastname required';
          status=false;
         }
         if (email=='') {
          localErrors.email=' Email required';
          status=false;
         }
         if ((password=='')||(password.length<8)) {
          localErrors.password='password required and must be min 8 caracters';
          status=false;
         }
         if (bio=='') {
          localErrors.bio='bio required';
          status=false;
         }
         if (birthDate=='') {
          localErrors.birthDate='birthDate required';
          
         }
         setErrors(localErrors);
         console.log('localErrors=',localErrors);
         return status;
    }  
/*const register = async (e)=>{
    e.preventDefault();
console.log('submited');
console.log("form data",firstname,lastname,email,password,bio,birthDate);
if(formValidations()){ // if form valide
const data ={
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
    bio:bio,
    birthDate:birthDate,
    picture:picture,
}
try{
    const response = await UserService.register(data);
    console.log('la response =',response);
    toast.success('Successfully user created!');
    setFirstname('')//pour vider le form
    setLastname('')
    setEmail('')
    setPassword('')
    setBio('')
    setBirthDate('')
}catch(err){
    console.log(err)
    toast.error(' Failed while user added !');
}
}
  else{
    console.log('form invalide')
  }
}
*/
const register = async (e) => {
  e.preventDefault();
  console.log('submitted');
  console.log("form data",firstname,lastname,email,password,bio,birthDate,picture);
  if (formValidations()) {
    const data = new FormData();
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('email', email);
    data.append('password', password);
    data.append('bio', bio);
    data.append('birthDate', birthDate);
    data.append('picture', picture);
    try {
      const response = await UserService.register(data);
      console.log('la reponse de serveur =',response);
      toast.success('Successfully user created!');
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
      setBio('')
      setBirthDate('')
      setPicture(null); // Reset picture state
    } catch (err) {
      console.log(err)
      toast.error(response.request.statusText);  }
  } else {
    console.log('form invalide')
  }
}

//const isFormEmpty = Object.values(firstname,lastname,email,password,bio,birthDate,picture).every(value => !value);
//pour ne pas passer donner vide form empty pour rendre submit disable button sign up devient inactif



return(
        <div className='register'>
        <div className='register-cover'>
        </div>
        <div className='register-content'>
        <div>
        <form className="form" onSubmit={register}>
        <div className="title">
        <div>
        welcome community to our application: social media 
        </div></div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input  className="input" value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder=" " />
          <div className="cut"></div>
          <label className="placeholder">{
            errors.firstname!=''?<div className='errors'>{errors.firstname} </div>:'firstname'
          }</label>
        </div>
        <div className="input-container ic2">
          <input className="input"value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" placeholder=" " />
          <div className="cut"></div>
          <label className="placeholder">{
            errors.lastname!=''?<div className='errors'>{errors.lastname} </div>:'lastname'
          }</label>
        </div>
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
      <div className="input-container ic2">
        <input  className="input" value={bio} onChange={(e)=>setBio(e.target.value)} type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label className="placeholder">{
          errors.bio!=''?<div className='errors'>{errors.bio} </div>:'bio'
        }</label>
      </div>
      <div className="input-container ic2">
      <label className='picture'> Picture</label>
      <input
        className="file"
        type="file"
        accept="image/*"
        placeholder=" "
        onChange={(event) => {
          const file = event.target.files[0];
          setPicture(file);
        }}
      />
    </div>
    

    <div className="input-container ic2">
    <label className="BirthDate">BirthDate</label>
        <input  className="Date" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} type="Date" placeholder=" " />
        <div className="cut cut-short"></div>
        
      </div>
      <Link to='/Login'> if you are registered go to Login</Link>
        <button className='submit'/*disabled={isFormEmpty}*/ type='submit'>Sign Up</button>
        <Toaster/>

      </form>
        </div>
        </div>
        </div>
    )
}
//disabled={isFormEmpty} ajouter dans button submit pour rendre le button inactif
export default Register;