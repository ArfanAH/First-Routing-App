import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import User from './User';

function App()
{
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <NavBar />
      <Home/>
      </>,
    },
    {
      path: '/aboutus',
      element: <>
        <NavBar />
        <AboutUs />
      </>
    },
    {
      path: '/user',
      element: <>
        <NavBar />
        <User useName='Arfan'/>
      </>
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
