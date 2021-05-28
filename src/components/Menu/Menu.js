import {
  MenuContainer,
  MenuItem,
  MenuLink,
  NavigationBar,
  Title,
} from "./styled";

const Menu = ({ cartCount }) => {
  return (
    <NavigationBar>
      <MenuLink to="/" nounderline="true">
        <Title>Shopping</Title>
      </MenuLink>
      <MenuContainer>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/cart">
            Cart<span>{cartCount ? `(${cartCount})` : ""}</span>
          </MenuLink>
        </MenuItem>
      </MenuContainer>
    </NavigationBar>
  );
};

export default Menu;
