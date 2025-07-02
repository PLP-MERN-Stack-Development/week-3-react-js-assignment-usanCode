import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-6 mb-8 ${className}`}>
      {children}
    </div>
  );
}

export default Card;