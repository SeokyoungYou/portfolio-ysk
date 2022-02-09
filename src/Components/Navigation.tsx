import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: grey;
`;
const Item = styled.div``;
function Nav() {
  return (
    <NavBar>
      <Item>
        hello
        <Link to={"/"} />
      </Item>
    </NavBar>
  );
}

export default Nav;
