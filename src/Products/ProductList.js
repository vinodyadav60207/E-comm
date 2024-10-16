import React from 'react';
import App from './Products./App';


const ProductList = ({ products }) => {
  const groupedProducts = products.reduce((pros, product) => {
    (pros[product.category] = pros[product.category] || []).push(product);
    return pros;
  }, {});

  return (
       <>
      <div className="logo">
        <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" height='50px'></img>
        
                <a>Electronics</a>
                <a>Books</a>
                 <a>Clothes</a>
                 <a>Home</a>
                <a>Furnitures</a>
                 

      </div>
     <div className="cards">
      
      <h1>Best Products</h1>
      
     
      {Object.keys(groupedProducts).map(category => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2>{category}</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
            {groupedProducts[category].map(product => (
              <li key={product.id} style={{ margin: '20px', width: '200px', textAlign: 'center' }}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Price: ${product.price.toFixed(2)}</strong></p>
              </li>
            ))}
          </ul>
        </div>
      ))}
   </div>
    </>
  );
};

export default ProductList;
