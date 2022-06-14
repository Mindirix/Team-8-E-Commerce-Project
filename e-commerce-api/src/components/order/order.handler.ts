import { Request, Response, Application } from 'express'
import { OrderStore, Order } from './order.model'
import userToken from '../../middlewares/userToken'
import adminToken from '../../middlewares/adminToken'

const store = new OrderStore()

//get all orders handler function

const index = async (_req: Request, res: Response) => {
    try {
        const orders = await store.index()
        res.json(orders)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

//get order by id handler function

const getOrder = async (req: Request, res: Response) => {
    try {
        const order = await store.show(req.params.id)
        res.json(order)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

//create new order handler function

const createNewOrder = async (req: Request, res: Response) => {
    try {
        const o: Order = {
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            status: req.body.status,
            quantity: parseInt(req.body.quantity),
        }

        const theNewOrder = await store.create(o)
        res.json(theNewOrder)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

// Update order handler function

const updateOrder = async (req: Request, res: Response) => {
    try {
        const o: Order = {
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            status: req.body.status,
            quantity: parseInt(req.body.quantity),
        }

        const theNewOrder = await store.update(parseInt(req.params.id), o)
        res.json(theNewOrder)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

//delete order by id handler function

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const order = await store.delete(req.params.id);
        res.json(order);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

//order routes

const order_routes = (app: Application) => {
    app.get('/orders', [userToken, adminToken], index)
    app.get('/orders/:id', userToken, getOrder)
    app.post('/orders', userToken, createNewOrder)
    app.put('/orders', userToken, updateOrder)
    app.delete('/orders/:id', userToken, deleteOrder)
}

export default order_routes
