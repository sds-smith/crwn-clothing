import { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { signOutStart } from '../../store/user/user.action'
import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.styles'

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const [isHover, setIsHover] = useState(false)

  const dispatch = useDispatch()
  const signOutUser = () => {
    setIsHover(false)
    dispatch(signOutStart())
  }

  const handleHover = (e) => {
    setIsHover(!isHover)
  }
    
    return (
      <Fragment>
        <NavigationContainer >
          <LogoContainer to='/'>
            <CrwnLogo />
          </LogoContainer>  

          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>

            { 
              currentUser ? (
                <NavLink as='span' onMouseEnter={handleHover} onMouseOut={handleHover} onClick={signOutUser} >{isHover ? 'SIGN OUT' : currentUser.displayName }</NavLink>
              ) :
              (
                <NavLink to='/auth'>
                    SIGN IN
                </NavLink>
              )
            }
            <CartIcon />
          </NavLinks>
          { isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation