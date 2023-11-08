'use client';
// core
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// components
import Banner from '../components/banner/banner';
import About from '../components/about/about';
import Clients from '../components/clients/clients';
import Projects from '../components/projects/project';
import Tech from '../components/tech/tech';
import Contact from '../components/contact/contact';
import Circle from '../components/elements/contact_circle';
import { TeamBuildings, HobbyList } from '../components/about/hobby_list';
import { Form } from '../components/form/form';
import { Modal } from '../components/modal/modal';
import { Animation } from '../components/animation/animation';

// hooks
import { useLoader } from '../hooks/useLoadeer';
import { PhotoGallery } from '../components/gallery/GalleryContainer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const spinner_element = <div className="">.</div>;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showModalJsx = isModalOpen && (
    <Modal onClose={closeModal} isOpen={isModalOpen}>
      <Form onSubmit={closeModal} />
    </Modal>
  );

  return (
    <>
      {/* {loaded ? null : <div className="loading"> {spinner_element}</div>} */}
      <main className="container">
        <Banner />

        <About />

        <Clients />
        <Projects />

        <HobbyList />
        <PhotoGallery />
        <div>
          <h2 className="section_title">tech stack:</h2>
        </div>

        <Tech />

        <Contact onClick={openModal} />
        {loaded ? (
          <div onClick={openModal}>
            <Circle />
          </div>
        ) : null}
        {showModalJsx}
        <TeamBuildings />
      </main>
    </>
  );
}
