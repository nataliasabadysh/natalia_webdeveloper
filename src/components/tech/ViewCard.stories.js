import React from 'react';
import { ViewCard } from './ViewCard';

export default {
  title: 'Components/TechItem',
  component: ViewCard,
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
