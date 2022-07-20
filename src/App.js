import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Routes, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Photos />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </div>
    )
}

export default App