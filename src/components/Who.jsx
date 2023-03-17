import styled from "styled-components";
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3D model */}
        </Left>
        <Right>
        <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy creating</Desc>
          <Button>See my works!</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
