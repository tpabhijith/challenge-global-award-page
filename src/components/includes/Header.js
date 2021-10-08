import React from 'react'
import styled from "styled-components"

function Header() {
    return (
       <MainContainer>
           <Wrapper>
                <LeftContainer>
                    <ImageContainer>
                        <LogoImage src={require("../../assets/images/logo.svg").default} alt="Logo Image" />
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Navbar>
                        <NavItem>
                                Home  
                        </NavItem>
                        <NavItem>
                                About Us 
                        </NavItem>
                        <NavItem>
                                Awards
                        </NavItem>
                        <NavItem>
                                Contact Us
                        </NavItem>
                        <NavItem>
                            <BorderDiv>
                                <Button>Get Start</Button> 
                            </BorderDiv>
                        </NavItem>
                    </Navbar>
                </RightContainer>
            </Wrapper>
       </MainContainer>
    )
}

const MainContainer = styled.div``;
const Wrapper = styled.div`
    width: 83%;
	margin: 0 auto;
	max-width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftContainer = styled.div`
    width: 50%;
    padding: 40px 4px;
`;
const ImageContainer = styled.div`
    width: 187px;
`;
const LogoImage = styled.img`
    width: 100%;
    display: block;
`;
const RightContainer = styled.div`
    width: 50%;
    padding-right: 16px;
`;
const Navbar = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const NavItem = styled.li`
    font-size: 13px;
    color: #5B5A5D;
    margin-right: 28px;
    font-family: "Gordita-medium";
    &:last-child{
        margin-right: 0;
    }
    cursor: pointer;
    &:hover{
        color: #fff;
    }
`;
const BorderDiv = styled.div`
    padding:1px;
    background: linear-gradient(to right, #fa5200 0%, #b9488e 100%);
    border-radius: 6px;
`;
const Button = styled.button`
    padding: 10px 28px;
    border-radius: 6px;
    color:  #D45945;
    font-size: 13px;
    font-family: 'Gordita-medium';
    cursor: pointer;
    background: #141414;
    /* background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%); */
`;


export default Header
