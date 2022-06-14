import { Schema, model } from "mongoose";

export type Order = {
  id?: number;
  user_id: string;
  product_id: string;
  status: string;
  quantity: number;
}

const orderSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

const order = model("Order", orderSchema)

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      const result = await order.find({})
      return result;
    } catch (err) {
        throw new Error(`unable get order: ${err}`);
    }
}

  //show method
  async show(id: string): Promise<Order> {
    try {
      const result = await order.findById(id);
      return result;
    } catch (err) {
        throw new Error(`Cannot find order ${id}. Error: ${err}`)
    }
  }

  //create methode
  async create(o:Order): Promise<Order> {
    try {
      const createOrders = new order(o)
      const result = await createOrders.save()
      return result;
    } catch (err) {
        throw new Error(`unable to create the order. Error: ${err}`)
    }
  }

  //update method
  async update(id: Number, o:Order): Promise<Order> {
    try {
      const result = await order.findOneAndUpdate(id, o, { returnOriginal: false })
      return result;
    } catch (err) {
        throw new Error(`unable to Update the order. Error: ${err}`)
    }
  }

  //delete method
  async delete(id: string): Promise<Order> {
    try {
      const result = await order.findByIdAndRemove(id)
      return result;
    } catch (err) {
        throw new Error(`unable to delete this order. Error: ${err}`);
    
    }
  }
}
