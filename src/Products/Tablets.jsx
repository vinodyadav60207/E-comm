
import React from 'react'
import {tablet} from './data'

export default function Tablet() {
    // const Datable = [mobile];
  return (
    <>
    <p className='cat-main' id='Tablets'>Tablet</p>
    
    <div className='container'>
      
      {
        tablet.map((item) => (
                <div className='container-main'>
                <img  src={item.image} alt={item.brand}/>
                <div className='printer-details'>
                    <h2 className='brand' >{item.brand} {item.model}</h2>
                    <pre>Price: ${item.price} <strike>${1000}</strike></pre>
                    <p className='desc'>{item.description}</p>
                    <p style={{ color: item.inStock ? 'green' : 'red' }}>
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
            {item.onSale && item.onSale > 500 && (<p className='badge badge-discount'>Discount Available!</p>)}

 {item.inStock && item.stock < 5 && (
                    <p className='low-stock-warning'>Hurry, only {item.stock} items left!</p>
                  )}
           
            {item.price < 100 && (
  <span className='badge budget-friendly'>Budget-Friendly</span>
)}
{item.price > 1000 && (
  <span className='badge premium-product'>Premium Product</span>
)}
  {item.price > 1000 && ( <span className='badge badge-shipping'>Free Shipping</span>)}

                    <a className='buy-now'>BUY NOW</a>
                </div>
                </div> )
        )
    }
    </div></>
  )
}
