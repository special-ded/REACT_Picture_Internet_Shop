import React, { useContext, useEffect } from "react"
import cartEmpty from "../images/cart-empty.png"
import cartFull from "../images/cart-full.png"
import{Link, Route, Routes} from "react-router-dom"
import Photos from "../pages/Photos"
import { Context } from "../Context"


function Header() {
    const { cartImgArray } = useContext(Context)
    const [isCartFull, setIsCartFull] = React.useState(false)
    React.useEffect(() => {    
        if(cartImgArray.length > 0){
            setIsCartFull(true)
        }else{
            setIsCartFull(false)
        } 
    },
    [cartImgArray]);



    let cartSrc = cartImgArray.length > 0 ? cartFull : cartEmpty
  

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><img className="ri-shopping-cart-line ri-fw ri-2x" 
            src={cartSrc}/></Link>
        </header>
    )
}

export default Header