import { useSetAtom } from 'jotai';
import { SideMenuAtom } from '../Atom/SideMenuAtom';
import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SideMenu from './SideMenu';

const MobileHeader = () => {
  const navigate = useNavigate();
  const setIsOpen = useSetAtom(SideMenuAtom);

  const toggleSideMenu = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <Header>
      <MenuContainer onClick={toggleSideMenu}>
        <TiThMenu />
      </MenuContainer>
      <HeaderText onClick={() => navigate('/')}>COFFEE BEAN ☕️ </HeaderText>
      <UserFunction>
        <FaShoppingCart />
      </UserFunction>
      {<SideMenu />}
    </Header>
  );
};

const HeaderText = styled.h3`
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
`;

const MenuContainer = styled.div`
  cursor: pointer;
`;

const UserFunction = styled.div`
  display: flex;
  gap: 10px;
`;

export default MobileHeader;
