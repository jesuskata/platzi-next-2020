/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';

// NextJS
import Link from 'next/link';

export const NavBar = () => (
  <nav>
    <menu>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </menu>
  </nav>
);
