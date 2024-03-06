import Link from 'next/link';
import Image from 'next/image';
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
  const session = await getServerSession(options);
    {/* Links to display on navbar (REQ-TAG)*/}
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about'},
    { name: 'News & Events', href: '/news'},
    { name: 'Sponsors', href: '/sponsors'},
    { name: 'Data Hub', href: '/datahub'}
  ];

  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="50">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black bg-gradient">
        {/* Logo Image (REQ-TAG)*/}
        <Image
          src="/navbarLogo.png"
          alt="Loras Logo"
          width={80}
          height={50}
          className="mx-3"
        />

        <span className="navbar-brand mx-3">Loras Baja</span>

        {/* Button for collapsing navbar with bootstrap icon(REQ-TAG)*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"  
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Div targeted by button above to create collapse effect*/}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav"> {/* Add justify-content-between className */}
          <ul className="navbar-nav">
            {/* Loop through array of links and add each to navbar*/}
            {links.map((link, index) => ( 
              <li className='nav-item py-2' key={link.name}>
                  <Link 
                  href={link.href} 
                  className='mx-3 nav-link'>
                  {link.name}
                  </Link>
              </li>
            ))}
          </ul>
          
          {/* Wrap the SignOutButton component with a div having container, row, and justify-content-center classes */}
          
          {session && (
          <div>
            <div className="d-flex align-items-center" style={{marginRight: '1rem'}}>
              <div>
                <ul className="navbar-nav">
              <SignOutButton />
              </ul>
              </div>
              <Image src="/lorasCrest.png" alt="Loras Crest" width={32} height={32}  className="rounded-circle bg-light border border-white ml-2" />
            </div>
          </div>
          )}
        </div>
      </nav>
    </div>
  );
}
