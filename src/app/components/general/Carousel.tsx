import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="container mb-3 px-0">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-sm-8 ">
          <div id="carouselIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
                <div className="d-flex">
                  <Image
                    src="https://images.unsplash.com/photo-1617886337523-4dcbb15230a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Slide 1"
                    className="d-block img-fluid"
                    width={1200} // Adjust the width as needed
                    height={500} // Adjust the height as needed
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="d-flex" >
                  <Image
                    src="https://images.unsplash.com/photo-1519021228607-ef6e4c22d821?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Slide 2"
                    className="d-block img-fluid"
                    width={1200} // Adjust the width as needed
                    height={500} // Adjust the height as needed
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="d-flex">
                  <Image
                    src="https://images.unsplash.com/photo-1596827414857-1ab11c6f323b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Slide 3"
                    className="d-block img-fluid"
                    width={1200} // Adjust the width as needed
                    height={500} // Adjust the height as needed
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="d-flex">
                  <Image
                    src="https://images.unsplash.com/photo-1634575315719-ea191690f7ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Slide 4"
                    className="d-block img-fluid"
                    width={1200} // Adjust the width as needed
                    height={500} // Adjust the height as needed
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="d-flex">
                  <Image
                    src="https://images.unsplash.com/photo-1634575453050-00542bccdfab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Slide 5"
                    className="d-block img-fluid"
                    width={1200} // Adjust the width as needed
                    height={500} // Adjust the height as needed
                  />
                </div>
              </div>
  </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
