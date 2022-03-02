import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title> -StyledComponents- </Title>
      <Button>Fight!!!!</Button>
    </Container>
  );
};

// 元々のタグ名との区別が効かなくなるため頭文字にstyleのSをつけるなどして対応
const Container = styled.div`
  border: solid 2px green;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  aline-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: red;
`;

const Button = styled.button`
  background-color: skyblue;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #fff;
    color: skyblue;
    cursor: pointer;
  }
`;
