import express, {Application,Request ,Response} from 'express'
//import userToken from '../../middlewares/userToken'
import {Cart,TheCartStore} from './cart.model'


const store = new TheCartStore()


//get all carts handler function

const getAllCarts= async (_req: Request, res: Response) => {
    try {
        const carts = await store.index()
            res.json(carts)
    } catch(err) { 
         res.status(400)
         res.json(err)
   }
}

//get cart by id handler function

const getCart = async (req: Request, res: Response) => {
    try {
        const id=req.params.id
       const cart= await store.show(id)
       res.json(cart)
    } catch(err) { 
         res.status(400)
         res.json(err)
   }
}


// create new cart handler function
const createNewCart = async (req: Request, res: Response) => {
    try {
        const product: Cart = req.body
        const theNewCart  = await store.create(product)
        res.json(theNewCart)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

//update Cart by id handler function
const updateCart = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const cart = req.body
        const updatedCart = await store.update(id , cart);
        res.json(updatedCart)
    } catch(err) { 
        res.status(400)
        res.json(err)
  }
}

 //delete cart by id handler function
 const deleteCart = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const cart = await store.delete(id);
            res.send('cart has been deleted')
        } catch(err) { 
            res.status(400)
            res.json(err)
      }
    }
    


    //cart routes

    const cart_routes = (app: Application) => { 
        
    app.get('/cart', getAllCarts)
    app.get('/cart/:id', getCart)
    app.post('/cart', createNewCart)
    app.put('/cart/:id', updateCart)    
    app.delete('/cart/:id', deleteCart)
       
    }
    
    export default cart_routes;

