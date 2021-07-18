import React from 'react';
import { FooterWrapper, FooterNav } from './Footer.styles';
import Logo from '../../atoms/Logo';
import Row from '../../molecules/Row';

const Footer = () => (
  <FooterWrapper className="footer-wrapper">
    <Row spaceBetween className="footer__row">
      <FooterNav vertical className="footer__nav" />
        <Logo className="footer__logo" />
      <FooterNav vertical className="footer__nav" />
    </Row>
  </FooterWrapper>
);

export default Footer;
