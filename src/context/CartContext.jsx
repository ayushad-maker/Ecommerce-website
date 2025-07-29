  import React, { createContext, useContext, useState } from "react";


  const CartContext = createContext();

  export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);


   const addToCart = (Product) =>{
       const numericPrice = Number(Product.price);
       
       setCartItems((prev=> {
        const existingItem =  prev.find((item=>item.id === Product.id))
        if(existingItem){
          return prev.map((item=>
            item.id === Product.id
            ?{...item,quantity:item.quantity + 1}:item 
           ))
        }else{
        return [...prev,{...Product,price:numericPrice,quantity:1}]
        }
   }))
      
   }

    const increaseItem = (id) =>{
      setCartItems((prev)=>
      prev.map((item)=>
        item.id===id
      ?{...item,quantity:item.quantity +1}:item   
      )
    )
    }

    const decreaseItem = (id) =>{
      setCartItems((prev)=>
      prev.map((item)=>
        item.id===id && item.quantity>1 
        ?{...item,quantity:item.quantity-1}
        :item
      ))
    }

    const removeFromCart = (id) =>{
      setCartItems((prev)=>prev.filter(item=>item.id!==id))
    }
    
    const clearCart = () =>{
      setCartItems([]); 
    }

    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,increaseItem,decreaseItem }}>
        {children}
      </CartContext.Provider>
    );
  };

  export const useCart = () => useContext(CartContext);
