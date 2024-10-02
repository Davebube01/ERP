import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import Solutions from './components/solutions/Solutions.jsx'
import Demo from './components/bookdemo/Demo.jsx'
import Company from './components/company/Company.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='solutions' element={<Solutions />} />
        <Route path='book-demo' element={<Demo />} />
        <Route path='company' element={<Company />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)