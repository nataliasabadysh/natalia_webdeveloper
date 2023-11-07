import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assuming images are imported or dynamically loaded, placeholder array
import {
  GalleryContainer,
  ImageContainer,
  Title,
  Overlay,
} from './GalleryContainer.styles';

import pic_1 from '../../../public/images/pic_1.png';
import pic_2 from '../../../public/images/pic_2.png';
import pic_3 from '../../../public/images/pic_3.png';
import pic_4 from '../../../public/images/pic_4.png';
import pic_6 from '../../../public/images/pic_6.png';

import pic_7 from '../../../public/images/pic_7.png';
import pic_8 from '../../../public/images/pic_8.png';
import pic_9 from '../../../public/images/pic_9.png';
import pic_10 from '../../../public/images/pic_10.png';
import pic_11 from '../../../public/images/pic_11.png';
import pic_12 from '../../../public/images/pic_12.png';

const images = [
  { src: pic_1, alt: 'Description1' },
  { src: pic_2, alt: 'Description2' },
  { src: pic_3, alt: 'Description1' },
  { src: pic_4, alt: 'Description2' },
  { src: pic_6, alt: 'Description2' },

  { src: pic_7, alt: 'Description1' },
  { src: pic_8, alt: 'Description2' },
  { src: pic_9, alt: 'Description1' },
  { src: pic_10, alt: 'Description2' },
  { src: pic_11, alt: 'Description1' },
  { src: pic_12, alt: 'Description2' },
];

export const PhotoGallery = () => (
  <GalleryContainer>
    {images.map((image, index) => (
      <ImageContainer key={index}>
        <Image src={image.src} alt={image.alt} className="gallery" />
        {index === images.length / 2 - 1 ? (
          <Title>BEST OF ALL TIME</Title>
        ) : (
          <Overlay />
        )}
      </ImageContainer>
    ))}
  </GalleryContainer>
);
