import React from 'react';
import UIButton from './Button';
import { LinkStyle } from './Button.styles';
import { userEvent, within } from '@storybook/testing-library';
import { expect, screen } from '@storybook/jest';

export default {
  title: 'Style Guide/Button',
  component: UIButton,
};

export const Default = () => (
  <LinkStyle
    href="https://examplle.com"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    Submit
  </LinkStyle>
);

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const btn_element = canvas.queryByTestId('btn');

  const linkElement = canvas.getByRole('link', { name: 'Submit' });

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href');
  const submitButtons = await canvas.findAllByText('Submit');
  expect(submitButtons).toHaveLength(1);

  await expect(canvas).not.toBeNull();
  await canvas.findByText('Submit');
};
