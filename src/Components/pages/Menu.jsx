import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoad, setIsLoad] = useState(true);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": sessionStorage.getItem("token"),
      },
    };
    axios.get(`api/menuresturent/${page}`, config).then((res) => {
      setMenuItems([...menuItems, ...res.data.menu]);
      if (res.data.page === page) {
        setIsLoad(false);
      } else {
        setPage(res.data.page);
      }
    });
  }, [loadData]);
  return (
    <div class=" px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-11 col-lg-11 col-md-11 col-11 ">
          <h3>Menu Items</h3>
          <p class="text-muted">Now publish your item Is one Click Away</p>

          <div className="container mt-5">
            <div
              className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 
                    row-cols-xl-3 justify-content-start"
            >
              {menuItems.map((item) => {
                return (
                  <div key={item._id} className="col mb-5">
                    <div className="card h-100 product-card">
                      <Link to={`/product/${item._id}`}>
                        <img
                          className="card-img-top"
                          src={`/api/uploads/${item.ImagePlaceholder[0]}`}
                          width="100%"
                          height="200"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body p-4 pb-0">
                        <div className="text-left">
                          <h5>{item.title}</h5>
                          <div className="d-flex justify-content-between">
                            <p className="price">
                              {item.Quantity} <span> {item.Unit}</span>
                            </p>
                            <p className="price">
                              {item.price} <span> {item.currency}</span>
                            </p>
                          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;