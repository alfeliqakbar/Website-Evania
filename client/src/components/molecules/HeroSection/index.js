import React, {useState} from 'react'
import Video from '../../../assets/Videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../../atoms'

const HeroSection = () => {
    const [ hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Pengiriman Jadi Lebih Mudah</HeroH1>
                <HeroP>
                    Daftar sekarang untuk mendapatkan gratis biaya kirim!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeaver={onHover} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Coba sekarang {hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
