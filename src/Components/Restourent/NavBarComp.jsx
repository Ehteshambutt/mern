import React, { useState, useEffect } from "react";
import { RestData } from "./RestData";
import Slider from "react-slick";
import "../../App.css";
import { Link, useParams } from "react-router-dom";

const NavBarComp = (props) => {
  const { Restourent_id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [Restdata, setRestdata] = useState();
  useEffect(() => {
    setRestdata(RestData);
    console.log(RestData);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  }
  return (
    <>
      <div >
        <Slider {...settings}>
     
           
            <button className="submunu-btn "><i class="fa-solid fa-bars mx-2"></i>My Menu</button>
            <button className="submunu-btn"><i class="fa-solid fa-champagne-glasses mx-2"></i>Drinks</button>
            <button className="submunu-btn"><i class="fa-brands fa-delicious icn mx-2"></i>Deals</button>
            <button className="submunu-btn"><i class="fa-solid fa-heart mx-2"></i>Favourits</button>
            <button className="submunu-btn"><i class="fa-solid fa-heart mx-2"></i> Popular</button>
          
       
        </Slider>

      </div>
      
      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start "
      >
        {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card margin-bit product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left h-all">
                    <h5 className="title">
                      title <span className="subtitle">subTitle</span>
                      <span className="prc d-flex justify-content-end ">
                        {" "}
                        price <span className="currency">currency</span>{" "}
                      </span>
                    </h5>
                    <p className="truncate-text ">description</p>
                    <div class="d-flex margin-bitn justify-content-between">
                      <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p>
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      // onClick={() => {
                      //   handleAddItemToCart(item);
                      // }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="text-center h3  text-bold text-dark">
        <span className="border-bottom-warning    ">Drinks</span>
      </h4>


      


      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start"
      >
        {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card margin-bit product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left h-all">
                    <h5 className="title">
                      title <span className="subtitle">subTitle</span>
                      <span className="prc d-flex justify-content-end ">
                        {" "}
                        price <span className="currency">currency</span>{" "}
                      </span>
                    </h5>
                    <p className="truncate-text ">description</p>
                    <div class="d-flex margin-bitn justify-content-between">
                      <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p>
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      // onClick={() => {
                      //   handleAddItemToCart(item);
                      // }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="text-center h3  text-bold text-dark">
        <span className="border-bottom-warning    ">My Menu</span>
      </h4>
      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start"
      >
       {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card margin-bit product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left h-all">
                    <h5 className="title">
                      title <span className="subtitle">subTitle</span>
                      <span className="prc d-flex justify-content-end ">
                        {" "}
                        price <span className="currency">currency</span>{" "}
                      </span>
                    </h5>
                    <p className="truncate-text ">description</p>
                    <div class="d-flex margin-bitn justify-content-between">
                      <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p>
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      // onClick={() => {
                      //   handleAddItemToCart(item);
                      // }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="text-center h3  text-bold text-dark">
        <span className="border-bottom-warning    ">Deals</span>
      </h4>
      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start"
      >
         {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card margin-bit product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left h-all">
                    <h5 className="title">
                      title <span className="subtitle">subTitle</span>
                      <span className="prc d-flex justify-content-end ">
                        {" "}
                        price <span className="currency">currency</span>{" "}
                      </span>
                    </h5>
                    <p className="truncate-text ">description</p>
                    <div class="d-flex margin-bitn justify-content-between">
                      <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p>
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      // onClick={() => {
                      //   handleAddItemToCart(item);
                      // }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="text-center h3  text-bold text-dark">
        <span className="border-bottom-warning    ">Favourite</span>
      </h4>
      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start"
      >
         {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card margin-bit product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left h-all">
                    <h5 className="title">
                      title <span className="subtitle">subTitle</span>
                      <span className="prc d-flex justify-content-end ">
                        {" "}
                        price <span className="currency">currency</span>{" "}
                      </span>
                    </h5>
                    <p className="truncate-text ">description</p>
                    <div class="d-flex margin-bitn justify-content-between">
                      <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p>
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      // onClick={() => {
                      //   handleAddItemToCart(item);
                      // }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h4 className="text-center h3  text-bold text-dark">
        <span className="border-bottom-warning    ">Populer</span>
      </h4>

      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start"
      >
        {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card margin-bit product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left h-all">
                    <h5 className="title">
                      title <span className="subtitle">subTitle</span>
                      <span className="prc d-flex justify-content-end ">
                        {" "}
                        price <span className="currency">currency</span>{" "}
                      </span>
                    </h5>
                    <p className="truncate-text ">description</p>
                    <div class="d-flex margin-bitn justify-content-between">
                      <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p>
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      // onClick={() => {
                      //   handleAddItemToCart(item);
                      // }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isLoad ? (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => setLoadData(!loadData)}
          >
            Load More
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary" disabled>
            No More
          </button>
        </div>
      )}
      <div class=" mt-5">
        <h4 className="text-center h3  text-bold text-dark">
          <span className="border-bottom-warning  h-auto py-2 ">
            Related Restourents
          </span>
        </h4>
      </div>
      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-3 mr-3
                    row-cols-xl-3 justify-content-start"
      >
        {RestData.map((Data, i) => {
          return (
            <div key={i} className="col mb-5">
              <div className="card h-100 product-card">
                <Link to={`/Product/{Restourent_id}`}>
                  {console.log("I am Console", Restourent_id)}
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                    width="100%"
                    height="200"
                    alt="..."
                  />
                </Link>
                <div className="card-body p-4 pb-0">
                  <div className="text-left">
                    <h5 className="title">Name</h5>
                    <p>About</p>
                  </div>
                </div>
                <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                  <h4 className="text-center h5  text-bold text-dark">
                    <button
                      className="btn btn-block btn-outline-dark mt-auto btn btn-primary bg-primary custom-button-primary "
                      type="button "
                    >
                      <i className="bi-cart-fill me-1 "></i>
                      Visit Store
                    </button>
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default NavBarComp;