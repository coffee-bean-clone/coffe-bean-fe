import styled from 'styled-components';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';

const InnerHeader = () => {
  return (
    <InnerMenu>
      <Inner>
        <BiSolidCoffeeBean size={20} />
        <Menus>
          <ul>
            <Menu href="">BUY ONLINE</Menu>
          </ul>
          <ul>
            <Menu href="">MEMBER`S CLUB</Menu>
          </ul>
          <ul>
            <Menu href="">MENU</Menu>
          </ul>
          <ul>
            <Menu href="">STORE & 서비스</Menu>
          </ul>
          <ul>
            <Menu href="">THE COFFEE BEAN</Menu>
          </ul>
        </Menus>
        <FaSearch />
      </Inner>
    </InnerMenu>
  );
};

const InnerMenu = styled.div`
  background-color: white;
  border-bottom: 1px solid lightgrey;
  padding: 40px;
  width: 100vw;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

const Menu = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
`;

export default InnerHeader;
