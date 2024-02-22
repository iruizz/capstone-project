import React from 'react';
import Carousel from "./components/general/Carousel";
import Image from 'next/image';

export default function Home() {
  return (
      <main role="main" className="mx-5 mb-3 pb-3 bg-dark bg-gradient">
      <div className="justify-content-center">
        <Carousel />
      </div>
      <div className="container marketing text-light">
        <hr className="featurette-divider"></hr>

         {/* Welcome to Loras Baja Section */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Welcome to <span className="text-secondary">Loras Baja</span></h2>
            <p className="lead">Welcome to Loras Baja, where innovation meets excellence. Join us on an exciting journey through the world of off-road racing.</p>
            <p className="lead mt-4">Loras College Engineering Students are making history by participating in competitions for the first time in the school's history. This initiative is not only fostering a spirit of innovation and competitiveness but also encouraging students to apply their theoretical knowledge in practical settings. By engaging in these competitions, engineering students are pushing the boundaries of their skills and gaining invaluable hands-on experience that will shape their future careers.</p>
          </div>
          <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto card-content" alt="400x400" style={{width: '400px', height: '400px'}} src="https://fakeimg.pl/400x400/f9f2fa/150317?text=Image&font=bebas"/>
          </div>
        </div>

    <hr className="featurette-divider"></hr>

    <div className="row featurette">
    <div className="col-md-12 order-md-2">
    <Image
      src="/building.jpg" 
      width={500}
      height={300}
      alt="Dune Buggy"
      className="img-fluid mx-auto d-block card-content"
      layout="responsive"
    />
    </div>
    </div>
    
    <hr className="featurette-divider"></hr>

        {/* Dune Buggy and Data Telemetry System Section */}
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Dune Buggy and Data Telemetry System<span className="text-secondary"> Built by Loras Baja Team</span></h2>
            <p className="lead">Our cutting-edge dune buggy, engineered by the brilliant minds of Loras Computer Science Students, comes equipped with a state-of-the-art data telemetry system. Developed in collaboration with computer science and engineering students, this system provides real-time insights into vehicle performance, ensuring optimal racing conditions.</p>
            <p className="lead">Access the Data Telemetry System now to unlock the power of data-driven racing.</p>
            <p><small>*Note authentication is required</small></p>
            <a href="your-data-telemetry-page-url" className="btn btn-primary">Access Data Hub</a>
          </div>
          <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto card-content" alt="400x400" style={{width: '400px', height: '400px'}} src="https://fakeimg.pl/400x400/f9f2fa/150317?text=Image&font=bebas"/>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        {/* Sponsors Section */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Our Sponsors <span className="text-secondary">Supporting Our Journey</span></h2>
            <p className="lead">We extend our heartfelt gratitude to our sponsors who make our dreams a reality. Their unwavering support fuels our passion for excellence and propels us toward victory.</p>
            <p className="lead">Join us in celebrating the invaluable contributions of our sponsors.</p>
          </div>
          <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto card-content" alt="400x400" style={{width: '400px', height: '400px'}} src="https://fakeimg.pl/400x400/f9f2fa/150317?text=Image&font=bebas"/>
          </div>
        </div>

      </div>
    </main>
  );
}
