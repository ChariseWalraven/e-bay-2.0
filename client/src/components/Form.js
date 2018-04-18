import React, { PureComponent } from 'react'
import Button from 'material-ui/Button';

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

          <Button variant="raised" type='submit' className="teal">Done</Button>
        </form>
      </div>
    )
  }
}

export default Form