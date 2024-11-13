import React from 'react'
import Link from 'next/link'; // Import Link from Next.js
import '../app/globals.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/map">Map</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;