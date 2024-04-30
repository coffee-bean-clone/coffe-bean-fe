import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IsLogined } from '../Atom/IsLogined';
import { useAtomValue } from 'jotai';
import { UserDataType } from '../util/UserDataType';
import { UserInfo } from '../Atom/UserInfo';

const UtillMenu = () => {
  const isLogin = useAtomValue(IsLogined);
  const userData = useAtomValue<UserDataType | null>(UserInfo);

  const userName = userData?.name || '';

  return (
    <UtillHeader>
      <Lists>
        <List>
          {isLogin ? (
            <Menu to="/">안녕하세요, {userName}님!</Menu>
          ) : (
            <Menu to="/login">로그인</Menu>
          )}

          <Menu to="/mypage">마이페이지</Menu>
          <Menu to="/store">매장 찾기</Menu>
          <Menu to="/recruit">채용 정보</Menu>
          <Menu to="/heavybuying">단체 및 기업구매</Menu>
          <Menu to="/service">고객 서비스</Menu>
        </List>
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
  align-items: center;
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

export default UtillMenu;
