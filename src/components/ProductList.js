import { useEffect, useState} from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import loader from '../assets/loader.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/productlist.css'



function ProductList({setCartItems, cartItems}) {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [baseURL, setBaseURL] = useState('https://fakestoreapi.com/products');
  const [quantity, setQuantity] = useState(1)


  useEffect(() => {
    setloading(true)
    const getProducts = async () => {
      const response = await axios.get(baseURL)
      setloading(false)
      setProducts(response.data);
    };
    getProducts();
    
    }, [baseURL]);

  
  const handlecategory = (event) => {

   
    const newUrl = `https://fakestoreapi.com/products/category/${event.target.id}`

    setBaseURL(newUrl);
   
  }

    const handleAddToCart = (event) => {
      const producturl = 'https://fakestoreapi.com/products'
      const getProduct = async () => {
        const response = await axios.get(`${producturl}/${event.target.value}`)
        const data = response.data;
        data.quantity=quantity;
        setCartItems(prev => [...prev,data])
        alert('Added to cart');
      };
    


getProduct();

 }


  return (
    <div className='ProductList'>
      
        <h2>Products</h2>
        <ul className='categories'>
          <li onClick={()=> {
            setBaseURL('https://fakestoreapi.com/products')
          }} >All</li>
          <li onClick={handlecategory} id={'electronics'}>Electronics</li>
          <li onClick={handlecategory} id={'jewelery'}>Jewelery</li>
          <li onClick={handlecategory} id={`men's%20clothing`} >Men's clothing</li>
          <li onClick={handlecategory} id={`women's%20clothing`}>Women's clothing</li>
        </ul>
     
       { loading ? <div className='loader'>
      <img src={loader} alt="Loading..." />
      <figcaption>Loading Products...</figcaption>
    </div>
    :
      <div className='products'>
        {products.map((product,index) => (
         
          <div className='product'  key={product.id}>
          
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <span className='priceandrating'>
                $ {product.price}
                <ReactStars size={30} value={product.rating.rate} edit={false} />
              </span>
              <div className='maincartcontainer'>
                <label htmlFor='quantity'>Quantity</label>
                <select className='quantity' value={quantity} onChange={(e)=> setQuantity(e.target.value)}>
                  <option value={1} >1</option> 
                  <option value={2} >2</option> 
                  <option value={3} >3</option> 
                  <option value={4} >4</option> 
                  <option value={5} >5</option> 
                </select>
                <button className='addtocartbtn' name={product.title} value={product.id} onClick={handleAddToCart}>Add to Cart<FontAwesomeIcon icon={faCartShopping}/></button>
                </div>
          </div>
        ))}
      </div>
}
    </div>
    
  );
}

export default ProductList;
