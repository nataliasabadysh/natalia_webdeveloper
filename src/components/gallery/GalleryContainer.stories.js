import React from 'react';
import { PhotoGallery } from './GalleryContainer';

export default {
  title: 'View/PhotoGallery',
  component: PhotoGallery,
};

const Template = args => <PhotoGallery {...args} />;

export const Default = Template.bind({});

Default.args = {};
