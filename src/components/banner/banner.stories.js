import React from 'react';
import Banner from './banner';

export default {
  title: 'View/Banner',
  component: Banner,
};

const Template = args => <Banner {...args} />;

export const Default = Template.bind({});
