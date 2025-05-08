import React from 'react';

const topRatedProducts = [
  {
    id: 11,
    name: "Formal Shirt",
    rating: 4.8,
    price: 1200,
    category: "Mens Wear",
    image: "src/assets/images/Formal Shirt.jpeg"
  },
  {
    id: 12,
    name: "Casual Jeans",
    rating: 4.6,
    price: 1500,
    category: "Mens Wear",
    image: "src/assets/images/Casual Jeans.jpeg"
  },
  {
    id: 13,
    name: "Blazer",
    rating: 4.9,
    price: 3500,
    category: "Mens Wear",
    image: "src/assets/images/Blazer.jpeg"
  },
  {
    id: 14,
    name: "T-shirts",
    rating: 4.7,
    price: 800,
    category: "Mens Wear",
    image: "src/assets/images/T-shirts.jpg"
  },
  {
    id: 15,
    name: "Neck T-Shirt",
    rating: 4.5,
    price: 850,
    category: "Mens Wear",
    image: "src/assets/images/Neck T-Shirt.jpeg"
  }
];

const Menswear = () => {
  const mensWearProducts = topRatedProducts.filter(
    (product) => product.category === "Mens Wear"
  );

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Top Rated - Mens Wear</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
        {mensWearProducts.map(product => (
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

export default Menswear;
