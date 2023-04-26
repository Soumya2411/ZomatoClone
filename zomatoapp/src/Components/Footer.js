
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer=()=>{
  return (
    <Box>
    
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="Zomato Logo" />
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT ZOMATO</Heading>
            <FooterLink href="#">Who we are</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Work with Us</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Report Fraud</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
    </Column>
          <Column>
          <Heading>ZOMAVERSE</Heading>
            <FooterLink href="#">Zomato</FooterLink>
            <FooterLink href="#">Blinkit</FooterLink>
            <FooterLink href="#">Feeding India</FooterLink>
            <FooterLink href="#">Hyperpure</FooterLink>
            <FooterLink href="#">Zomaland</FooterLink>
            </Column>
          <Column>
          <Heading>FOR RESTAURANTS</Heading>
            <FooterLink href="#">Partner With Us</FooterLink>
            <FooterLink href="#">Apps For You</FooterLink>
            <br>
            </br>
            <Heading>FOR ENTERPRISES</Heading>
            <FooterLink href="#">Zomato For Enterprise</FooterLink>
            </Column>
          <Column>
          <Heading>LEARN MORE</Heading>
            <FooterLink href="#">Privacy</FooterLink>
            <Footer href="#">Security</Footer>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Sitemap</FooterLink>
            </Column>
            <Column>
            <Heading>SOCIAL LINKS</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            </Column>
        </Row>
      </Container>
    
      </Box>
  );
}

export default Footer;