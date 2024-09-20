import React, { useState, useEffect } from 'react';

export function useWindowDimension() {
  const [newWidth, setNewWidth] = useState([
    window.innerWidth
  ]);
  useEffect(() => {
    const delayedResizeHandler = delay(() => {
      console.log('***** delayed resize');
      if (Math.abs(window.innerWidth - newWidth) >= 100){
        setNewWidth([window.innerWidth]);
      }
    }, 200); // 200ms
    window.addEventListener('resize', delayedResizeHandler);
    return () => window.removeEventListener('resize', delayedResizeHandler);
  }, []); // Note this empty array. this effect should run only on mount and unmount
  return newWidth;
}

function delay(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}