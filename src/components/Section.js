import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Buttons>
        <Fade bottom>
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </ItemText>
        </Fade>
        <Fade Up>
        <ButtonGroup>
          <LeftButton>{props.LeftBtnText}</LeftButton>
          <RightButton>{props.RightBtnText}</RightButton>
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  z-index:-1;
  flex-direction: column;
  justify-content: space-between; //for vertical alignment
  align-items: center;

  height: 100vh;
  background-size: cover;
  display: flex;
  backgroun-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.6);
  height: 40px;
  width: 259px;
  color: white;
  top: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid black;
  opacity: 0.86;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin: 8px;
  text-transform: uppercase;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
  font-weight: bold;
`;
const DownArrow = styled.div`
  margin-top: 20px;
  height: 20px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
