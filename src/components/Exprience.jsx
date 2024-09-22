import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loder from './Loder'; 
import '../style/Exprience.css';
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import Inr from './Inr';
import Star from './Star';

const Api = "https://api.pujakaitem.com/api/products";

function Exprience({ onAddToCart }) { // Accept the onAddToCart prop
  const [asmount, setasmount] = useState(1);
  const { id } = useParams();
  const [img, setImg] = useState(null);
  const [state, setState] = useState(null);

  const setplus = () => {
    asmount > 1 ? setasmount(asmount - 1) : setasmount(0);
  };

  const setdes = () => {
    asmount < state.stock ? setasmount(asmount + 1) : setasmount(state.stock);
  };

  const fetchProductData = async () => {
    try {
      const response = await fetch(`${Api}?id=${id}`);
      const data = await response.json();
      setState(data);
      setImg(data.image[0]);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (!state) {
    return <Loder />;
  }

  const handleAddToCart = () => {
    onAddToCart({ ...state, quantity: asmount }); // Add the product with quantity to the cart
  };
  

  return (
    <>
      <div className="single">
        <div className="product-detail">
          <h2>{state.name}</h2>
          <div className="margin">
            <Star stars={state.stars} reviews={state.reviews} />
            <p>{state.category}</p>
            <p>
              <span>MRP:</span>
              <del>{<Inr price={state.price + 200000} />}</del>
            </p>
            <p>
              <span>Deal Of The Day:</span>
              {<Inr price={state.price} />}
            </p>
            <p>
              <span>Available:</span>
              {state.stock > 0 ? "In Stock" : "Not Available"}
            </p>
            <p><span>Id:</span> {state.id}</p>
            <p><span>Brand:</span> {state.company}</p>
          </div>
          <div className="des">
            <p>{state.description}</p>
          </div>
          <div className="titl">
            <div className="icon">
              <TbTruckDelivery />
              <p>Free delivery</p>
            </div>
            <div className="icon">
              <TbReplace />
              <p>30 days replacement</p>
            </div>
            <div className="icon">
              <AiOutlineFileProtect />
              <p>2 year warranty</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>

          <div className="product-image">
            {img && <img src={img.url} alt={state.name} className='img' />}
          </div>
        </div>

        <div className="product-images">
          {state.image.map((datas, index) => (
            <img key={index} src={datas.url} alt={state.name} onClick={() => setImg(datas)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exprience;
