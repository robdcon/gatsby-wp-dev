import React from 'react';
import { FooterWrapper } from './Footer.styles';
import Navigation from '../../molecules/Navigation';
import Logo from '../../atoms/Logo';
import Row from '../../molecules/Row';

const Footer = () => (
  <FooterWrapper className="footer-wrapper">
    <Row spaceBetween >
      <Navigation vertical />
        <Logo />
      <Navigation vertical />
    </Row>
  </FooterWrapper>
);

export default Footer;
