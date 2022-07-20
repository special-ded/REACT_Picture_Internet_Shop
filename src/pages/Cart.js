import React, {useContext} from "react"
import CartItem from "../components/CartItem"
import { Context } from "../Context"

function Cart() {
    const { cartImgArray, emptyCart } = useContext(Context)
    const [textButton, setTextButton] = React.useState("Place Order")

    console.log(cartImgArray)
    const cartItemElements = cartImgArray.map((item) =>(
        <CartItem key={item.id} item={item} />
    ))
   
    function placeOrder(){
        setTextButton("Placing...")
        setTimeout(()=> {
            console.log("Order placed!")
        emptyCart()
        setTextButton("Place Order")
        }, 3000)
    }

    const totalPrice = (cartImgArray.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalPrice} </p>
            <div className="order-button">
                {cartImgArray.length>0? 
                <button className="order__button-btn" onClick={() =>placeOrder()}>{textButton}</button> :
                <p>You have no items in your cart.</p>}
            </div>
        </main>
    )
}

export default Cart