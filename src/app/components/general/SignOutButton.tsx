import Link from "next/link";
import React from "react";

const SignOutButton = () => {
 
    return (
      <li className='nav-item py-2'>
        <Link 
        href="/api/auth/signout?callbackUrl=/"
        className='mx-3 nav-link'>
        Logout
        </Link>
      </li>
    );
};

export default SignOutButton;