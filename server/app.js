require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const contactRouter = require("./routes/contact.route");

const app = express();
const port = process.env.POST || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.use("/contact", contactRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
