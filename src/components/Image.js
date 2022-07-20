import Photos from "../pages/Photos"
import EmptyHeart from "../images/heart-empty.png"
import FilledHeart from "../images/heart-filled.png"
import AddToCart from "../images/add-to-cart.png"
import FullCartOnPic from "../images/cart-full-picture.png"
import React, { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

function Image({ className, img}) {
    const [hovered, setHovered] = React.useState(false)
    const { toggleFavorite, addToCartFunc, cartImgArray } = useContext(Context)
   
    const style = hovered ? "image-grid_hovered" : "image-grid"
    const hovoredOnHeart = hovered || img.isFavorite ? { display: "block" } : { display: "none" }
    let hovoredOnCart = hovered || cartImgArray.some(item => item.id === img.id)  ?{ display: "block" } : { display: "none" }

    let heartVar = img.isFavorite ? FilledHeart : EmptyHeart
    let heartStyle = img.isFavorite ? "favorite-filled" : "favorite"
     
    let cartVar = cartImgArray.some(item => item.id === img.id)? FullCartOnPic : AddToCart;
    let cartStyle = cartImgArray.some(item => item.id === img.id)? "cart-filled" : "cart"

    return (
        <div className={`${className} image-container`}>

            <img
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                src={img.url}
                className={style}
            />
            <img
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => toggleFavorite(img.id)}
                className={heartStyle} style={hovoredOnHeart} src={heartVar} />
            <img
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => addToCartFunc(img)}
                className={cartStyle} style={hovoredOnCart} src={cartVar} />
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
