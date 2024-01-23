import Link from 'next/link';
import Image from 'next/image';

export default async function Navbar() {
    {/* Links to display on navbar (REQ-TAG)*/}
  const links = [
    { name: 'Home', href: '/' },
    { name: 'News & Events', href: '/news'},
    { name: 'Sponsors', href: '/sponsors'},
    { name: 'Data Hub', href: '/datahub'},
    { name: 'About', href: '/about'},
  ];

  return (
    <header>
    <nav style={{ zIndex: 1 }} className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark ">
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

          {/* Conditional rendering of logout button, only shows up if authenticated currently no auth setup so always show (REQ-TAG)*/}
          {true && (
            <li className="nav-item">
              <Link href="#" className="mx-3 nav-link">
                Logout
              </Link>
            </li>
          )}

        </ul>
      </div>
    </nav>
    </header>
  );
}
