import React from 'react'
import '../styles/cart.css'

export default function cart({cartItems, setCartItems}) {
  console.log(cartItems)
  const totalPrice = cartItems.reduce((total, item) => total + (item.price*item.quantity), 0);

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    alert("Successfully removed!")
  };
 
  return (
    
    
    <div className='cartItems'>
      {cartItems.length<=0 ?
      <h1 className='emptycart'>Your Cart is Empty! 😔</h1>
      :
     <div className='allcartitems'>
      {cartItems.map((item,index)=> (
        <div className='checkoutcart' key={index}>
          <img src={item.image} alt={item.title} width="200px" height="200px" />
          <div className='checkoutdata'>
          <h1>{item.title}</h1>
          <h1>Quantity: {item.quantity}</h1>
          <h1>Total: ${item.price*item.quantity}</h1>
          </div>
          <button  value={index} className='removebtn' onClick={removeFromCart}>Remove</button>
        </div>
      ))}
      <h1>Total: ${totalPrice.toFixed(2)}</h1>
      <button className='checkout' onClick={()=>{
        alert("Thank you for your purchase!")
        setCartItems([])
      }}>checkout</button>
      </div>
}
    </div>
    
  )
}
