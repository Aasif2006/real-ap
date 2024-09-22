import React, { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loder from "./Loder";
import Inr from "./Inr";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [loading, setLoading] = useState(false); // State for loading status
  const [searchInput, setSearchInput] = useState(""); // State to capture search input

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.pujakaitem.com/api/products');
      const data = await res.json();
      setLoading(false);
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = () => {
    // Check if input is a number (for price search) or text (for name search)
    const isPriceSearch = !isNaN(searchInput) && searchInput !== "";

    const filtered = products.filter((product) => {
      if (isPriceSearch) {
        // Filter products based on price
        return product.price === Number(searchInput);
      } else {
        // Filter products based on name (case insensitive)
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      }
    });

    setFilteredProducts(filtered); // Update filtered products
  };

  if (loading) {
    return <Loder />;
  }

  return (
    <>
      {/* Search Input Section */}
      <div className="product">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products by name or price..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)} // Update search input state
          />
          <div className="input-group-append">
            <button className="btn" onClick={handleSearch}>
              <i className="fas fa-search"></i> {/* Search button */}
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="api">
        <div className="fetch">
          {filteredProducts.length > 0 ? (
            // Display filtered products in a grid
            filteredProducts.map((item) => (
              <div key={item.id} className="apna">
                <Link to={`/exprience/${item.id}`}>
                  <img src={item.image} alt={item.name || "Product"} />
                </Link>
                <div className="product-info">
                  <span className="company">{item.company}</span>
                  <span className="price">{<Inr price={item.price} />}</span>
                </div>
              </div>
            ))
          ) : (
            // Show message if no product is found
            <div className="no-product-message">
              <h3>No products available</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
