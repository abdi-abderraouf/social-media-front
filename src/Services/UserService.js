import axios from 'axios';
const UserService={}
UserService.register=function(data){
return axios.post('http://www.localhost:5000/users/signup',data)
//axios.post('https://backendsocialmedia.onrender.com/users/signup',data)
}
UserService.login=function(data){
    return axios.post('http://www.localhost:5000/users/signin',data)
    //axios.post('https://backendsocialmedia.onrender.com/users/signin',data)
    }
export default UserService;