const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted!")
    } catch(err){
      res.status(500).json(err);
    }
});


//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    } catch(err){
        (500).json(err);
    }
});

//GET ALL PRODUCT
router.get("/",  async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;

    try{
        let products;
        if (queryNew){
            products = await Product.find().sort({createdAt: -1}).limit(1);
        } else if(queryCategory) {
            products = await Product.find({
                categories: {
                    $in: [queryCategory],
                },
            });
        }else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch(err){
      res.status(500).json(err);
    }
});

module.exports = router;