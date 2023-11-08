import React from 'react';
import { ViewCard } from './ViewCard';

export default {
  title: 'Components/TechItem',
  component: ViewCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/MKP2JuetmatrxFegnWrLPH/Natalia-Sabadysh---Projector?type=design&node-id=2650-11&mode=design&t=1pBBAjko1XqJpIdH-4',
    },
  },
};

const Template = args => <ViewCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Sample Card',
  color: '#bada55',
  url: 'https://example.com',
};

export const JS_Card = Template.bind({});
JS_Card.args = {
  ...Default.args,
  color: '#FFCC4A',
  name: 'JavaScript',
};

export const GraphQL_Card = Template.bind({});
GraphQL_Card.args = {
  ...Default.args,
  color: '#CC46A2',
  name: 'GraphQL',
};
