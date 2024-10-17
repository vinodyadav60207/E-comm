import React from 'react';
import { mobile, tv, laptop, tablet, printer } from './data'; 

export default function AllProducts() {
  
  const allProducts = [...mobile, ...tv, ...laptop, ...tablet, ...printer];

  return (
    <>
     <h1>All Products</h1>
    <div className='container'>
     
      <div className='products-grid' >
        {
       allProducts.map((product, index) => (
          <div key={index} className='product-card'>
            <img src={product.image} alt={product.model} />
            <h2>{product.brand} {product.model}</h2>
            <Link to={`/products/${product.model}`}>
              <h2>{product.brand} {product.model}</h2>
            </Link>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <p style={{ color: product.inStock ? 'green' : 'red' }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
           
 {product.onSale && product.onSale > 500 && (<p className='badge badge-discount'>Discount Available!</p>)}

 {product.inStock && product.stock < 5 && (
                    <p className='low-stock-warning'>Hurry, only {product.stock} items left!</p>
                  )}
           
            {product.price < 100 && (
  <span className='badge budget-friendly'>Budget-Friendly</span>
)}
{product.price > 1000 && (
  <span className='badge premium-product'>Premium Product</span>
)}
  {product.price > 1000 && ( <span className='badge badge-shipping'>Free Shipping</span>)}



            <button className='buy-now'>Buy Now</button>
          </div>
        ))}
      </div>
    </div></>
  );
}
