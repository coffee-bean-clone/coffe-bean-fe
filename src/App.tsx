import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Mypage from './Pages/Mypage';
import Store from './Pages/Store';
import Recruit from './Pages/Recruit';
import HeavyBuying from './Pages/HeavyBuying';
import Service from './Pages/Service';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/heavybuying" element={<HeavyBuying />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
