import React from 'react';

import Header from './header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};
