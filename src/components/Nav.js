import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom';
import '../styles/nav.css'



export default function Nav({totalQuantity}) {

    const nav = useNavigate();
   


  return (
   
    <nav className='navbar'>
        <h1 className='gotohome' onClick={()=> {nav('/')}}   >Fake Store</h1>
      <div className='navbarcart'> <FontAwesomeIcon className='gotocart' onClick={()=> nav('/Cart')} icon={faCartShopping} size={'2x'} /> <span>{totalQuantity}</span> </div>
    </nav>
   
  )
}
