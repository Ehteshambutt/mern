import React, { useState, useEffect } from "react";
import { RestData } from "../../Restourent/RestData";
import { Link, useParams } from "react-router-dom";
import Header from "../../UIComponents/Userui/Header";
import Slid from "../../Restourent/Slid";
const MyFavourite = ({ cart, handleRemoveItemFromCart }) => {
  const { Restourent_id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [Restdata, setRestdata] = useState();
  useEffect(() => {
    setRestdata(RestData);
    console.log(RestData);
  }, []);
  return (
    <>
      {" "}
      <Header cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
      <Slid />{" "}
      <h4 className="text-center h3 mt-4 text-bold text-dark">
        <span className="border-bottom-warning    ">Popular</span>
      </h4>
      <div
        style={{ width: "100%" }}
        className="row gx-4 gx-lg-5 row-cols-2  row-cols-md-1 mt-5 ml-3 mr-3
                row-cols-xl-1 justify-content-start "
      >
        {RestData.map((Data, i) => {
          return (
            <div key={i}>
              <div class="card mb-3 ml-5 mr-5" style={{ maxWidth: "100%" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <Link to={`/Product/{Restourent_id}`}>
                      {console.log("I am Console", Restourent_id)}
                      <img
                        className="card-img-top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
                        width="100%"
                        height="200"
                        alt="..."
                      />
                    </Link>{" "}
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      {" "}
                      <div className="card-body p-4 pb-0">
                        <div className="text-left">
                          <h5 className="title">
                            title <span className="subtitle">subTitle</span>
                            <span className="prc d-flex justify-content-end ">
                              {" "}
                              price <span className="currency">
                                currency
                              </span>{" "}
                            </span>
                          </h5>
                          <p>description</p>
                          <div class="d-flex justify-content-between">
                            <p>
                              Quantity <span> Unit</span>
                            </p>
                            <p className="rounded-pill border px-2">category</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <button
                            className="btn btn-block btn-outline-dark mt-auto custom-button-primary"
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyFavourite;
