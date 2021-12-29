/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <Button onClick={onDismiss}><Icon id="close" /></Button>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: linear-gradient(var(--color-primary), var(--color-secondary));
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 15%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const Button = styled.nav`
  align-self: flex-end;
  background: transparent;
  border: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  & a {
    color: var(--color-gray-900);
    font-weight: var(--weight-medium);
    text-decoration: none;
    text-transform: uppercase;
  
    &[href="/sale"] {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  & a {
    color: var(--color-gray-700);
    font-weight: var(--weight-bold);
    text-decoration: none;
  }
`;

export default MobileMenu;
