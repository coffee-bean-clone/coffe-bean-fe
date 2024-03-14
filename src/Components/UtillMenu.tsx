import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UtillMenu = () => {
  return (
    <UtillHeader>
      <Lists>
        <List>
          <Menu to="/login">로그인</Menu>
          <Menu to="/mypage">마이페이지</Menu>
          <Menu to="/store">매장 찾기</Menu>
          <Menu to="/recruit">채용 정보</Menu>
          <Menu to="/heavybuying">단체 및 기업구매</Menu>
          <Menu to="/service">고객 서비스</Menu>
        </List>
        <CoffeebeanIcon>
          <img src="src/assets/img/coffeebean_icon.png" />
        </CoffeebeanIcon>
      </Lists>
    </UtillHeader>
  );
};

const UtillHeader = styled.div`
  font-size: 14px;
  width: 100vw;
  margin: 0 auto;
  background-color: #efefef;
`;

const Lists = styled.ul`
  line-height: 40px;
  display: flex;
  float: right;
  margin-right: 5%;
`;

const List = styled.li`
  list-style: none;
  padding-right: 20px;
`;

const Menu = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding-right: 15px;
`;

const CoffeebeanIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  background-color: #401700;
`;

export default UtillMenu;
