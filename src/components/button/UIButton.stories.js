import React from 'react';
import UIButton from './UIButton';
import { LinkStyle } from './UIButton.styles';

export default {
  title: 'Style Guide/UIButton',
  component: UIButton,
};

export const Default = () => (
  <LinkStyle
    href="https://drive.google.com/file/d/1nIUuQNFWVcjX2Dne9_Tstd69AlhZ7l3E/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    CV
  </LinkStyle>
);
