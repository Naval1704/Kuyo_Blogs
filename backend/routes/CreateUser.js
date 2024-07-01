const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");
// here we are using  express validator to validate the values we get from the frontend before inserting them in our database.
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtsecreat="yowhatisupguyswhatareyoudoing";
const { useActionData } = require("react-router");

router.post(
  "/create-account",
  [body("email").isEmail(), body("password").isLength({ min: 5 })], //this array of commands validate our email and also checks if the password is more than length 5.
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // now here we will be using bcrypt js for encrypting our passowrds before putting them in out database so that even if our data gets leaked 
    // the passowrds cannot be used to log into our website.
    const salt= await bcrypt.genSalt(8);
    let securePassword= await bcrypt.hash(req.body.password,salt);


    try {
      console.log(req.body);
      await user.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
    
// this router will be used to login the signed-up users by checking their email and password

router.post(
  "/Login",
  [body("email").isEmail(), body("password").isLength({ min: 5 })], //this array of commands validate our email and also checks if the password is more than length 5.
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log(req.body);
      let userdata = await user.findOne({ email: req.body.email });
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "try logging with correct credentials" });
      }

      const comparePasswords= await bcrypt.compare(req.body.password,userdata.password);

      if (!comparePasswords) {
        return res
          .status(400)
          .json({ errors: "try logging with correct credentials!!" });
      }

      const Data={
        user:{
          id:userdata.id
        }
      }

      const authToken=jwt.sign(Data,jwtsecreat);

      return res.json({ success: true ,authToken:authToken});

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
