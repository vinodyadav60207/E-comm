import React from "react";
import{useParams} from 'react-router-dom';
// import category from './Category'

const productsData = {
  electronics: [
  {
    
    id: 1,
    name: 'Smartphone',
    description: '128GB storage, 5G capable smartphone.',
    price: 799.99,
    category: 'Electronics',
    imageUrl: "../https://rukminim2.flixcart.com/image/300/300/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70"
  },
  {
    id: 2,
    name: 'Laptop',
    description: '15-inch laptop with Intel i7 processor.',
    price: 1299.99,
    category: 'Electronics',
    imageUrl: 'https://rukminim2.flixcart.com/image/300/300/xif0q/computer/c/p/u/-original-imagykgpfe48frjw.jpeg?q=70',
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Track your fitness with this smartwatch.',
    price: 199.99,
    category: 'Electronics',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/u/e/d/-original-imagtvj2pfm4haw6.jpeg?q=70',
  },
  {
    id: 4,
    name: 'Bluetooth Headphones',
    description: 'Wireless noise-canceling headphones.',
    price: 149.99,
    category: 'Electronics',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/q/g/e/-original-imah27qzdhd3vydx.jpeg?q=70',
  },
  {
    id: 5,
    name: '4K TV',
    description: '65-inch 4K Ultra HD Smart TV.',
    price: 999.99,
    category: 'Electronics',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/d/m/g/-original-imah4qswrujmfbnn.jpeg?q=70',
  }
],
  
books:[
  {
    id: 6,
    name: 'The Alchemist',
    description: 'A novel by Paulo Coelho.',
    price: 12.99,
    category: 'Books',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book/c/a/e/pw-arjuna-for-jee-main-advanced-class-11th-physics-chemistry-and-original-imah26h9hnysk9x7.jpeg?q=70',
  },
  {
    id: 7,
    name: 'Atomic Habits',
    description: 'Build good habits and break bad ones.',
    price: 16.99,
    category: 'Books',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/f/s/2/-original-imahffz6yzhyqvfq.jpeg?q=70',
  },
  {
    id: 8,
    name: 'Becoming',
    description: 'Autobiography of Michelle Obama.',
    price: 22.99,
    category: 'Books',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/9/8/o/the-hidden-hindu-1-the-hidden-hindu-2-the-hidden-hindu-3-set-of-original-imagufjzpgqjh6h8.jpeg?q=70',
  },
  {
    id: 9,
    name: '1984',
    description: 'Dystopian novel by George Orwell.',
    price: 8.99,
    category: 'Books',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/e/4/m/ankit-bhati-static-g-k-paperback-hindi-ankit-bhati-sir-naveen-original-imah56btp2gnefvk.jpeg?q=70',
  },
  {
    id: 10,
    name: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald.',
    price: 10.99,
    category: 'Books',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/x/y/f/grb-objective-zoology-botany-combo-for-neet-all-other-medical-original-imagky3vxdrhjcsz.jpeg?q=70',
  }
],

  clothes:[
  {
    id: 11,
    name: 'Men\'s Jacket',
    description: 'Stylish and warm winter jacket.',
    price: 79.99,
    category: 'Clothes',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/5/t/x/11-12-years-508-set-rnd-because-red-m-atlans-clothes-original-imahyhepkmg38apd.jpeg?q=70',
  },
  {
    id: 12,
    name: 'Women\'s T-Shirt',
    description: 'Comfortable cotton T-shirt.',
    price: 19.99,
    category: 'Clothes',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/a/e/p/7-8-years-fdgcmb00111-mul-fashion-dream-original-imahykrz2jwcnkan.jpeg?q=70',
  },
  {
    id: 13,
    name: 'Running Shoes',
    description: 'Lightweight running shoes for men and women.',
    price: 49.99,
    category: 'Clothes',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/0/c/3/6-rng-854-grey-40-bruton-grey-original-imah3xh6a6ecvmng.jpeg?q=70',
  },
  {
    id: 14,
    name: 'Jeans',
    description: 'Classic blue denim jeans.',
    price: 39.99,
    category: 'Clothes',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/b/d/v/32-aw22elppjn09-metronaut-original-imagznv7qcpzkhrv.jpeg?q=70',
  },
  {
    id: 15,
    name: 'Summer Dress',
    description: 'Light and breezy summer dress.',
    price: 29.99,
    category: 'Clothes',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/night-suit/v/3/b/m-ms6048-sh-leriya-fashion-original-imagzta9a3mj9ckn.jpeg?q=70',
  }
],
 Home:[
  {
    id: 16,
    name: 'Blender',
    description: 'High-speed blender for home use.',
    price: 59.99,
    category: 'Home',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/kv1a4cw0/hand-blender/z/m/x/hb-20-hand-blender-410534-bajaj-original-imag8yqnkmmrvaac.jpeg?q=70',
  },
  {
    id: 17,
    name: 'Microwave Oven',
    description: '700-watt microwave with quick defrost.',
    price: 99.99,
    category: 'Home',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/microwave-new/9/j/r/-original-imah2hyhhzdqjj4r.jpeg?q=70',
  },
  {
    id: 18,
    name: 'Vacuum Cleaner',
    description: 'Bagless vacuum cleaner for home cleaning.',
    price: 119.99,
    category: 'Home',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/vacuum-cleaner/n/p/q/super-vac-eureka-forbes-original-imaggzeakzsyxmxc.jpeg?q=70',
  },
  {
    id: 19,
    name: 'Air Purifier',
    description: 'HEPA air purifier for cleaner air.',
    price: 199.99,
    category: 'Home',
    imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/air-purifier/m/x/9/25-2-airmega-aim-42-5-6-7-coway-original-imagvfnfgthyhtkc.jpeg?q=70',
  },
  {
    id: 20,
    name: 'Iron',
    description: 'Steam iron for wrinkle-free clothes.',
    price: 29.99,
    category: 'Home',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/kpsnzww0/iron/q/r/v/ghgsibeb125-havells-original-imag3xygkfh5zxbq.jpeg?q=70',
  }
],
furniture:[
  {
    id: 21,
    name: 'Wooden Chair',
    description: 'Comfortable wooden chair for your living room.',
    price: 149.99,
    category: 'Furniture',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/a/a/r/1-teak-sagun-58-42-xford-ergonomic-leatherette-executive-high-original-imahf4gzjavgxmws.jpeg?q=70',
  },
  {
    id: 22,
    name: 'Dining Table',
    description: 'Solid wood dining table that seats 6.',
    price: 499.99,
    category: 'Furniture',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/table-placemat/b/r/4/6-blkgrybox-diningtablemat-flipkart-smartbuy-original-imagg9ntrtaheahj.jpeg?q=70',
  },
  {
    id: 23,
    name: 'Sofa',
    description: 'Modern 3-seater sofa with comfortable cushions.',
    price: 599.99,
    category: 'Furniture',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/g/p/w/-original-imah3nqfe4pjzkk2.jpeg?q=70',
  },
  {
    id: 24,
    name: 'Bookshelf',
    description: '5-tier wooden bookshelf.',
    price: 199.99,
    category: 'Furniture',
    imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book-shelf/u/q/9/steel-printed-book-shelf-owme-blue-original-imagpa4ghwbfzxms.jpeg?q=70',
  },
  {
    id: 25,
    name: 'Bed Frame',
    description: 'King-size wooden bed frame.',
    price: 699.99,
    category: 'Furniture',
    imageUrl: './https://rukminim2.flixcart.com/image/612/612/xif0q/bed/o/m/b/queen-82-4-na-no-64-4-rubber-wood-yes-87-rico-wakefit-36-6-original-imahy9njzkszu8zw.jpeg?q=70',
  }
]
};
const ProductList = () => {
  const { categoryName } = useParams(); // Fetch category from URL

  const products = productsData[categoryName] || []; // Get products based on category from the URL

  return (
    <div className="container mt-5">
      <h2>Products in {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;