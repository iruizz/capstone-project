export default function FeaturesLive() {
  return (
      <div className="container-fluid bg-black bg-gradient text-white border border-secondary rounded-4">
          <h2 className="py-3 border-bottom">Live Data Features</h2>
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col text-center gap-5">
                  <h3 className="fw-bold mb-5">Pusher WebSockets allow seamless real-time data updates to power the dynamic charts and gauges below.</h3>
               
                  <a href="#" className="btn btn-purple btn-lg mt-4 text-center">Learn More</a>
              </div>
              <div className="col">
                  <div className="row row-cols-1 row-cols-sm-2 g-4">
                      <div className="col d-flex flex-column gap-2">
                          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-purple-gradient fs-4 rounded-3" style={{ width: "2em", height: "2em" }}>
                              <i className="bi bi-thermometer-half"></i>
                          </div>
                          <h4 className="fw-semibold mb-0">Temperatures</h4>
                          <p className="text-body-light">Paragraph of text beneath the heading to explain the heading.</p>
                      </div>
                      <div className="col d-flex flex-column gap-2">
                          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-purple-gradient fs-4 rounded-3" style={{ width: "2em", height: "2em" }}>
                              <i className="bi bi-speedometer2"></i>
                          </div>
                          <h4 className="fw-semibold mb-0">Acceleration</h4>
                          <p className="text-body-light">Paragraph of text beneath the heading to explain the heading.</p>
                      </div>
                      <div className="col d-flex flex-column gap-2">
                          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-purple-gradient fs-4 rounded-3" style={{ width: "2em", height: "2em" }}>
                              <i className="bi bi-geo"></i>
                          </div>
                          <h4 className="fw-semibold mb-0">GPS Tracking</h4>
                          <p className="text-body-light">Paragraph of text beneath the heading to explain the heading.</p>
                      </div>
                      <div className="col d-flex flex-column gap-2">
                          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-purple-gradient fs-4 rounded-3" style={{ width: "2em", height: "2em" }}>
                              <i className="bi bi-speedometer"></i>
                          </div>
                          <h4 className="fw-semibold mb-0">Live Speed</h4>
                          <p className="text-body-light">Paragraph of text beneath the heading to explain the heading.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
