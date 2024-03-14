import styled from 'styled-components';

const InnerHeader = () => {
  return (
    <InnerMenu>
      <Inner>
        <Logo>이미지</Logo>
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
        <Search>검색</Search>
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
`;

const Logo = styled.div``;

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

const Search = styled.div``;

export default InnerHeader;
