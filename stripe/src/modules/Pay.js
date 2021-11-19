import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from 'react';
import axios from 'axios';

const PUBLIC_KEY = "pk_test_51Jwo3RJD4GUYZEWIU5IDaEnC4S25DdTaHqDcLxeLzZF5Ubbrd0ZYMYiNjhtzwGOR4d9cUyVpGCCqv23leK7CTsBz00MyuVIDfs";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) =>{
       setStripeToken(token);
       console.log(stripeToken);
    }
    useEffect(()=>{
        const makeRequest = async () => {
            try{
              const res = await axios.post("http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount: 2000,
                });
            console.log(res.data)
            }catch(err){
                console.log(err);
            }
        };
       stripeToken && makeRequest()
    },[stripeToken])

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <StripeCheckout name="Natsu"
        image="https://imgur.com/a/JHZzkTO"
        shippingAddress
        billingAddress
        description="Your total is 20$"
        amount={2000}
        token={onToken}
        stripeKey={PUBLIC_KEY}>
            <button style ={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "White",
                cursor: "pointer",
                fontWeight: "600"
            }}> Pay Now </button>
        </StripeCheckout>
        </div>
    )
}

export default Pay
