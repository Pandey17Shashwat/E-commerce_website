import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../pages/Responsive"
import {
    // BrowserRouter as Router,
    
    Link
    
  }from "react-router-dom";

const Container=styled.div`
    display:flex;
    /* flex-direction: column; */
    ${mobile({flexDirection:  "column"})}
`
const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo=styled.h1`
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color} ;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right: 20px;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);
    }
`
const Center=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title=styled.h3`
     margin-bottom: 30px;
`
const List=styled.ul`
    margin:0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem=styled.li`
    width:50%;
    margin-bottom: 10px;
    cursor: pointer;
    /* &:hover{
        color:red;
    } */
`
const Right=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "lightgray"})}

`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

`;
const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>My Store</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Veritatis praesentium ipsam
                     illo consequatur in voluptatem possimus explicabo 
                     recusandae nisi rerum? Earum eum, error numquam
                      nisi ea architecto veniam aspernatur repellat?
                </Desc>
                <SocialContainer>
                    <a href="https://www.facebook.com/">
                    
                        <SocialIcon color="3B5999">
                            
                                
                                <Facebook/>
                    
                        </SocialIcon>
                    </a>
                    <a href="https://www.instagram.com/shashwat144">
                        <SocialIcon color="E4405F">
                        
                        <Instagram/>
                        
                        </SocialIcon>
                    </a>
                    <a href="https://twitter.com/">
                        <SocialIcon color="55ACEE">
                            <Twitter/>
                        </SocialIcon>
                    </a>
                    <a href="https://in.pinterest.com/">
                        <SocialIcon color="E60023">
                            <Pinterest/>
                        </SocialIcon>
                    </a>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                
                <List>
                    
                    <ListItem><Link to={`/`} style={{textDecoration:"none",color:"black"}}>Home</Link></ListItem>
                    
                    <ListItem><Link to={`/cart`}  style={{textDecoration:"none",color:"black"}}>Cart</Link></ListItem>
                    <ListItem><Link to={`/products/id`}  style={{textDecoration:"none",color:"black"}}>Man Fashion</Link></ListItem>
                    <ListItem><Link to={`/products/id`}  style={{textDecoration:"none",color:"black"}}>Woman Fashion</Link></ListItem>
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
                   <Room style={{marginRight:"10px" }}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                   <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> akgjune06@gmail.com                   
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>


        </Container>
        
    )
}

export default Footer
