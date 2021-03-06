import { JsonController, Get, Post, HttpCode, Body, Param } from 'routing-controllers'
// import productsById, { Product } from './data'
import Product from './entity'

type ProductList = { products: Product[] }

@JsonController()
export default class ProductController {
//single product as practice
  @Get('/products/:id')
  async getProduct(
    @Param('id') id: number
  ) : Product {
    const product = await Product.findOneById(id)
    return product
  }
  // all products endpoint
  @Get('/products')
  async getAllProducts(): ProductList {
    const products = await Product.find()
    return { products }
  } 

  @Post('/products')
  @HttpCode(201)
  createProduct(
    @Body() body: Product 
  ): Product {
    return body.save()
  }
}