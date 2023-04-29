//Dependency import
const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const itemRouter = require("./routers/item");
const cartRouter = require("./routers/cart");
const orderRouter = require("./routers/order");

//Invoke express
const app = express();
app.use(express.json());

//Specify port
const port = process.env.PORT;

//Load routes
app.use(userRouter);
app.use(itemRouter);
app.use(cartRouter);
app.use(orderRouter);

//Listen for connections
app.listen(port, () => {
	console.log("Server listening on Port: " + port);
});
