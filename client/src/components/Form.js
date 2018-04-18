import React, { PureComponent } from 'react'

class Form extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    // console.log(name, value)
    

    this.setState({
      [name]: value
    })
  }

  
  render(){
    const initialValues = this.props.initialValues
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title" >title</label>
            <input name="title" id="title" value={
              this.state.value}
              onChange={ this.handleChange } />
          </div>
          <div>
            <label htmlFor="description" >description</label>
            <input name="description" id="description" value={
              this.state.value}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="price" >price</label>
            <input name="price" id="price" value={
              this.state.value}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="picture" >picture</label>
            <input name="picture" id="picture" value={
              this.state.value}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email" >email</label>
            <input name="email" id="email" value={
              this.state.value}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="phone" >phone</label>
            <input name="phone" id="phone" value={
              this.state.value}
              onChange={this.handleChange} />
          </div>

          <button type='submit'>Done</button>
        </form>
      </div>
    )
  }
}

export default Form