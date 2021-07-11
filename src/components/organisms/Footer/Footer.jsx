import React from 'react';
import { FooterWrapper } from './Footer.styles';

const Footer = ({children}) => (
  <FooterWrapper className="footer-wrapper">
    {children}
  </FooterWrapper>
);

export default Footer;
