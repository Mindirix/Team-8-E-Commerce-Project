import mongoose from "mongoose";


export interface Product {
  id?: string
  name: string
  desc: string
  img: string[]
  color: string[] 
  size: string[]
  price: number
  category: string[]
  brand: string 


}
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: Array,
    required: true
  },
  color: {
    type: Array,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  size: {
    type: Array,
    required: true,
    trim: true
  },
  category: {
    type: Array,
    trim: true
  },
  brand: {
    type: Array,
    trim: true
  },
},
{ timestamps: true }
)

const products = mongoose.model("Product", productSchema)


export class TheProductStore {

  // index method

  async index(): Promise<Product[]> {
    try {
      const result = await products.find({})
      return result
    } catch (err) {
      throw new Error(`Unable to display Products. Error: ${err}`)
    }
  }


  //show method
  async show(id: string): Promise<Product> {
    try {
      const result = await products.findById(id)
      return result;
    } catch (err) {
      throw new Error(`Unable to display Product. Error: ${err}`)
    }
  }
  //create method
  async create(product: Product): Promise<Product> {
    try {
      const createProduct = new products(product)
      const result = await createProduct.save()
      return result;
    } catch (err) {
      throw new Error(`Unable to create Product. Error: ${err}`)
    }
  }

     //update method
  
  async update(id:string ,product: Product): Promise<Product> {
    try {
      const result = await products.findByIdAndUpdate(id , {$set: product},{ new: true } )
      return result 
    } catch (err) {
      throw new Error(`Unable to update Product. Error: ${err}`)
    }
  }

  //delete method
  async delete(id: string): Promise<Product> {
    try {
      const result = await products.findByIdAndDelete(id)
      return result
    } catch (err) {
      throw new Error(`unable to delete this product. Error: ${err}`);

    }
  }



}