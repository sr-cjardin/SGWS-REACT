import React from 'react'
import { Header } from './Components/Header/Header'
import { Router } from './Pages/Router/Router'
import { Footer } from './Components/Footer/Footer'

const App = () => (
    <div>
        <Header/>
        <Router/>
        <Footer/>
    </div>
);

export { App }