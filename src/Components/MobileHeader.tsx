import styled from 'styled-components';

const MobileHeader = () => {
  return (
    <Header>
      <img src="src/assets/img/btn_menu.svg" />
      <div>로고</div>
      <UserFunction>
        <img src="src/assets/img/ico_user_info_w_off_m.png" width={30} height={30} />
        <img src="src/assets/img/ico_bag_m.png" width={30} height={30} />
      </UserFunction>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const UserFunction = styled.div`
  display: flex;
  gap: 20px;
`;

export default MobileHeader;
