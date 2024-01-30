import Carousel from "./components/Carousel";

export default function Home() {
  
  return (
  <main>
      <div>
         {/*Testing Bootstrap CSS with 'text-center' className*/}
        <div className="container mt-5">
        <header className="text-center mb-4">
          <h1>Welcome to the Home Page</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>
        </div>
        {/*Carousel */}
        <Carousel/>
    </div>
  </main>
  )
}
