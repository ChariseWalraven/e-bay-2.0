import React, { PureComponent } from 'react'
import { fetchProduct } from '../actions/products'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';


export class Details extends PureComponent {
  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }
  render(){
    const { product } = this.props
    return (
      <div className="Details">
        <Button color="primary"><Link to={`/products/`}><Icon>keyboard_backspace</Icon></Link></Button>
        {console.log(product)}
        <div>
          <strong>Title:</strong>
          <p>{product.title || 'Hey!'}</p>
        </div>
        <div>
          <strong>Photo:</strong>
          <br />
          <img src={product.picture} alt={product.title} />
          <br />
        </div>
        <div>
          <strong>Description:</strong>
          <p>{ product.description || 'Hey!' }</p>
        </div>
        <div>
          <strong>Price:</strong>
          <p>{ product.price || 'Hey!' }</p>
        </div>
        <div>
          <strong>Email:</strong>
          <p>{ product.email || 'Hey!' }</p>
        </div>
        <div>
          <strong>Phone:</strong>
          <p>{ product.phone || 'Hey!' }</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    product: state.products
  }
}

export default connect(mapStateToProps, { fetchProduct })(Details)