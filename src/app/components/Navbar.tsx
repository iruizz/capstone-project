import Link from 'next/link';
import Image from 'next/image';
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Navbar() {
  const session = await getServerSession(options);
    {/* Links to display on navbar (REQ-TAG)*/}
  const links = [
    { name: 'Home', href: '/' },
    { name: 'News & Events', href: '/news'},
    { name: 'Sponsors', href: '/sponsors'},
    { name: 'Data Hub', href: '/datahub'},
    { name: 'About', href: '/about'},
  ];

  return (
    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-black bg-gradient">
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Loop through array of links and add each to navbar*/}
          {links.map((link, index) => ( 
            <li className='nav-item' key={link.name}>
                <Link 
                href={link.href} 
                className='mx-3 nav-link'>
                {link.name}
                </Link>
            </li>
          ))}
        
        {/* Logout link aligned to the right */}
        {session && (
            <li className="nav-item d-flex justify-content-end">
            <Link
              href="/api/auth/signout?callbackUrl=/"
              className="mx-3 nav-link text-purple"
            >
              Logout
            </Link>
          </li>
        )}
        </ul>
      </div>
    </nav>
  );
}
