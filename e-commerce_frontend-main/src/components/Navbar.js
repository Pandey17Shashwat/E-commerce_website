import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../pages/Responsive";
import {
  // BrowserRouter as Router,
  
  Link
  
}from "react-router-dom";

const Container = styled.div`
  
    height: 60px;
    position:sticky;
    top:0;
    background-color:white;
    border: none;
    z-index: 10;
    box-shadow: 0px 1px 10px rgb(156, 154, 154);
    overflow: hidden;
    ${mobile({height: "70px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
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

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link to={`/`} style={{textDecoration:"none",color:"black"}}>MY STORE</Link></Logo>
        </Center>
        <Right>
          
            <MenuItem><Link to={`/register`} style={{textDecoration:"none",color:"black"}}>REGISTER</Link></MenuItem>
          
          <MenuItem><Link to={`/login`} style={{color: "black",textDecoration:"none"}}>SIGN IN</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to={`/cart`}>
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
