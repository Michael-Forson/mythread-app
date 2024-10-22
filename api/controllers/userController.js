const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const newUser = new User({ name, email, password });
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");
    //save the user to the database
    await newUser.save();
    //sent the verificaiton email
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  //create a node mailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "micfor722@gmail.com",
      pass: "jnef owqf kzxf bwka",
    },
  });
  // compose the email message
  const mailOptions = {
    from: "threads.com",
    to: email,
    subject: "Email Verification",
    text: `please click the following  link to verify you email http://localhost:3003/verify/${verificationToken}`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending email", error);
  }
};
router.get("/verify/:token", async (req, res) => {
  const token = req.params.token;

  const user = await User.findOne({ verification: token });
  if (!user) {
    return res.status(404).json({ message: "Invalid token" });
  }
  user.verified = true;
  user.verification = undefined;

  await user.save();

  res.status(200).json({ message: "Email verified successfully" });
});
const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};
const secretKey = generateSecretKey();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid Logins,Please Register" });
    }
    if (user.password != password) {
      return res.status(404).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});
module.exports = router;
