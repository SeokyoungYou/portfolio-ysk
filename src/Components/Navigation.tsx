import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const NavBar = styled(motion.div)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: ${(props) => props.theme.navColor};
`;

const Item = styled.div`
  color: rgba(214, 214, 214, 1);
  cursor: pointer;
  margin-right: 20px;
  font-size: 14px;
  :hover {
    color: white;
  }
`;

function Nav() {
  return (
    <NavBar>
      <Item>
        <Link to={"/"}>Home</Link>
      </Item>
      <Item>
        <Link to={"/projects"}>Projects</Link>
      </Item>
      <Item>
        <Link to={"/profile"}>Profile</Link>
      </Item>
    </NavBar>
  );
}

export default Nav;
