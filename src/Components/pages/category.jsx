<div className="position-absolute margn mt-4 align-items-center top-0 start-0 translate-middle card product-card">
        <div className=" mx-auto  ">
          <Link to={`/Product/{id}`}>
            {console.log("I am Console", id)}
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQbCFerJXnF8JbKubGULgiDOFwasoBt143Q&usqp=CAU"
              width="100%"
              height="200"
              alt="..."
            />
          </Link>
          <div className="card-body  pb-0">
            <div className="text-left">
              <h6 className="title">Name </h6>          
                <p>About</p>
                <div class="d-flex justify-content-between"></div>
            </div>
          </div>
                </div>
      </div>