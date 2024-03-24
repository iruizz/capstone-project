import Link from 'next/link';
import Image from 'next/image';
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

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
        <div className="border border-secondary mx-3">
        <Image
          src="/logopurple.png"
          alt="Loras Logo"
          width={100}
          height={50}
        />
        </div>
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
              <li className='nav-item my-1' key={link.name}>
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
                <li className='nav-item my-1'>
                <Link 
                href="/api/auth/signout"
                className='mx-3 nav-link'>
                Logout
                </Link>
              </li>
              </ul>
              </div>
              <Image src="/signoutLogo.jpg" alt="Loras Logo" width={35} height={35}  className="rounded-circle bg-light border border-light" />
            </div>
          </div>
          )}
        </div>
      </nav>
    </div>
  );
}
