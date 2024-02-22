import Login from "@/app/components/auth/Login";
import Features from '@/app/components/datahub/Features';

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  return (
    <main>
    <div className="container my-5">
      <div className="row justify-content-center text-center ">
        <p className="lead w-80 lh-lg text-light fs-4 fw">Under the hood, a sophisticated Data Telemetry System captures Live and Historical data
         from the Dune Buggy, providing valuable insights into its performance and operation. 
         While this system is currently only accessible to select individuals and team members, 
         its insights are crucial for optimizing the vehicle and pushing the boundaries of performance. 
         The captured data offers a detailed picture of the buggy&apos;s behavior both in real-time and over time, paving the way for future advancements and wider access.
         </p>
      </div>
      <div className="container-fluid">
      <div className="row">
        {/* Login form taking up half of the page */}
        <div className="col-md-6">
          <Login
            error={props.searchParams?.error}
            callbackUrl={props.searchParams?.callbackUrl}
          />
        </div>
        {/* Text taking up the other half of the page */}
        <div className="col-md-6 text-light">
          <div className="container my-5 mx-4">
          <h1 className="text-center">Learn More</h1>
            <p className="lead lh-lg fs-4 fw text-center">
              Beyond this screen are many feautures implemented into the Loras BAJA Data Telemetry System.
            </p>
            <ul className="lead lh-lg fs-4 fw">
                <li>Real Time Sensor Data using WebSockets</li>
                <li>Charts & Gauges to Visualize Data</li>
                <li>Real Time GPS Tracking using Google Maps API</li>
                <li>Other data derived from different sensor value</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <Features />
    </div>
    </main>
  );
};

export default SignInPage;