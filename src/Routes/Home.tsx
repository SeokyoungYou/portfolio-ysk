import styled from "styled-components";
import Nav from "../Components/Navigation";
import RowProjects from "../Components/RowProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.white};
`;
const CategoryBar = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const Categories = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  height: 100px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 99;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const CategoryScript = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 12px;
  transform-origin: top;
  z-index: -1;
`;
const CategoriesVariants = {
  initial: {
    x: window.outerWidth * 0.3,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};
const CategoryBarVariants = {
  initial: {
    y: -30,
    backgroundColor: "#f5f5f7",
    color: "#f5f5f7",
    transition: {
      // duration: 0.3,
    },
  },
  animate: {
    y: 0,
    backgroundColor: "#0071e3",
    transition: {
      duration: 1.5,
    },
    transitionEnd: {
      backgroundColor: "#f5f5f7",
      color: "#0071e3",
    },
  },
};
function Home() {
  return (
    <>
      <Nav />
      <Background>
        <CategoryBar>
          <Categories
            variants={CategoriesVariants}
            initial="initial"
            animate="animate"
          >
            <Category>
              <FontAwesomeIcon icon={faHtml5} size="4x" />
              HTML
            </Category>
            <Category>
              <FontAwesomeIcon icon={faReact} size="4x" />
              React
            </Category>
          </Categories>
        </CategoryBar>
        <CategoryScript
          variants={CategoryBarVariants}
          initial="initial"
          animate="animate"
        >
          Select Categories
        </CategoryScript>
        <RowProjects />
        <RowProjects />
      </Background>
    </>
  );
}

export default Home;
