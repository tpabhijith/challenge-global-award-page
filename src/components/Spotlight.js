import React from 'react'
import styled from 'styled-components'

function Spotlight() {
    return (
        <MainContainer>
            {/* <Wrapper> */}
                <LeftContainer>
                    <Heading>2021 Global Design <ColorSpan>Awards </ColorSpan>Published</Heading>
                    <SubHeading>Here we published 2021 global design awards for the design Competitions</SubHeading>
                    <Button>Already impressed?<BoldSpan>Get started today!</BoldSpan></Button>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer1>
                        <Image1 src= {require("../assets/images/spot - image.svg").default} alt="Spotlight Image" />
                    </ImageContainer1>
                    <ImageContainer2>
                        <Image2 src= {require("../assets/images/pattern - color.svg").default} alt= "Pattern Image" />
                    </ImageContainer2>
                    <ImageContainer3>
                        <Image3 src= {require("../assets/images/pattern - color.svg").default} alt= "Pattern Image" />
                    </ImageContainer3>
                </RightContainer>
            {/* </Wrapper> */}
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 105px;
    padding-right: 45px;
`;
// const Wrapper = styled.div`
//      width: 83%;
// 	margin: 0 auto;
// 	max-width:1200px;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
// `;
const LeftContainer = styled.div`
    padding-left: 4px;
    padding-top: 52px;
    width: 50%;
    font-family: "Gordita-medium";
`;
const Heading = styled.h1`
    color: #fff;
    line-height: 1.3em;
    font-size: 45px;
    margin-bottom: 20px;
`;
const ColorSpan = styled.span`
    color: #D45945;
`;
const SubHeading = styled.h3`
    font-family: "Gordita-regular";
    font-size: 16px;
    color: #5B5A5D;
    line-height: 1.6em;
    font-weight: normal;
    width: 70%;
    margin-bottom: 35px;
`;
const Button = styled.button`
    padding: 12px 30px;
    border-radius: 8px;
    background-image: linear-gradient(to right, #fa5200 0%, #b9488e 100%);
    color:#fff;
    font-size: 13px;
    cursor: pointer;
`;
const BoldSpan = styled.h6`
    color: #fff;
    margin-top: 5px;
    font-size: 13px;
    font-family: "Gordita-medium";
`;
const RightContainer = styled.div`
    padding-right: 16px;
    width: 50%;
    position: relative;
`;
const ImageContainer1 = styled.div`
    position: absolute;
    width: 85%;
    top: -10px;
    left: 90px;
`;
const Image1 = styled.img`
    width: 100%;
    display: block;
`;
const ImageContainer2 = styled.div`
    width: 30%;
    z-index: -3;
    position: absolute;
    bottom: -390px;
    left: 40px;
`;
const Image2 = styled.img`
    width: 100%;
    display: block;
    filter: blur(40px);
    
`;
const ImageContainer3 = styled.div`
    width: 30%;
    z-index: -3;
    position: absolute;
    right: 60px;
    top: 30px;
`;
const Image3 = styled.img`
    width: 100%;
    display: block;
    filter: blur(35px);
    
`;
// const MainContainer = styled.div``;

export default Spotlight
