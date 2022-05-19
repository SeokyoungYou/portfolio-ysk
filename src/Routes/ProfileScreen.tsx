import styled from "styled-components";
import Nav from "../Components/Navigation";

const Background = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileImg = styled.div`
  height: 45vh;
  color: ${(props) => props.theme.white.lighter};
  text-align: center;
  line-height: 25vh;
  font-size: 4vh;
  font-weight: 700;
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 100px;
  overflow-x: auto;
`;
const ImgItem = styled.div``;
const ImgContent = styled.img`
  height: 50px;
`;
const ImgTitle = styled.h2``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  margin-bottom: 5px;
`;
const Content = styled.h1``;
const LinkContent = styled.a`
  color: ${(props) => props.theme.blue};
`;
function ProfileScreen() {
  return (
    <Background>
      <ProfileImg
        style={{
          background: ` url('${process.env.PUBLIC_URL}/ProfilePic/Profile.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Seokyoung You
      </ProfileImg>
      <Wrapper>
        <Title>Contact</Title>
        <Content>seo9802@naver.com</Content>
      </Wrapper>
      <Wrapper>
        <Title>Github</Title>
        <LinkContent href="https://github.com/SeokyoungYou">
          https://github.com/SeokyoungYou
        </LinkContent>
      </Wrapper>
      {/* <Wrapper>
        <Title>Education</Title>
      </Wrapper> */}
      {/* <Wrapper> */}
      {/* <Title>What I love</Title> */}
      {/* <ImgGrid>
          <ImgItem>
            <ImgContent
              src={`${process.env.PUBLIC_URL}/ProfilePic/Guitar.jpg`}
            />
            <ImgTitle>Guitar</ImgTitle>
          </ImgItem>
          <ImgItem>
            <ImgContent
              src={`${process.env.PUBLIC_URL}/ProfilePic/Guitar.jpg`}
            />
            <ImgTitle>Guitar</ImgTitle>
          </ImgItem>
          <ImgItem>
            <ImgContent
              src={`${process.env.PUBLIC_URL}/ProfilePic/Guitar.jpg`}
            />
            <ImgTitle>Guitar</ImgTitle>
          </ImgItem>
          <ImgItem>
            <ImgContent
              src={`${process.env.PUBLIC_URL}/ProfilePic/Guitar.jpg`}
            />
            <ImgTitle>Guitar</ImgTitle>
          </ImgItem>
          <ImgItem>
            <ImgContent
              src={`${process.env.PUBLIC_URL}/ProfilePic/Guitar.jpg`}
            />
            <ImgTitle>Guitar</ImgTitle>
          </ImgItem>
          <ImgItem>
            <ImgContent
              src={`${process.env.PUBLIC_URL}/ProfilePic/Guitar.jpg`}
            />
            <ImgTitle>Guitar</ImgTitle>
          </ImgItem>
        </ImgGrid> */}
      {/* </Wrapper> */}
    </Background>
  );
}

// 이 웹사이트는 애플 클론코딩
// Contact: 이메일 주소// 깃헙
// Education
//
// What I love
//skill

// Home과 profile 구분할것. 이 웹사이트 들어오고 얻고싶은 정보가 뭔데?
export default ProfileScreen;
