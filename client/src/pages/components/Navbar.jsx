import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import {Search, ShoppingCartOutlined, FormatListBulleted} from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    
    return (
        <Container>
            <WrapperEvent><Event>Super Deal! Free Shipping</Event></WrapperEvent>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                    <Icon><FormatListBulleted /></Icon>
                </Left>
                <Center>
                    <Logo>NATSU.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    <MenuItemMobile>
                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItemMobile>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 80px;
    ${mobile({ height: "30px" })}
`;

const WrapperEvent = styled.div`
    display:flex;
    justify-content: center;
    background-color: #0C797A;
    height: 30px;
    color: white;
    ${mobile({ height: "20px" })}

`;

const Event= styled.span`
    font-size: 18px;
    color: white;
    align-items: center;

`;
const  Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px", justifyContent: "flex-start" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const Icon = styled.div`
    display: none;
    ${mobile({display: "inline", margin: "0px 15px"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ display: "none" })}

`;

const Input = styled.input`
    border:none;
    box-shadow: none;
    margin-right: 5px;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "19px"})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    ${mobile({ flex: 2})}
`

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px", display: "none" })}
`;

const MenuItemMobile = styled.div`
    cursor: pointer;
    display: none;
    margin-left: 35px;
    ${mobile({ fontSize: "12px", marginRight: "30px", display: "unset" })}

`;

export default Navbar
