import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Service.css'; // Ensure the CSS file path is correct
import Loder from "./Loder";
import Inr from "./Inr";
import { Link } from "react-router-dom";

function Service() {
  const [state, setState] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(false); // State for loading status

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.pujakaitem.com/api/products');
      const products = await res.json();
      setLoading(false);
      setState(products);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loder />;
  }

  return (
    <>
      {/* Slider Section */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
        <div className="data">
            <div className="carousel-slide">
              <div className="carousel-text">
                <h1>Sale 20% Off On Everything</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="butts">
                <Link to="/product"><button className="btn">Shop Now</button></Link>

                </div>
              </div>
              <div className="carousel-image">
                <img
                  src="https://i0.wp.com/keralagurukulam.com/wp-content/uploads/revslider/eduma-elegant/3_31.png?resize=640%2C799&ssl=1"
                  alt="Slide 1"
                />
              </div>
            </div>
          </div>

          <div className="data">
            <div className="carousel-slide">
              <div className="carousel-text">
                <h1>Get Up 30% Off Arrival</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="butts">
                  <Link to="/product"><button className="btn">Shop Now</button></Link>
                </div>
              </div>
              <div className="carousel-image">
                <img
                  src="https://m.media-amazon.com/images/I/61LftZ9OE8L._SL1200_.jpg"
                  alt="Slide 2"
                />
              </div>
            </div>
          </div>

          <div className="data">
            <div className="carousel-slide">
              <div className="carousel-text">
                <h1>Ecommerce Website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="butts">
                <Link to="/product"><button className="btn">Shop Now</button></Link>

                </div>
              </div>
              <div className="carousel-image">
                <img
                  src="https://m.media-amazon.com/images/I/81BG9IyNLUL._AC_UF1000,1000_QL80_.jpg"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>


      {/* Products Section */}
      <div className="api">
        <div className="fetch">
          {/* Display all products in a grid of 3 per row */}
          {state.map((item) => (
            <div key={item.id} className="apna">
              <Link to={`/exprience/${item.id}`}>
                <img src={item.image} alt={item.name || "Product"} />
              </Link>
              <div className="product-info">
                <span className="company">{item.company}</span>
                <span className="price">{<Inr price={item.price} />}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
