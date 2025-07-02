import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-12 py-6 flex justify-between items-center shadow-md sticky top-0 z-50 rounded-b-3xl">
      <div className="font-extrabold text-2xl tracking-tight">PLP Task Manager</div>
      <div className="flex space-x-12">
        <a href="/" className="hover:underline px-4 py-2 rounded-lg hover:bg-blue-800 transition">Home</a>
        <a href="/tasks" className="hover:underline px-4 py-2 rounded-lg hover:bg-blue-800 transition">Tasks</a>
        <a href="/about" className="hover:underline px-4 py-2 rounded-lg hover:bg-blue-800 transition">About</a>
      </div>
    </nav>
  );
}

export default Navbar;