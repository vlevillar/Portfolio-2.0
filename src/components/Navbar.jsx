import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 120px;
`;


const ListItem = styled.a`
    display: flex;
    color: white;
    gap: 20px;
    text-decoration: none;
    cursor: pointer;
`;


const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #7ba6f7;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/logo.png"/>
            <ListItem href='#home'>Home</ListItem>
            <ListItem href='#studio'>Studio</ListItem>
            <ListItem href='#works'>Works</ListItem>
            <ListItem href='#contact'>Contact</ListItem>
        </Links>
        <Icons>
            <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
