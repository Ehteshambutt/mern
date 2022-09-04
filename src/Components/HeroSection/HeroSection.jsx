import React from "react";
function HeroSection(props) {
  return (
    <div>
      <header className="bg-light py-5 hero-header">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-light">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                {props?.slider?.map((slide, index) => {
                  return (
                    <li
                      key={index}
                      data-target="#carouselExampleIndicators"
                      data-slide-to={index}
                      class={`${index === 0 ? "active" : ""}`}
                    ></li>
                  );
                })}
              </ol>
              <div class="carousel-inner rounded">
                {props?.slider?.map((slide, index) => {
                  return (
                    <div
                      class={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        class="d-block w-100 carousel-img"
                        src={`/api/uploads/${slide}`}
                        alt="index"
                      />
                    </div>
                  );
                })}
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
