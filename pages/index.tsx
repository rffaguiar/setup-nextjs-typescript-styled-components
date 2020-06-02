import styled from "styled-components";
import BasicLayout from "layout/Basic";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <p>hello</p>
      <Title>Title</Title>
    </BasicLayout>
  );
};

export default Home;
