import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Details extends PureComponent {
  render(){
    const { products } = this.props
    return (
      <div className="Details">
        {console.log(products)}
        <div>
          <strong>Title:</strong>
          <p>{products.title || 'Hey!'}</p>
        </div>
        <div>
          <strong>Description:</strong>
          <p>{ products.description || 'Hey!' }</p>
        </div>
        <div>
          <strong>Price:</strong>
          <p>{ products.price || 'Hey!' }</p>
        </div>
        <div>
          <strong>Photo:</strong>
          <br/>
          <img src={products.picture} alt={products.title}/>
          <br/>
        </div>
        <div>
          <strong>Email:</strong>
          <p>{ products.email || 'Hey!' }</p>
        </div>
        <div>
          <strong>Phone:</strong>
          <p>{ products.phone || 'Hey!' }</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products.find(p => p.id === Number(props.match.params.id))
  }
}

export default connect(mapStateToProps)(Details)