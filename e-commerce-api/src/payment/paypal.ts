import { Application, Request, Response } from "express";
// import paypal from "@paypal/checkout-server-sdk"
// import { config } from "../config";

// const Environment = paypal.core.SandboxEnvironment
// const paypalClient = new paypal.core.PayPalHttpClient(
//     new Environment(
//         config.paypalClientId,
//         config.paypalClientSecret
//     ))

// const storeItems = new Map([
//     [1, { price: 40000, name: "Iphone 13 pro max" }],
//     [2, { price: 800000, name: "Mac Book Pro" }]
// ])

 const pay_with_paypal = async (app: Application): Promise<void> => {
//     app.post("/pay_with_paypal", (req: Request, res: Response): void => {
//         const request = new paypal.orders.OrdersCreateRequest()
//         const total = req.body.items.reduce((sum: any, items: any) => {
//             return sum + storeItems.get(items.id)!.price * items.quantity
//         }, 0)
//         request.prefer("return=representation")
//         request.requestBody({
//             intent: "CAPTURE",
//             purchase_units: [
//                 {
//                     amount: {
//                         currency_code: "USD",
//                         value: <string>total,
//                         breakdown: {
//                             item_total: {
//                                 currency_code: "USD",
//                                 value: <string>total,
//                             },
//                         }
//                     },
//                     items: req.body.items.map((item: any) => {
//                         const storeItem = storeItems.get(item.id)
//                         return {
//                             name: storeItem?.name,
//                             unit_amount: {
//                                 currency_code: "USD",
//                                 value: storeItem?.price
//                             },
//                             quantity: item.quantity
//                         }
//                     })
//                 }
//             ],
//      })

//         try {
//             const order = paypalClient.execute(request)
//             console.log(order)
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     })
 }

 export default pay_with_paypal;