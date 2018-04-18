import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts, createProduct } from '../actions/products'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Link } from 'react-router-dom'
import Form from './Form';

export class ProductList extends PureComponent {

  createProduct = (product) => {
    this.props.createProduct(product)
  }

  componentWillMount(){
    this.props.fetchAllProducts()
  }

  render() {
    const { products } = this.props.products
    // {console.log(products)}
    
    return (
      <div>
        <h3>Product List</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { products.map(p => 
            <TableRow key={p.id} >
              <TableCell><Link to={`/products/${p.id}`}>{p.title}</Link></TableCell>
              <TableCell>&euro; {p.price}.00</TableCell>
            </TableRow>) }
          </TableBody>
        </Table>
        <Form onSubmit={this.createProduct} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { 
  fetchAllProducts,
  createProduct
})(ProductList)
