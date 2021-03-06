import { FETCHED_ALL_PRODUCTS, FETCHED_PRODUCT, CREATE_PRODUCT } from "../actions/products";

const initialState = {
  products:
  [
    {
      id: 1,
      title: "Duck Liver Pate",
      description: "It's yummy",
      price: 4,
      picture: "../media/duck.jpg",
      email: "saucy@dsauce.com",
      phone: "014 223 1567"
    },
    {
      id: 2,
      title: "Toothpaste",
      description: "Minty fresh",
      price: 2,
      picture: "../media/toothpaste.jpg",
      email: "brusher@fresh.com",
      phone: "013 215 1679"
    },
    {
      id: 3,
      title: "Skort",
      description: "Has a slight identity crisis",
      price: 9,
      picture: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIA4ITydsXK1xikneDcOkfXUJGXqRbRMZAQW-bg5eVifHrpQXGhgdZKmVUe4FAw9QcLtuHh8KH&usqp=CAc",
      email: "confused@befuddled.com",
      phone: "+27 4 773 5276"
    }
  ]
}

export default function(state = initialState, action){
  switch(action.type) {
    case FETCHED_ALL_PRODUCTS:
      return action.payload

    case FETCHED_PRODUCT:
      return action.payload

    case CREATE_PRODUCT:
      console.log('hello from the reducer', action.payload);
      return state

    default:
      return state
  }
}