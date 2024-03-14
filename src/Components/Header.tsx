import { useState, useEffect } from 'react';
import styled from 'styled-components';
import UtillMenu from './UtillMenu';
import InnerHeader from './InnerHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMenuComponent = () => {
    if (screenWidth <= 1200) {
      return <MobileHeader />;
    } else if (screenWidth > 1200) {
      return (
        <DeskTopHeader>
          <UtillMenu />
          <InnerHeader />
        </DeskTopHeader>
      );
    }
  };

  return <HeaderBar>{getMenuComponent()}</HeaderBar>;
};

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeskTopHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Header;
