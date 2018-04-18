export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  picture: string,
  email: string,
  phone: string
}

interface ProductsList {
  [id: number]: Product
}

const productsById: ProductsList = {
  1: {
      id: 1,
      title: "Duck Liver Pate",
      description: "It's yummy",
      price: 4,
    picture: "../media/duck.jpg",
      email: "saucy@dsauce.com",
      phone: "014 223 1567"
  },
  2: {
      id: 2,
      title: "Toothpaste",
      description: "Minty fresh",
      price: 2,
      picture: "../media/toothpaste.jpg",
      email: "brusher@fresh.com",
      phone: "013 215 1679"
  },
  3: {
      id: 3,
      title: "Skort",
      description: "Has a slight identity crisis",
      price: 9,
      picture: "../media/skort.jpg",
      email: "confused@befuddled.com",
      phone: "+27 4 773 5276"
  }
}

export default productsById