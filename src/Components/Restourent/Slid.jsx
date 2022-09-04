import React,{useState,useEffect} from 'react'
import { Slides } from './RestData'
const Slid = () => {
    const [Slided, setSlided] = useState()
  useEffect(() => {
    setSlided(Slides)
  })
  return (
    <div>
        <div>
        <header className="bg-light py-5 hero-header">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-light">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              
              <ol className="carousel-indicators">
              {  Slided?.map((sld,index)=>{ return(
                <li
                    key={index}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className={`${index === 0 ? "active" : ""}`}
                ></li>
                )})
   } 
              </ol>  <div className="carousel-inner rounded">
             {Slided?.map((sld,index)=>{ return(
             
           
             
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        className="d-block w-100 carousel-img"
                        src={sld.img}
                        alt="index"
                      />
                    </div>
                  );
                })}
              </div>

              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            
          </div>
        </div>
      </header>
    </div>
    </div>
  )
}

export default Slid




