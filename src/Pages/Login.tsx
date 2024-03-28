import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <h2>커피빈입니다.</h2>
      <form>
        <label htmlFor="email">이메일</label>
        <input />
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  text-align: center;
`;

export default Login;
