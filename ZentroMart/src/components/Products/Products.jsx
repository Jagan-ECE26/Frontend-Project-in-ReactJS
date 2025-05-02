import React from "react";
import { useParams } from "react-router-dom";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    category: "women",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Kids Shirt",
    rating: 4.5,
    color: "Red",
    category: "kids",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Men Goggles",
    rating: 4.7,
    color: "brown",
    category: "men",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    category: "women",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    category: "men",
    aosDelay: "800",
  },
];

// map route path to product category
const categoryMap = {
  kidswear: "kids",
  menswear: "men",
  womenswear: "women",
  electronics: "electronics",
};

const Products = () => {
  const { category } = useParams();
  const normalizedCategory = categoryMap[category?.toLowerCase()];
  const filteredProducts = normalizedCategory
    ? ProductsData.filter((product) => product.category === normalizedCategory)
    : ProductsData;

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            {normalizedCategory
              ? `Top Selling ${normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1)} Products`
              : "Top Selling Products for You"}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
