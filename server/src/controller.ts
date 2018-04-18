import { Controller, Get } from 'routing-controllers'

@Controller()
export default class ProductController {

  @Get("/hello")
  main() {
    return {
      hello: 'World'
    }
  }

  @Get("/products")
  allProducts(){
    // 1. return dummy data from data file
    // 2. hook up to the db and return data from the db
    return {
      products: 'lots and lots of products'
    }
  }
  
  // Single product get route
  // post a new product

}