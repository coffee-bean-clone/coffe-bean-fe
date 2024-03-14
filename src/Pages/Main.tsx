import styled from 'styled-components';

const Main = () => {
  return (
    <div>
      <Caraousel src="src/assets/img/md_PC.jpg" />
    </div>
  );
};

const Caraousel = styled.img`
  display: block;
  margin: 0 auto;
  width: 100vw;
`;

export default Main;
