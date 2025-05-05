import React from 'react';

const topRatedProducts = [
  {
    id: 1,
    name: "T-shirts",
    rating: 4.8,
    price: "500",
    category: "Boys Wear",
    image: "src/assets/images/T-shirts.jpg"
  },
  {
    id: 2,
    name: "Sweatshirts",
    rating: 4.7,
    price: "999",
    category: "Boys Wear",
    image: "src/assets/images/Sweatshirts.jpeg"
  },
  {
    id: 3,
    name: "Trousers",
    rating: 4.6,
    price: 899,
    category: "Boys Wear",
    image: "src/assets/images/Trousers.avif"
  },
  {
    id: 4,
    name: "Shorts",
    rating: 4.9,
    price: 599,
    category: "Boys Wear",
    image: "src/assets/images/Shorts.jpeg"
  },
  {
    id: 5,
    name: "Loungewear",
    rating: 4.5,
    price: 999,
    category: "Boys Wear",
    image: "src/assets/images/Loungewear.jpg"
  },
  {
    id: 6,
    name: "Bottom wear",
    rating: 4.8,
    price: 799,
    category: "Girls Wear",
    image: "src/assets/images/Bottom wear.jpeg"
  },
  {
    id: 7,
    name: "Single-piece",
    rating: 4.7,
    price: 1999,
    category: "Girls Wear",
    image: "src/assets/images/Single-piece.jpeg"
  },
  {
    id: 8,
    name: "T-shirts",
    rating: 4.4,
    price: 899,
    category: "Girls Wear",
    image: "src/assets/images/T-shirts girls.webp"
  },
  {
    id: 9,
    name: "Sweatshirts",
    rating: 4.6,
    price: 1000,
    category: "Girls Wear",
    image: "src/assets/images/Sweatshirts girls.webp"
  },
  {
    id: 10,
    name: "Nightwear",
    rating: 4.9,
    price: 999,
    category: "Girls Wear",
    image: "src/assets/images/Nightwear.webp"
  }
];

const Kidswear = () => {
    const kidsWearProducts = topRatedProducts.filter(
        (product) => product.category === "Boys Wear" || product.category === "Girls Wear"
      );
      
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Top Rated - Kids Wear</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
        {kidsWearProducts.map(product => (
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

export default Kidswear;
