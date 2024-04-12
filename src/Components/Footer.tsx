import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <ListContainer>
        <Lists>
          <ListTitle>Info</ListTitle>
          <List>Store</List>
          <List>Notice</List>
          <List>Recruit</List>
          <List>Service</List>
        </Lists>
        <Lists>
          <ListTitle>Shop</ListTitle>
          <List>Sale</List>
          <List>New</List>
          <List>Coffee</List>
          <List>Tea</List>
        </Lists>
        <Lists>
          <ListTitle>Menu</ListTitle>
          <List>Drink</List>
          <List>Food</List>
          <List>Goods</List>
          <List>Cards</List>
        </Lists>
      </ListContainer>
      <hr />
      <TextContainer>
        <span>홈페이지 이용약관</span>
        <span>개인정보 처리방침</span>
        <span>멤버십 이용약관</span>
      </TextContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: lightgray;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  margin: 30px;
  color: darkorange;
`;

const ListTitle = styled.div`
  font-weight: bold;
  height: 30px;
`;

const List = styled.li`
  list-style: none;
  color: white;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  padding: 5px 0px;

  &:hover {
    color: darkorange;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  font-size: 12px;
`;

export default Footer;
