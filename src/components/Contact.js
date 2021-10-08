import React from 'react'
import styled from 'styled-components'
import bg from "../assets/images/footerimage.png"

function Contact() {
    return (
        <MainContainer>
            <Wrapper>
                <BgContainer>
                    <Heading>Want to get new design news</Heading>
                    <SubHeading>Here is an comparison chart of us with thipsum tool, but at the end we win!</SubHeading>
                    <InputForm>
                        <Input placeholder="Your email address"></Input>
                        <Button>Get Started</Button>
                    </InputForm>
                </BgContainer>
            </Wrapper>
        </MainContainer>
    )
}
const MainContainer = styled.div`
    padding-bottom: 80px;
`;
const Wrapper = styled.div`
    width: 83%;
	margin: 0 auto;
	max-width:1200px;
    height: 410px;
`;
const BgContainer = styled.div`
    background-size: cover;
    background-image: url(${bg});
    background-repeat: no-repeat;
    height: 100%;
    padding:80px 60px;
`;
const Heading = styled.h3`
    width: 50%;
    font-size: 36px;
    color: #fff;
    font-family: "Gordita-medium";
    margin-bottom: 30px;
`;
const SubHeading = styled.h4`
    color: #5B5A5D;
    width: 45%;
    margin-bottom: 30px;
`;
const InputForm = styled.form`
    display: flex;
    align-items: center;
    position: relative;
`;
const Input = styled.input`
    padding: 16px 24px;
    font-size: 13px;
    border-radius: 8px;
    background: #fff;
    &::placeholder {
        color: #5B5A5D;
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
`;
export default Contact
