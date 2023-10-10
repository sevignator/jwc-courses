/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <SubWrapper>
          <Filler />
          <Nav>
            <NavLink href='/sale'>Sale</NavLink>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLink href='/men'>Men</NavLink>
            <NavLink href='/women'>Women</NavLink>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLink href='/collections'>Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href='/terms'>Terms and Conditions</SubLink>
            <SubLink href='/privacy'>Privacy Policy</SubLink>
            <SubLink href='/contact'>Contact Us</SubLink>
          </Footer>
        </SubWrapper>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--color-backdrop);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 500ms both ease-out;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 300ms both cubic-bezier(0.17, 0.24, 0.25, 1);
    animation-delay: 150ms;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 500ms both;
    animation-delay: 300ms;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
