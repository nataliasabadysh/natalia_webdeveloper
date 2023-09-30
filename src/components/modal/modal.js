// https://www.framer.com/motion/animate-presence/#usage

import React, { useState, useRef, useEffect } from 'react';
import Button from '../elements/button';
import styles from './modal.module.css';

export const Modal = ({ isOpen, onOpen, onClose, children }) => {
  const modalRef = useRef();

  // const handleClickOutside = (event) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     onClose();
  //   }
  // };

  // const handleKeyDown = (event) => {
  //     if (event.key === 'Escape' && onOpen) {
  //         onClose();
  //     }
  //   };

  //   useEffect(() => {
  //     if (isOpen) {
  //       document.addEventListener('keydown', handleKeyDown);
  //     }

  //     return () => {
  //       document.removeEventListener('keydown', handleKeyDown);
  //     };
  //   }, [isOpen]);

  return (
    <div
      // onKeyDown={handleKeyDown}
      className={styles.backDrop}
      tabIndex={-1}
      ref={modalRef}
      // onClick={handleClickOutside}
    >
      <div onClick={onClose} />
      <div className={styles.modal}>
        {children}
        <Button onClick={onClose} name="Close" />
      </div>
    </div>
  );
};
