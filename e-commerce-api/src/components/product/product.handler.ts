import express, {Application,Request ,Response} from 'express'
//import userToken from '../../middlewares/userToken'
import {Product,TheProductStore} from './product.model'


const store = new TheProductStore()


//get all products handler function

const getAllProducts= async (_req: Request, res: Response) => {
    try {
        const products = await store.index()
            res.json(products)
    } catch(err) { 
         res.status(400)
         res.json(err)
   }
}

//get product by id handler function

const getProduct = async (req: Request, res: Response) => {
    try {
        const id=req.params.id
       const product = await store.show(id)
       res.json(product)
    } catch(err) { 
         res.status(400)
         res.json(err)
   }
}


// create new product handler function
const createNewProduct = async (req: Request, res: Response) => {
    try {
        const product: Product = {
            name: req.body.name,
            desc : req.body.desc,
            img : req.body.img,
            color: req.body.color,
            size : req.body.size,
            price: req.body.price,
            category:req.body.category,
            brand:req.body.brand

        }

        const theNewProduct  = await store.create(product)
        res.json(theNewProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

//update product by id handler function
const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const product = req.body
        const updatedProduct = await store.update(id , product);
        res.json(updatedProduct)
    } catch(err) { 
        res.status(400)
        res.json(err)
  }
}

 //delete product by id handler function
 const deleteProduct = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const product = await store.delete(id);
            res.send('product has been deleted')
        } catch(err) { 
            res.status(400)
            res.json(err)
      }
    }
    


    //product routes

    const product_routes = (app: Application) => { 
        
    app.get('/product', getAllProducts)
    app.get('/product/:id', getProduct)
    app.post('/product', createNewProduct)
    app.put('/product/:id', updateProduct)    
    app.delete('/product/:id', deleteProduct)
       
    }
    
    export default product_routes;



