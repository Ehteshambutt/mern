import React from 'react'
import Slid from './Slid'
import Header from '../UIComponents/Userui/Header'
import About from './About'
const Restorent = ({ cart, handleRemoveItemFromCart }) => {
  return (<>
   <div>
   <Header 
        cart={cart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}       
      />
<Slid/> 
<About/>
    </div></>
  )
}

export default Restorent