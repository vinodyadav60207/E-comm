import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import { mobile, tv, laptop, tablet, printer } from './data'; 


export default function ProductDetail() { 
    const { id } = useParams(); 
    const allProducts = [...mobile, ...tv, ...laptop, ...tablet, ...printer];
  
    
    const product = allProducts.find((item) => item.model === id);
  
    return (
      <div className='product-detail'>
        <img src={product.image} alt={product.model} />
        <h1>{product.brand} {product.model}</h1>
        <p>Price: ₹{product.price}</p>
        <p>{product.description}</p>
        <p style={{ color: product.inStock ? 'green' : 'red' }}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        {product.onSale && product.onSale > 500 && (
          <p className='badge badge-discount'>Discount Available!</p>
        )}
        {product.inStock && product.stock < 5 && (
          <p className='low-stock-warning'>Hurry, only {product.stock} items left!</p>
        )}
        {product.price > 1000 && (
          <span className='badge badge-shipping'>Free Shipping</span>
        )}
        <button className='buy-now'>Buy Now</button>
      </div>    
    );
  }
