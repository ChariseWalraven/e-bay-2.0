import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actions/products'
import { Link } from 'react-router-dom'

export class ProductList extends PureComponent {

componentWillMount(){
  this.props.fetchAllProducts()
}

  render() {
    const { products } = this.props.products
    // {console.log(products)}
    
    return (
      <div>
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(p => 
            <tr key={p.id} >
              <td><Link to={`/products/${p.id}`}>{p.title}</Link></td>
              <td>&euro; {p.price}.00</td>
            </tr>) }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchAllProducts })(ProductList)
