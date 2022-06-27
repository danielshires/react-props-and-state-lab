import React from 'react'

class Filters extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: 'all'
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    },()=>this.props.onChangeType(this.state.value))
  }

  handleSubmit = ()=> {
    this.props.onFindPetsClick(this.state.value)
  }

render() {
  return (
    <form className="ui form" onSubmit={(event)=>{event.preventDefault()}}>
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button type="submit" value="Submit" className="ui secondary button" onClick={this.handleSubmit}>Find pets</button>
      </div>
    </form>
  )
}
}

export default Filters
