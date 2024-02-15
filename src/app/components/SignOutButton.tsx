"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignOutButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <li className='nav-item'>
        <Link 
        href="/api/auth/signout?callbackUrl=/"
        className='mx-3 nav-link'>
          Logout
        </Link>
      </li>
    );
  }
  return (
    <>
    </>
  );
};

export default SignOutButton;