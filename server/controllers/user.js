const userSchema = require("../models/user.js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = await userSchema.findOne({ username: req.body.username });
    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ id: user._id }, "secret-key", { expiresIn: "1h" });
    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

exports = login;
