import './App.css';
import Header from './Components/Header';
import styled from 'styled-components';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Mypage from './Pages/Mypage';
import Store from './Pages/Store';
import Recruit from './Pages/Recruit';
import HeavyBuying from './Pages/HeavyBuying';
import Service from './Pages/Service';
import Join from './Pages/Join';
import Footer from './Components/Footer';

function App() {
  const Up = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/heavybuying" element={<HeavyBuying />} />
          <Route path="/service" element={<Service />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <UpButtonWrapper>
          <UpButton to="#" onClick={Up}>
            ⬆
          </UpButton>
        </UpButtonWrapper>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 999;
`;

const UpButtonWrapper = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 50;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 0 0 1px #dadcdf, 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpButton = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
`;
