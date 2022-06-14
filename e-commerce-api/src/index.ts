import express, { Request, Response, json, Application } from 'express';
import mongoose from "mongoose";
import { config } from './config';
import product_routes from './components/product/product.handler'
import user_store from './components/user/user.handler';
import order_routes from './components/order/order.handler';
import cart_routes from './components/cart/cart.handler';
import pay_with_paypal from './payment/paypal';


const app: Application = express();
const port: number = 8080

// Connecting to MongoDB
mongoose.connect( config.url ).then((): void => {
  console.log("Database Connected");
}).catch((err): void => {
  throw new Error(err);
});

app.use(json());

app.get('/', (_req: Request, res: Response): void => {
  res.send("Welcome to the store's home page");
});

user_store(app)
product_routes(app)
order_routes(app)
cart_routes(app)
pay_with_paypal(app)


app.listen(port, (): void =>
  console.log(`your server is running at http://localhost:${port}`)
);