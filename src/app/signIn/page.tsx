import Login from "@/app/components/Login";
import Features from '@/app/components/Features';

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  return (
    <main>
    <div className="container mt-5">
      <div className="row justify-content-center text-center ">
        <p className="lead w-80 lh-lg">Under the hood, a sophisticated Data Telemetry System captures Live and Historical data
         from the Dune Buggy, providing valuable insights into its performance and operation. 
         While this system is currently only accessible to select individuals and team members, 
         its insights are crucial for optimizing the vehicle and pushing the boundaries of performance. 
         The captured data offers a detailed picture of the buggy's behavior both in real-time and over time, paving the way for future advancements and wider access.
         </p>
      </div>
      <Features />
    <Login
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
    </div>
    </main>
  );
};

export default SignInPage;