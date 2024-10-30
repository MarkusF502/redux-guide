import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from "../../redux/user/actions";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart-selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const { products } = useSelector(rootReducer => rootReducer.cartReducer);
  const productsCount = useSelector(selectProductsCount)
  const dispatch = useDispatch()



  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: "Marcos Filipe", email: "marcos@filipe.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())

  }

  return (
    <Styles.Container>
      <Styles.Logo>Markus Shop - Redux</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div>}

        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;