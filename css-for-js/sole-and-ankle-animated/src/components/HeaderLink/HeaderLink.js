import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const HeaderLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden='true'>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  /* Text slide-up effect */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 600ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transform: translateY(-100%);
      transition: transform 300ms;
    }
  }
`;

const MainText = styled(Text)``;

const HoverText = styled(Text)`
  position: absolute;
  top: 100%;
  inset-inline: 0;
  font-weight: ${WEIGHTS.bold};
`;

export default HeaderLink;
