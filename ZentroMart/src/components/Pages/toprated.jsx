import React from 'react';

const topRatedProducts = [
  {
    id: 1,
    name: "Vivo v50e Pro",
    rating: 4.8,
    price: "39,999",
    category: "Electronics",
    image: "src/assets/images/smartphone.jpg"
  },
  {
    id: 2,
    name: "Men's Premium Jacket",
    rating: 4.7,
    price: "20,999",
    category: "Mens Wear",
    image: "src/assets/images/men's jacket.jpg"
  },
  {
    id: 3,
    name: "Kids Shirts",
    rating: 4.6,
    price: 1899,
    category: "Kids Wear",
    image: "src/assets/images/kidsplayset.jpg"
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    rating: 4.9,
    price: 2599,
    category: "Electronics",
    image: "src/assets/images/BluetoothHeadphones.jpg"
  },
  {
    id: 5,
    name: "Cotton Summer Dress",
    rating: 4.5,
    price: 1499,
    category: "Kids Wear",
    image: "src/assets/images/CottonSummerDress.jpg"
  },
  {
    id: 6,
    name: "Men's Running Shoes",
    rating: 4.8,
    price: 3499,
    category: "Mens Wear",
    image: "src/assets/images/Men'sRunningShoes.webp"
  },
  {
    id: 7,
    name: "Smart LED TV 50\"",
    rating: 4.7,
    price: 37999,
    category: "Electronics",
    image: "src/assets/images/Smart'LEDTV50.jpg"
  },
  {
    id: 8,
    name: "Boys Casual Shirt",
    rating: 4.4,
    price: 899,
    category: "Kids Wear",
    image: "src/assets/images/BoysCasualShirt.jpg"
  },
  {
    id: 9,
    name: "Formal Blazer",
    rating: 4.6,
    price: 5999,
    category: "Mens Wear",
    image: "src/assets/images/FormalBlazer.jpg"
  },
  {
    id: 10,
    name: "Smartwatch Pro",
    rating: 4.9,
    price: 7999,
    category: "Electronics",
    image: "src/assets/images/SmartwatchPro.jpg"
  }
];

const TopRated = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Top Rated Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
        {topRatedProducts.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '20px',
            width: '300px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
            textAlign: 'left',
            backgroundColor: '#fff',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <img
            src={product.image}
            alt={product.name}
            style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                borderRadius: '10px',
                marginBottom: '12px',
                backgroundColor: '#f8f8f8' 
            }}
            />

            <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>{product.name}</h3>
            <p style={{ margin: '6px 0', fontSize: '16px' }}>Rating: ⭐ {product.rating}</p>
            <p style={{ margin: '6px 0', fontSize: '16px' }}>Price: ₹{product.price}</p>
            <p style={{ margin: '6px 0', fontSize: '15px', color: '#666' }}>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
