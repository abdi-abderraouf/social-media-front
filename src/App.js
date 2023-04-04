import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Liste from './Pages/Liste';
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:<div>Home Page</div>},
    {path: '/login', element:<Login/>},
    {path: '/register', element:<Register/>},
    {path: '/home', element:<Home/>},
    {path: '/liste', element:<Liste/>},
  ])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
