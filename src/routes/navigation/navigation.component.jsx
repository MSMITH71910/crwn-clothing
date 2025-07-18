import { Fragment, useContext } from 'react';
import { Outlet} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  StoreNameHeader,
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  CopyrightFooter
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      {/* Added store name header */}
      <StoreNameHeader>
        <h2> Your Company name Here- Clothing Store</h2>
      </StoreNameHeader>
      
      {/* Your existing navigation code remains untouched */}
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      
      {/* Added copyright footer */}
      <CopyrightFooter>
        © {new Date().getFullYear()} Created by Michael R. Smith - MSmith71910 Studio
      </CopyrightFooter>
    </Fragment>
  );
};

export default Navigation;