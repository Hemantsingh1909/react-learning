import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from'react-router-dom';
import Home from './components/Home/Home';
import About from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Layout from './Layout';


const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/> 
      },
      {
        path: 'contact',
        element: <Contact/> 
      },
      {
        path: 'blog',
        element: <Blog/> 
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
