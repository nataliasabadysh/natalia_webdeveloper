import React from 'react';
import Tech from './tech';

export default {
  title: 'View/TechStack',
  component: Tech,
};

const Template = args => <Tech {...args} />;

export const Default = Template.bind({});
