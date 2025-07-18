import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  z-index: 999; /* Ensure it stays above other content but below fixed header/footer */
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 38px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 135%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
// Add these at the bottom of your existing navigation.styles.js
export const StoreNameHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 15px;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }
`;

export const CopyrightFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 15px;
  background: #333;
  color: white;
  z-index: 1000;
  border-top: 1px solid #555;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
`;