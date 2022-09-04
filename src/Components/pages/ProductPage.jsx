import React, { useEffect, useState } from "react";
import Header from "../UIComponents/Userui/Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function ProductPage({ cart, handleRemoveItemFromCart, handleAddItemToCart }) {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [imgIndex, setImageIndex] = useState(0);
  useEffect(() => {
    axios.get(`/api/menu/item/${id}`).then((res) => {
      setItem(res.data);
    });
  }, []);
  const handleTab = (index) => {
    setImageIndex(index);
  }
  return (<>
    <div>
      <Header cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
      <div className="details-app">
        {item ? (
          <div className="details">
            <div className="big-img">
              {item && item?.ImagePlaceholder ? (
                <img
                  className="img-tag"
                  src={`/api/uploads/${item.ImagePlaceholder[imgIndex]}`}
                  alt="image"
                />
              ) : (
                <></>
              )}
              <div className="card details-border">
                <div className="card-header text-center">About Product </div>
                <div
                  className="about-product"
                  dangerouslySetInnerHTML={{ __html: item.about }}
                ></div>
              </div>
            </div>
            <div className="box">
              <div className="row mar">
                <h1>
                  {item.title}
                  <span class=" bg-subtitle ">{item.subTitle}</span>
                </h1>
                <span className="span2">
                  {item.price} {item.currency}
                </span>
              </div>
              <div>
                <p className="price">
                  {item.Quantity} / <span> {item.Unit}</span>
                </p>
              </div>
              <p className="paragraph">{item.subTitle}</p>
              <p>{item.description}</p>
              <div className="thumb">
                {item && item?.ImagePlaceholder ? (
                  item.ImagePlaceholder.map((img, index) => (
                    <img
                      className={
                        imgIndex === index ? "active-thumb" : "thumb-img"
                      }
                      src={`/api/uploads/${item.ImagePlaceholder[index]}`}
                      key={index}
                      onClick={() => handleTab(index)}
                    />
                  ))
                ) : (
                  <></>
                )}
              </div>
              <button
                onClick={() => {
                  handleAddItemToCart(item);
                }}
                className="btn btn-block btn-outline-dark mt-auto custom-button-primary"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>          
              <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                  <h4 className="text-center h5  text-bold text-dark">
                  <Link to={ `//localhost:3000/restourent/${item.user_id}` }  className="text-decoration-none" >     <button
                    className="btn btn-block btn-outline-dark mt-auto btn btn-primary bg-primary custom-button-primary "
                      type="button "
                    >
                      <i className="bi-cart-fill me-1 "></i>
                      Visit Restourent
                    </button></Link>
                  </h4>
                </div>
            </div> 
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
    </>
  );
}
export default ProductPage;
