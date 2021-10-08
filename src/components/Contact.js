import React from 'react'
import styled from 'styled-components'
import bg from "../assets/images/footerimage.png"

function Contact() {
    return (
        <MainContainer>
            <Wrapper>
                    <BgContainer>
                        <Container>
                            <HeadingContainer>
                                <Heading>Want to get new design news</Heading>
                                <SubHeading>Here is an comparison chart of us with thipsum tool, but at the end we win!</SubHeading>
                            </HeadingContainer>
                            <InputForm>
                                <Input placeholder="Your email address"></Input>
                                <Button>Get Started</Button>
                            </InputForm>
                        </Container>
                    </BgContainer>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding-bottom: 80px;
    @media all and (max-width: 980px) {
         padding-bottom: 40px;
     }
`;
const Wrapper = styled.div`
    width: 83%;
	margin: 0 auto;
	max-width:1200px;
    @media all and (max-width: 480px) {
       
    } 
`;
const HeadingContainer = styled.div`
    
`;
const Container = styled.div`
    padding:80px 60px;
    border-radius: 8px;
    @media all and (max-width: 980px) {
       display: flex;
       align-items: center;
       justify-content: space-between;
       flex-direction: column;
       padding: 20px;
    } 
`;
const BgContainer = styled.div`
    background-size: contain;
    background-image: url(${bg});
    background-repeat: no-repeat;
    z-index: 2;
    @media all and (max-width: 480px) {
    background: none;
    }   
`;
const Heading = styled.h3`
    width: 50%;
    font-size: 36px;
    color: #fff;
    font-family: "Gordita-medium";
    margin-bottom: 30px;
    z-index: 2;
    @media all and (max-width: 980px) {
         width: 90%;
     }
    @media all and (max-width: 480px) {
       width: 100%;
    } 
`;
const SubHeading = styled.h4`
    color: #5B5A5D;
    width: 45%;
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
         width: 90%;
     }
     @media all and (max-width: 640px) {
      display: none;
    }
`;
const InputForm = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    @media all and (max-width: 980px) {
         width: 90%;
    }
     @media all and (max-width: 480px) {
       position: unset;
       flex-direction: column;
    } 
`;
const Input = styled.input`
    padding: 16px 24px;
    font-size: 13px;
    border-radius: 8px;
    background: #fff;
    &::placeholder {
        color: #5B5A5D;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 20px;
    } 
`;
const Button = styled.button`
    padding: 18px 20px;
    border-radius: 8px;
    font-size: 13px;
    background-image: linear-gradient(to right, #fa5200 0%, #b9488e 100%);
    color:#fff;
    font-size: 13px;
    cursor: pointer;
    position: absolute;
   left: 195px;
   z-index: 10;
   @media all and (max-width: 480px) {
       position: unset;
    } 
`;
export default Contact
