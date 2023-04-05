import styled from "styled-components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Brain from "./Brain";
import React from "react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #7ba6f7;
`;

const Desc = styled.p`
  font-size: 24px;
`;

const Button = styled.button`
  background-color: #7ba6f7;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: vertical;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const ImgContainer = styled.div `
  display: flex;
`;

const Img = styled.img`
  width: 8%;
  padding-right: 20px;
  aspect-ratio: 3/2;
  object-fit: contain;
  transition: 0.2s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Who = () => {
  return (
    <Section id='studio'>
      <Container>
        <Left>
          <Canvas>
            <Stage environment="city" intensity={0.6} castShadow={false}>
              <Brain />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the squre space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy creating</Desc>
          <Button>See my works!</Button>
          <ImgContainer>
          <Img src="./img/javaScript.png" alt="JavaScript" title="JavaScript"/>
          <Img src="./img/typeScript.png" alt="TypeScript" title="TypeScript"/>
          <Img src="./img/html.png" alt="HTML" title="HTML"/>
          <Img src="./img/css.png" alt="CSS" title="CSS"/>
          <Img src="./img/react.png" alt="React" title="React"/>
          <Img src="./img/redux.png" alt="Redux" title="Redux"/>
          <Img src="./img/SQL.png" alt="SQL" title="SQL"/>
          <Img src="./img/nodeJs.png" alt="NodeJs" title="NodeJs"/>
          </ImgContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
