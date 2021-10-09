import React from 'react'
import styled from 'styled-components'

function SideMenu({toggle,isOpen}) {
    // if(props.open){
    return(
        <SlideMenu isOpen={isOpen}>
                <CancelLogo onClick={toggle}>
                    <Cancel src={require("../assets/images/cancel.png").default} alt="Cancel Icon" />
                </CancelLogo>
               <UList>
                   <List>Home</List>
                   <List>About Us</List>
                   <List>Awards</List>
                   <List>Contact Us</List>
               </UList>
        </SlideMenu>
    )
// }
    // else {
    //     return null;
    // }
}
const CancelLogo = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 20px; */
    padding:5px;
    border-radius: 5px;
    background: linear-gradient(to right, #fa5200 0%, #b9488e 100%);
    position: absolute;
    top : 47px;
    right: 60px;
    transition: ease-in .5s;
    display: ${(isOpen)=> isOpen ? 'block' : 'none'};
    @media all and (max-width: 480px) {
        right: 30px;
    }
  
`;
const Cancel = styled.img`
    width: 100%;
    display: block;
`;
const SlideMenu = styled.div`
    position: absolute;
    right: 40px;
    top: ${({isOpen}) => (isOpen ? '0'  : '-1000px')};
    /* display: block; */
    opacity: ${({isOpen}) => (isOpen ? '1'  : '0')};
    width: 100%;
    left: 0;
    text-align: center;
    transition: all .3s ease-in-out;
`;
const UList = styled.ul``;
const List = styled.li`
    color: #5B5A5D ;
    font-size: 18px;
    margin-bottom: 20px;
    &:hover {
        color: #fff;
    }
`;


export default SideMenu
