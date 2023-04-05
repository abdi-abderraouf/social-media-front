import {createBrowserRouter} from 'react-router-dom';
import Register from '../Pages/Register';
import Login from '../Pages/Login'
import Liste from '../Pages/Liste';
import HomePage from '../Pages/HomePage';
import PageNotFound from '../Pages/PageNotFound';
import Home from '../Pages/Home'

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>,
   errorElement: <PageNotFound/>,
  },
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>},
  {path: '/home', element: <Home/>},
  {path: '/liste', element: <Liste/>},
]);

export default router;
