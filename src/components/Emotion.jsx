/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // scssと同様に記述できる
  const containerStyle = css`
    border: solid 2px green;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    aline-items: center;
  `;
  // InlineStyleと同様に各パターンもある
  const titleStyle = css({
    margin: "0",
    color: "red"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}> -Emotion- </p>
      <SButton>Fight!!!!!</SButton>
    </div>
  );
};

// StyledComponentsのような記述もできる
const SButton = styled.button`
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
