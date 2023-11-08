'use client';

import React from 'react';
import { ButtonStyle, LinkStyle } from './Button.styles';

const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
  href,
  target,
  rel,
}) => {
  const btnClass = `btn${primary ? ' btn-primary' : ''} btn-${size}`;

  if (href) {
    return (
      <LinkStyle
        href={href}
        target={target}
        rel={rel}
        style={{ backgroundColor }}
      >
        {label || 'default value'}
      </LinkStyle>
    );
  }

  return (
    <ButtonStyle
      onClick={onClick}
      style={{ backgroundColor }}
      data-testid="btn"
    >
      {label || 'default value'}
    </ButtonStyle>
  );
};

export default Button;
