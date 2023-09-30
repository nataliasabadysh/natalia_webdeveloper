'use client';

import React, { useState, useEffect } from 'react';

export const useLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const spinner_element = <div class="">loading ....</div>;

  return {
    loaded,
    spinner_element,
  };
};
