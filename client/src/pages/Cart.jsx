import { Add, Remove } from '@material-ui/icons';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'
import { useHistory } from 'react-router';

const KEY = "pk_test_51Jwo3RJD4GUYZEWIU5IDaEnC4S25DdTaHqDcLxeLzZF5Ubbrd0ZYMYiNjhtzwGOR4d9cUyVpGCCqv23leK7CTsBz00MyuVIDfs";

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) =>{
       setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async () => {
            try{
              const res = await axios.post("http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/sucess");                    
            }catch(err){
                console.log(err);
            }
        };
       stripeToken && makeRequest()
    },[stripeToken, history, cart]);

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                         {cart.products.map(product =>(
                            <Product>
                             <ProductDetails>
                                 <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                 <Details>
                                     <ProductName><b>Product:</b> {product.product.title}</ProductName>
                                     <ProductId><b>ID:</b> {product.product._id}</ProductId>
                                     <ProductColor color={product.product.color}/>
                                     <ProductId><b>SIZE:</b>{product.product.size}</ProductId>
                                 </Details>
                             </ProductDetails>
                             <PriceDetails>
                                 <ProductAmountContainer>
                                     <Remove />
                                     <ProductAmount>{product.product.quantity}</ProductAmount>
 
                                     <Add />
                                 </ProductAmountContainer>
                                 <ProductPrice>{product.product.price} $</ProductPrice>
                             </PriceDetails>
                         </Product>
                         ))}                         
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>{cart.total}$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>5.90$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-5.90$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}$</SummaryItemPrice>
                        </SummaryItem>
                            <StripeCheckout 
                                name="Natsu"
                                image="https://imgur.com/a/JHZzkTO"
                                shippingAddress
                                billingAddress
                                description={`Your total is ${cart.total}`}
                                amount={cart.total*100}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <Button> Checkout Now </Button>
                            </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    $
`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "30px", marginTop: "2px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 15px;
  cursor: pointer;
`;

export default Cart
