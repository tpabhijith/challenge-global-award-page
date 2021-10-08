import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <MainContainer>
            <Wraper>
                <LeftContainer>
                    <ListItems>
                        <ListItem>
                            <ImageContainer>
                                <FooterLogo src={require("../assets/images/logo.png").default} alt="Footer Logo" />
                            </ImageContainer>
                        </ListItem>
                        <ListItem>
                            Apartment 0031 Broadmoor Ln,<br /> Rotonda West Wood,<br /> FL, 33947
                        </ListItem>
                    </ListItems>
                </LeftContainer>
                <RightContainer>
                    <List>
                        <Item>
                            Home
                        </Item>
                        <Item>
                            About Us
                        </Item>
                        <Item>
                            Awards
                        </Item>
                        <Item>
                            Contact Us
                        </Item>
                        <Item>
                            Designed by <ColorSpan>www.steyp.in</ColorSpan>
                        </Item>
                    </List>
                </RightContainer>
            </Wraper>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    padding-bottom: 50px;
`;
const Wraper = styled.div`
    width: 83%;
	margin: 0 auto;
	max-width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const LeftContainer = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
       width: 100%;
       margin-bottom: 40px;
    }
`;
const ListItems = styled.ul`
    display: flex;
    flex-direction: column;
`;
const ListItem = styled.li`
    width: 50%;
    font-size: 13px;
    color: #5B5A5D;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
    &:nth-child(2) {
        width: 50%;
    }
    @media all and (max-width: 640px) {
      &:nth-child(2) {
          width: 60%;
      }
    }
`;
const ImageContainer = styled.div`
    width: 70%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const FooterLogo = styled.img`
    display: block;
    width: 100%;
`;
const RightContainer = styled.div`
    width: 70%;
    @media all and (max-width: 980px) {
        width: 90%;
    }
`;
const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media all and (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
const Item = styled.li`
    font-size: 13px;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
    color: #5B5A5D;
    &:nth-child(4) {
        display: flex;
        align-items: center;
    }
    &:nth-child(4)::after {
        content: "";
        width: 2px;
        height: 40px;
        display: inline-block;
        border-left: 2px solid  #5B5A5D;
        margin-left: 30px;
    }
    &:last-child:hover {
        color: #5B5A5D;
        
    }
    @media all and (max-width: 640px) {
      &:nth-child(4)::after {
          display: none;
      }
`;
const ColorSpan = styled.span`
    color:  #D45945;
`;


export default Footer
