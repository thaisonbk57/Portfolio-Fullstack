require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");

const contactRouter = require("./routes/contact.route");

const app = express();
const port = process.env.POST || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/contact", contactRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
