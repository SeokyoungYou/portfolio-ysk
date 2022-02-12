import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const CategoryIcons = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Categories = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColor.grey};
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
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.blue};
  }
`;
const CategoryScript = styled(motion.div)`
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
const CategoryScriptVariants = {
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
      duration: 1.8,
      type: "tween",
    },
    transitionEnd: {
      backgroundColor: "#f5f5f7",
      color: "#0071e3",
    },
  },
};
export function CategoryBar() {
  return (
    <>
      <CategoryIcons>
        <Categories
          variants={CategoriesVariants}
          initial="initial"
          animate="animate"
        >
          <Category>
            <FontAwesomeIcon icon={faHtml5} size="4x" color="#1d1d1f" />
            HTML
          </Category>
          <Category>
            <FontAwesomeIcon icon={faHtml5} size="4x" color="#1d1d1f" />
            HTML
          </Category>
          <Category>
            <FontAwesomeIcon icon={faReact} size="4x" color="#1d1d1f" />
            React
          </Category>
        </Categories>
      </CategoryIcons>
      <CategoryScript
        variants={CategoryScriptVariants}
        initial="initial"
        animate="animate"
      >
        Select categories of my projects.
      </CategoryScript>
    </>
  );
}
export default CategoryBar;
