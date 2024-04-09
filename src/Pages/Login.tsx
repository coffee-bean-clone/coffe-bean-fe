import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <LoginForm>
        <h4>Login</h4>
        <Form>
          <InfoInput>
            <Info>
              <Label htmlFor="email">이메일</Label>
              <Input id="email" placeholder="이메일을 입력하세요." type="email" />
            </Info>
            <Info>
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" placeholder="비밀번호를 입력하세요." type="password" />
            </Info>
          </InfoInput>
          <Btns>
            <LoginBtn type="submit">로그인</LoginBtn>
            <JoinBtn onClick={() => navigate('/join')}>회원가입</JoinBtn>
          </Btns>
        </Form>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  text-align: center;
`;

const LoginForm = styled.div`
  padding: 50px 0;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 450px;
  padding: 30px 0px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const Label = styled.label`
  text-align: left;
  width: 120px;

  @media only screen and (max-width: 767px) {
    width: 100px;
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 5px 0px;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

const InfoInput = styled.div``;

const LoginBtn = styled.button`
  border: none;
  background-color: orange;
  padding: 10px;
  color: white;
  width: 100%;

  &:hover {
    background-color: darkorange;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

const JoinBtn = styled.button`
  border: none;
  background-color: orange;
  padding: 10px;
  color: white;
  width: 100%;

  &:hover {
    background-color: darkorange;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px;

  @media only screen and (min-width: 767px) {
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
  }
`;

export default Login;
