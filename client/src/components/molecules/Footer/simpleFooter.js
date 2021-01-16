import React from 'react'
import {animateScroll as scroll } from 'react-scroll'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialIconLink, SocialLogo, WebsiteRights, SocialIcons} from './FooterElements'

const SimpleFooter = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <>
            <FooterContainer>
            <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                            Evania
                        </SocialLogo>
                    <WebsiteRights>Evania © {new Date().getFullYear()} 
                    All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//" target="_blank" 
                        aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default SimpleFooter
