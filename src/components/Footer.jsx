
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6 text-center rounded-t-3xl mt-8">
      &copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.
    </footer>
  );
}

export default Footer;