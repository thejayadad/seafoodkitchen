import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-t-4 border-orange border-solid rounded-full animate-spin h-16 w-16"></div>
    </div>
  );
};

export default LoadingSpinner;
