import React from 'react'
import styled from 'styled-components'
import {Search, ArrowDropDown, ShoppingCartOutlined} from "@material-ui/icons"
import Badge from '@mui/material/Badge';

const Navbar = () => {
    return (
        <Container>
            <WrapperEvent><Event>Super Deal! Free Shipping</Event></WrapperEvent>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <ArrowDropDown/>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>NATSU.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 80px;
`
const WrapperEvent = styled.div`
    display:flex;
    justify-content: center;
    background-color: #0C797A;
    height: 30px;
    color: white;
`

const Event= styled.span`
    font-size: 18px;
    color: white;
    align-items: center;

`
const  Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border:none;
    box-shadow: none;
    margin-right: 5px;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const MenuItem= styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
export default Navbar
