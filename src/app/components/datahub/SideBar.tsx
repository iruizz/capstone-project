'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SideBar() {
    const [selectedLink, setSelectedLink] = useState<string | null>(null);

    return (
        <div className="h-100 d-flex border border-secondary flex-column flex-shrink-0 p-3 text-white fw-semibold bg-black bg-gradient rounded-4 position-sticky">
            <Link href="/datahub" className="pb-2 d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <i className="bi bi-segmented-nav icon-size-md mx-4"></i>
                <h2>Data Hub</h2>
            </Link>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item border-bottom border-top ">
                    <Link href="/datahub" className={`nav-link text-purple fs-5 my-2 link-hover ${selectedLink === 'home' ? 'activee' : ''}`} onClick={() => setSelectedLink('home')}>
                        <div className="d-flex align-items-center">
                        <i className="bi bi-graph-up icon-size mx-3"></i>
                            <p className="ml-2 mb-0">Home</p>
                        </div>
                    </Link>
                </li>
                <li className="nav-item border-bottom">
                    <Link href="/datahub/live" className={`nav-link text-purple fs-5 my-2 link-hover ${selectedLink === 'live' ? 'activee' : ''}`} onClick={() => setSelectedLink('live')}>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-activity icon-size mx-3"></i>
                            <p className="ml-2 mb-0">Live Data Visuals</p>
                        </div>
                    </Link>
                </li>
                <li className="nav-item border-bottom">
                    <Link href="/datahub/historic" className={`nav-link text-purple fs-5 my-2 link-hover ${selectedLink === 'historic' ? 'activee' : ''} `} onClick={() => setSelectedLink('historic')}>
                    <i className="bi bi-clock-history icon-size mx-3"></i>
                        Historical Data
                    </Link>
                </li>
                <li className="nav-item border-bottom">
                    <Link href="/datahub" className={`nav-link text-purple fs-5 my-2 link-hover ${selectedLink === 'gps' ? 'activee' : ''} `} onClick={() => setSelectedLink('gps')}>
                    <i className="bi bi-geo-fill icon-size mx-3"></i>
                        Other Tools
                    </Link>
                </li>
                <li className="nav-item border-bottom">
                    <Link href="/datahub" className={`nav-link text-purple fs-5 my-2 link-hover ${selectedLink === 'additional' ? 'activee' : ''}`} onClick={() => setSelectedLink('additional')}>
                    <i className="bi bi-info-square icon-size mx-3"></i>
                    Additional Info
                    </Link>
                </li>
            </ul>
            <div className="d-flex justify-content-center">
            <Image 
        src="/weather.png" 
        alt="Weather Image" 
        width={50} 
        height={50}

    />
        </div>
        <hr/>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/lorasCrest.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>User</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><Link className="dropdown-item" href="/api/auth/signout?callbackUrl=/">Sign Out</Link></li>
                    {/* Other dropdown items */}
                </ul>
            </div>
        </div>
    );
}
