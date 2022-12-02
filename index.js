import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// mongoose conneton
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/productsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * bodyparser setup
 *   Express v4.16.0 and higher
 * ----------------------------
 * */ 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send(`Store server running on port ${PORT}`));
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
