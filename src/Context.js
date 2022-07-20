import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

  //Saving Img to CART
  const [cartImgArray, setCartImgArray] = useState([])

  function addToCartFunc(img) {
    const alreadyInCart = cartImgArray.some(item => item.id === img.id)
    if (alreadyInCart) {
      setCartImgArray(prevItems => prevItems.filter(item => item.id !== img.id))
    } else {
      setCartImgArray(prevItems => [...prevItems, img])
    }
    return
  }


  React.useEffect(function () {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(res => res.json())
      .then(data => allPhotos == [] ? setAllPhotos(data) : null)
  }, [])

  const [allPhotos, setAllPhotos] = useState(
    JSON.parse(localStorage.getItem("allPhotos")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("allPhotos", JSON.stringify(allPhotos))
  }, [allPhotos])



  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })
    setAllPhotos(updatedArr)
  }

  function emptyCart() {
    setCartImgArray([])
  }
  return (
    <Context.Provider value={{
      allPhotos,
      toggleFavorite,
      addToCartFunc,
      cartImgArray,
      emptyCart
    }}>
      {props.children}
    </Context.Provider>
  )
}
export { ContextProvider, Context }