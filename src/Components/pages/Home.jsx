import React, { useEffect } from "react";
import axios from "axios";
import Header from "../UIComponents/Userui/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
function Home({ cart, handleAddItemToCart, handleRemoveItemFromCart }) {
  const [menuItems, setMenuItems] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoad, setIsLoad] = useState(true);
  const [loadData, setLoadData] = useState(false);
  const [cartItems, setCartItems] = useState("All");
  const [assets, setAssets] = useState([]);
  const filterCategory = (categitem) => {
    setCartItems(categitem);
  };
  useEffect(() => {
    axios.get(`/api/menu/${page}`).then((res) => {
      setMenuItems([...menuItems, ...res.data.menu]);
      if (res.data.page === page) {
        setIsLoad(false);
      } else {
        setPage(res.data.page);
      }
    });

    axios
      .get("/api/setting/assets")
      .then((res) => {
        console.log("logogggg", res.data);
        setAssets(res.data);
      })
      .catch((err) => {});
  }, [loadData]);
  return (<>
    <div>
      <Header
        cart={cart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        logo={assets && assets[0]?.Logo}
      />
      
      <HeroSection slider={assets && assets[0]?.Slider} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-1">
          <button
            className=" btn btn-light mx-2"
            onClick={(e) => {
              filterCategory("All");
            }}
          >
            All
          </button>
          <button
            className=" btn btn-light  mx-2"
            onClick={(e) => {
              filterCategory("Breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className=" btn btn-light mx-2"
            onClick={(e) => {
              filterCategory("Lunch");
            }}
          >
            Lunch
          </button>
          <button
            className=" btn btn-light mx-2 my-3"
            onClick={(e) => {
              filterCategory("Dinner");
            }}
          >
            Dinner
          </button>
          <div
            className="row gx-4 gx-lg-5  row-cols-2 row-cols-md-3 
                    row-cols-xl-3 justify-content-start "
          >
            {menuItems.map((item, index) => {
              return cartItems === item.category || cartItems === "All" ? (
                <div key={index} className="col  mb-5">
                  <div className="card margin-bit product-card">
                    <Link to={`/product/${item._id}`}>
                      <img
                        className="card-img-top m h-card"
                        src={`/api/uploads/${item.ImagePlaceholder[0]}`}
                        width="100%"
                        height="200"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body  mb-2 p-4 pb-0">
                      <div className="text-left h-all">
                        <h5 className="title">
                          {item.title}{" "}
                          <span className="subtitle">{item.subTitle}</span>
                          <span className="prc d-flex justify-content-end ">
                            {" "}
                            {item.price}{" "}
                            <span className="currency">{item.currency}</span>{" "}
                          </span>
                        </h5>
                        <div className="text-dark  ">
                          <p className="truncate-text">{item.description}</p>
                          <div class="d-flex margin-bitn justify-content-between">
                            <div>
                              <p className="price text-dark margin-q">
                                <p className="">{item.Quantity} / <span className=""> {item.Unit}</span></p>
                              </p>
                            </div>
                            <p className=" margin-r rounded-pill border px-2">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer margin-bitn p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button
                          className="btn btn-block btn-outline-dark mt-auto custom-button-primary"
                          onClick={() => {
                            handleAddItemToCart(item);
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              );
            })}
          </div>
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
      </section>

    </div>
   

    </>
  );
}
export default Home;
