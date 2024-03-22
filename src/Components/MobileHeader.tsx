import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';
import { FaShoppingCart } from 'react-icons/fa';

const MobileHeader = () => {
  return (
    <Header>
      <TiThMenu />
      <HeaderText>COFFEE BEAN ☕️ </HeaderText>
      <UserFunction>
        <FaShoppingCart />
      </UserFunction>
    </Header>
  );
};

const HeaderText = styled.h3``;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const UserFunction = styled.div`
  display: flex;
  gap: 10px;
`;

export default MobileHeader;
