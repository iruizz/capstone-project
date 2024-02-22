export default function News() {
    return (
<main>
<section className="text-light bg-dark bg-gradient mx-5">
  <h1 className="text-center">News & Events</h1>
  <div className="container px-4 py-5" >
    <h2 className="pb-2 border-bottom text-center">Recent Events</h2>
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{  backgroundSize: 'cover' , backgroundImage: `url('https://images.unsplash.com/photo-1698664683348-f9f35b809821?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center me-3">
                <small>Frame Build</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>09/05/23</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundSize: 'cover',  backgroundImage: `url('https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
            <ul className="d-flex list-unstyled mt-auto ">
              <li className="me-auto">
              <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center mx-3">
                <small>RFA Sponsorship</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>11/11/23</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{  backgroundSize: 'cover', backgroundImage: `url('https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center mx-3">
                <small>Setting Up Sensors</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>1/15/24</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{  backgroundSize: 'cover', backgroundImage: `url('https://images.unsplash.com/photo-1579103769354-8796259d8d54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center mx-3">
                <small>Suspension Work</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>1/15/24</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    
    
      
    <h2 className="pb-2 border-bottom text-center">Past Events</h2>
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{  backgroundSize: 'cover' , backgroundImage: `url('https://images.unsplash.com/photo-1698664683348-f9f35b809821?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center me-3">
                <small>First Build</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>09/05/23</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundSize: 'cover',  backgroundImage: `url('https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
            <ul className="d-flex list-unstyled mt-auto ">
              <li className="me-auto">
              <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center mx-3">
                <small>RFA Sponsorship</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>11/11/23</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{  backgroundSize: 'cover', backgroundImage: `url('https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white">
                </img>
              </li>
              <li className="d-flex align-items-center mx-3">
                <small>Setting Up Sensors</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2" ></i>
                <small>1/15/24</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </main>
    );
}