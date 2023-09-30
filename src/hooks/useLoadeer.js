'use client';

import React, { useState, useEffect } from 'react';

export const useLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  // useEffect(()=> {
  //   loaded ? document.querySelector('body').classList.add('loading')
  //   : document.querySelector('body').classList.remove('loading')
  // }, [loaded])

  const spinner_element = <div class="">loading ....</div>;

  return {
    loaded,
    spinner_element,
  };
};
