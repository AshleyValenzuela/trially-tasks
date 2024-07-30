import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="layout">
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>Trially Task Management</p>
    </footer>
  </div>
);

export default Layout;
