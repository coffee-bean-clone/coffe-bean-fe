import './App.css';
import Header from './Components/Header';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Mypage from './Pages/Mypage';
import Store from './Pages/Store';
import Recruit from './Pages/Recruit';
import HeavyBuying from './Pages/HeavyBuying';
import Service from './Pages/Service';
import Join from './Pages/Join';

function App() {
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
      </Wrapper>
      <Footer>footer</Footer>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh; /* 최소 높이 설정 */
  position: relative; /* Wrapper를 relative로 설정 */
  padding-bottom: 50px; /* Footer 높이만큼 Wrapper의 하단 패딩 추가 */
  z-index: 999;
`;

const Footer = styled.div`
  background-color: lightgray;
`;
