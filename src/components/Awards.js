import React from 'react'
import styled from 'styled-components'

function Awards() {
    return (
        <MainContainer>
            <Wrapper>
                <BorderDiv>
                    <ContentDiv>
                        <Top>
                            <ImageContainer>
                                <AppleImage src={require("../assets/images/apple.svg").default} alt="Apple Image" />
                            </ImageContainer>
                            <Date>18 Jun 2020</Date>
                        </Top>
                        <Middle>
                            <SubHeading>Gold Winner</SubHeading>
                            <Heading>Apple Design Award 2020-21</Heading>
                            <CrossLineContainer>
                                <CrossLine src= {require("../assets/images/cross - line.svg").default} alt="Cross Line Image" />
                        </CrossLineContainer>
                        </Middle>
                        <Bottom>
                            <Place>United States</Place>
                            <ArrowLineContainer>
                                <ArrowLine src={require("../assets/images/arrow.svg").default} alt="Arrow Image" />
                            </ArrowLineContainer>
                        </Bottom>
                    </ContentDiv>
                </BorderDiv>
                <BorderDiv>
                    <ContentDiv>
                        <Top>
                            <ImageContainer>
                                <AppleImage src={require("../assets/images/google.svg").default} alt="Google Image" />
                            </ImageContainer>
                            <Date>08 Mar 2021</Date>
                        </Top>
                        <Middle>
                            <SubHeading>Runner Up</SubHeading>
                            <Heading>Google Design Award 2020-21</Heading>
                            <CrossLineContainer>
                                <CrossLine src= {require("../assets/images/cross - line.svg").default} alt="Cross Line Image" />
                        </CrossLineContainer>
                        </Middle>
                        <Bottom>
                            <Place>India, New Delhi</Place>
                            <ArrowLineContainer>
                                <ArrowLine src={require("../assets/images/arrow.svg").default} alt="Arrow Image" />
                            </ArrowLineContainer>
                        </Bottom>
                    </ContentDiv>
                </BorderDiv>
                <BorderDiv>
                    <ContentDiv>
                        <Top>
                            <ImageContainer>
                                <AppleImage src={require("../assets/images/freepik.svg").default} alt="Freepik Image" />
                            </ImageContainer>
                            <Date>18 Jun 2019</Date>
                        </Top>
                        <Middle>
                            <SubHeading>Silver Award</SubHeading>
                            <Heading>Freepik Best UI Award 2019-20</Heading>
                            <CrossLineContainer>
                                <CrossLine src= {require("../assets/images/cross - line.svg").default} alt="Cross Line Image" />
                        </CrossLineContainer>
                        </Middle>
                        <Bottom>
                            <Place>France</Place>
                            <ArrowLineContainer>
                                <ArrowLine src={require("../assets/images/arrow.svg").default} alt="Arrow Image" />
                            </ArrowLineContainer>
                        </Bottom>
                    </ContentDiv>
                </BorderDiv>
                <BorderDiv>
                    <ContentDiv>
                        <Top>
                            <ImageContainer>
                                <AppleImage src={require("../assets/images/flaticon.svg").default} alt="Flat Icon Image" />
                            </ImageContainer>
                            <Date>24 Feb 2020</Date>
                        </Top>
                        <Middle>
                            <SubHeading>Special Jury</SubHeading>
                            <Heading>Flaticon Design Award 2020-21</Heading>
                            <CrossLineContainer>
                                <CrossLine src= {require("../assets/images/cross - line.svg").default} alt="Cross Line Image" />
                        </CrossLineContainer>
                        </Middle>
                        <Bottom>
                            <Place>New York</Place>
                            <ArrowLineContainer>
                                <ArrowLine src={require("../assets/images/arrow.svg").default} alt="Arrow Image" />
                            </ArrowLineContainer>
                        </Bottom>
                    </ContentDiv>
                </BorderDiv>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding:100px 0;
`;
const Wrapper = styled.div`
    width: 83%;
	margin: 0 auto;
	max-width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;
const BorderDiv = styled.div`
    padding:1px;
    background: linear-gradient(to right, #fa5200 0%, #b9488e 100%);
    border-radius: 8px;
    width: 24%;
    cursor: pointer;
    transition: ease-in .5s;
    &:hover {
        transform: scaleY(1.1);
        transition: ease-in .5s;
        & h4, span {
            color: #fff;
        }
    }
`;
const ContentDiv = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 20px;
    background: #141414;
    transition: ease-in .5s;
    &:hover {
        background: linear-gradient(to right, #fa5200 0%, #b9488e 100%);
        transition: ease-in .5s;
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;
`;
const ImageContainer = styled.div`
    background: #262626;
    border-radius: 8px;
    width: 50px;
    padding:10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AppleImage = styled.img`
    width: 70%;
    display: block;
`;
const Date = styled.span`
    display: inline-block;
    width: 50%;
    font-size: 13px;
    color: #5B5A5D;
    text-align: right;
`;
const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const SubHeading = styled.h4`
    color: #5B5A5D;
    font-size: 13px;
    margin-bottom: 20px;
`;
const Heading = styled.h3`
    font-family: "Gordita-medium";
    color: #fff;
    font-size: 17px;
    margin-bottom: 25px;
`;
const CrossLineContainer = styled.div`
    width: 20%;
    margin-bottom: 25px;
`;
const CrossLine = styled.img`
    display: block;
    width: 100%;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
const Place = styled.span`
    font-size: 13px;
    color: #fff;
`;
const ArrowLineContainer = styled.div`
    width: 30px;
`;
const ArrowLine = styled.img`
    width: 100%;
    display: block;
`;
export default Awards
