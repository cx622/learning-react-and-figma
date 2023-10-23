import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './components/Navbar'
import Hook from './components/Hook'
import Section1 from './components/Section1'
import Section2 from './components/Section2'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hook />
    <Section1/>
    <Section2 message="ok"/>
  </React.StrictMode>,
)
