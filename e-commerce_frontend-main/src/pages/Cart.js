import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "./Responsive"

const Container=styled.div``
const Wrapper=styled.div`
    padding:20px;
    ${mobile({ padding: "10px" })}
`
const Title=styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
`

const TopButton=styled.button`

    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type==="filled" && "none"};
    background-color:${props=>props.type==="filled"? "black":"transparent"};
    color:${props=>props.type==="filled" && "white"};
`
const Toptexts=styled.div`
    ${mobile({ display: "none" })}
`

const TopText=styled.span`
    text-decoration: underline;
    margin:0px 20px;
    cursor: pointer;
`

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

    
`
const Info=styled.div`
    flex:3;
`

const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail=styled.div`
    display:flex;
    flex:2;
    
`
const Image=styled.img`
    width: 200px;
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


`
const ProductName=styled.span``
const Productid=styled.span``
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
`
const ProductSize=styled.span``
const PriceDetail=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
`
const ProductAmount=styled.div`
    font-size: 24px;
    margin:5px;
`
const ProductPrice=styled.div`
    font-size: 20px;
    font-weight: 200;
`
const Hr=styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`

const Summary=styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`
const SummaryTitle=styled.h1`
    font-weight: 200;
`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total"&&"500"};
    font-size: ${props=>props.type==="total"&&"24px"};
`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
    width:100%;
    padding: 10px;
    background-color: black;
    color:white;
    font-weight: 600;
`




const Cart = () => {
    return (
        <Container>
            <Announcements/>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <Toptexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </Toptexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <Productid><b>Id:</b>6865684398</Productid>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            
                               
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 40</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE T SHIRTS</ProductName>
                                    <Productid><b>Id:</b>6865684367</Productid>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>Size</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            
                               
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 40</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
                
            <Newsletter/>
            <Footer/>
                

        </Container>
    )
}

export default Cart

