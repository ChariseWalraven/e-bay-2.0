import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class ProductList extends PureComponent {
  render() {
    const {products} = this.props
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
            {products.map(p => 
            <tr key={p.id} >
              <td>{p.title}</td>
              <td>&euro; {p.price}.00</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
     products: state.products
    }
  }

export default connect(mapStateToProps)(ProductList)
