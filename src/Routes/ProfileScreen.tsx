import styled from "styled-components";
import Nav from "../Components/Navigation";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.white};
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
`;
// support cat으로 만들것
function ProfileScreen() {
  return <Background>My Profile</Background>;
}

export default ProfileScreen;
