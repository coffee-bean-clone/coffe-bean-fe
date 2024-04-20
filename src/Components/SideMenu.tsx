import { useAtom, useAtomValue } from 'jotai';
import { SideMenuAtom } from '../Atom/SideMenuAtom';
import styled, { css } from 'styled-components';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IsLogined } from '../Atom/IsLogined';

interface SideMenubarProps {
  $isOpen: boolean;
}

const SideMenu = () => {
  const isLogin = useAtomValue(IsLogined);

  const [isOpen, setIsOpen] = useAtom(SideMenuAtom);
  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsOpen(isOpen => !isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <SideMenubar ref={sideMenuRef} $isOpen={isOpen}>
      <Lists>
        <ListTitle>User</ListTitle>
        {isLogin ? <List to="/">Logout</List> : <List to="/login">Login</List>}
        <List to="">Memebers</List>
        <List to="">Point</List>
        <List to="">Cart</List>
      </Lists>
      <Lists>
        <ListTitle>Info</ListTitle>
        <List to="/store">Store</List>
        <List to="">Notice</List>
        <List to="/recruit">Recruit</List>
        <List to="/service">Service</List>
      </Lists>
      <Lists>
        <ListTitle>Shop</ListTitle>
        <List to="">Sale</List>
        <List to="">New</List>
        <List to="">Coffee</List>
        <List to="">Tea</List>
      </Lists>
      <Lists>
        <ListTitle>Menu</ListTitle>
        <List to="">Drink</List>
        <List to="">Food</List>
        <List to="">Goods</List>
        <List to="">Cards</List>
      </Lists>
      <CloseBtn onClick={toggleSidebar}>Close</CloseBtn>
    </SideMenubar>
  );
};

const SideMenubar = styled.div<SideMenubarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200px;
  background-color: black;
  opacity: 0.9;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${props =>
    !props.$isOpen &&
    css`
      display: none;
    `}
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
  text-align: center;
`;

const ListTitle = styled.div`
  font-weight: bold;
  height: 30px;
`;

const List = styled(Link)`
  list-style: none;
  color: white;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  padding: 5px 0px;
  text-decoration: none;

  &:hover {
    color: darkorange;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  padding: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export default SideMenu;
