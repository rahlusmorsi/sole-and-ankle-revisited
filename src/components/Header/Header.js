import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, SIZES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">A Vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileAccess>
            <Btn><SearchIcon id="search" /></Btn>
            <Btn><ShopIcon id="shopping-bag" /></Btn>
            <Btn onClick={() => setShowMobileMenu(true)}><MenuIcon id="menu" /></Btn>
          </MobileAccess>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    10.2vw - 6.25rem,
    3rem
  );
  margin: 0px 48px;

  @media(${SIZES.tablet}) {
    display: none;
  }

  & a {
    white-space: nowrap;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileAccess = styled.div`
  display: none;

  @media(${SIZES.tablet}) {
    display: flex;
    justify-content: flex-end;
    gap: 44px;
  }

    @media(${SIZES.phone}) {
    gap: 22px;
  }
`;

const MenuIcon = styled(Icon)``;
const SearchIcon = styled(Icon)``;
const ShopIcon = styled(Icon)``;

const Btn = styled.button`
  background-color: transparent;
  border: 0;
`;

export default Header;
