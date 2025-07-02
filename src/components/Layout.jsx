

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-1 flex justify-center items-start py-8 px-4">
        <div className="w-full max-w-2xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;