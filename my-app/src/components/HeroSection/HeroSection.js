import React, { useState } from 'react';
import styled from 'styled-components';
import Video from '../../videos/video.mp4';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Button } from '../ButtonElement';

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100% ), linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);
    z-index: 2;
}
`;

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


const HeroContact = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;


    @media screen and (max-width: 768px){
        font-size: 32px;
    }

    @media screen and (max-width: 480px){
        font-size: 30px;
    }

`;

const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }


    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const ArrowForward = styled(MdArrowForward)`
    margin-top: 3px;
    margin-left: 3px;    
    font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
     margin-top: 3px;
    margin-left: 3px;
    font-size: 20px;
`;


function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContact>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign up for new accoun tody receive 250$ in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContact>
        </HeroContainer>
    )
}

export default HeroSection
