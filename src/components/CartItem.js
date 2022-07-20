import React, {useContext} from "react";
import  Trash  from "../images/trash.png";
import TrashFilled from "../images/trash-filled.png"
import { Context } from "../Context";
import PropTypes from "prop-types"

export default function CartItem({item}){
  const { addToCartFunc } = useContext(Context)
  const [hoveredTrash, setHoveredTrash] = React.useState(false)

  const TrashIcon = hoveredTrash ? TrashFilled : Trash


  return(
    <div className="cart-item">
      <div className="cart__image-container" >
      <img 
      src={TrashIcon} 
      className="ri-delete-bin-line"
      onMouseEnter={() =>setHoveredTrash(true)}
      onMouseLeave={() =>setHoveredTrash(false)}
      onClick={()=>addToCartFunc(item)}
      />
   
   <img src={item.url} width="130px" className="cart__image" />
      </div>

    <p>$5.99</p>
</div>
  )

}
CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}