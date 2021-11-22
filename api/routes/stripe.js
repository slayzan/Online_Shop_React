const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51Jwo3RJD4GUYZEWIWkJ92CP1hy4mTqy0bXsVok4W44elmHLuHhSnU2BD96cr3eiXNhKiu54e6f9F2DuBJ5NYuowX00UTIRjahl");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(501).json(req.body.tokenId);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;