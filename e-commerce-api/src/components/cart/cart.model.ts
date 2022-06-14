import mongoose from "mongoose";


export interface Cart {
  id?: number
  userId: string
  products : object[]

}
const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
{ timestamps: true }
)

const carts = mongoose.model("Cart", cartSchema)


export class TheCartStore {

    // index method

  async index(): Promise<Cart[]> {
    try {
      const result = await carts.find({})
      return result
    } catch (err) {
      throw new Error(`Unable to display Carts Error: ${err}`)
    }
  }


  //show method
  async show(id: string): Promise<Cart> {
    try {
      const result = await carts.findById(id)
      return result;
    } catch (err) {
      throw new Error(`Unable to display Cart. Error: ${err}`)
    }
  }
  //creat method
  async create(cart: Cart): Promise<Cart> {
    try {
      const createCart = new carts(cart)
      const result = await createCart.save()
      return result;
    } catch (err) {
      throw new Error(`Unable to create Cart. Error: ${err}`)
    }
  }

   //update method
  
  async update(id:string ,cart: Cart): Promise<Cart> {
    try {
      const result = await carts.findByIdAndUpdate(id , {$set: cart},{ new: true } )
      return result 
    } catch (err) {
      throw new Error(`Unable to update Cart. Error: ${err}`)
    }
  }

  //delete method
  async delete(id: string): Promise<Cart> {
    try {
      const result = await carts.findByIdAndDelete(id)
      return result
    } catch (err) {
      throw new Error(`unable to delete this cart. Error: ${err}`);

    }
  }



}
