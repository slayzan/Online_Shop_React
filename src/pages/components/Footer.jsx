import styled  from 'styled-components';
import React from 'react';
import {mobile} from '../../responsive'
import { Facebook, Instagram, Twitter, Room, Phone, Mail } from '@material-ui/icons';


const Footer = () => {
    return (
       <Container>
           <Left>
                <Logo>NATSU.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur excepturi temporibus cupiditate corrupti nemo iusto!</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
           </Left>
           <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
           </Center>
           <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room />  
                    63 Rue de Ester Saint-Denis
                </ContactItem>
                <ContactItem>
                    <Phone />
                    +339 12 45 25 12
                </ContactItem>
                <ContactItem>
                    <Mail/>contact@natsu.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
           </Right>
       </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ flexDirection: "column" })}

`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex:1;
    padding: 20px 40px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const List = styled.div`
    margin: 0;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.div`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
export default Footer
