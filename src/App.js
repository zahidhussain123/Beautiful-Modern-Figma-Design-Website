import "./App.css"
import {  Cta , Navbar , Brand } from './components';
import {Blog , Features , Footer , Header , Possibility , WhatGPT } from "./containers"
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
