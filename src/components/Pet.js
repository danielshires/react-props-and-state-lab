import React from 'react'

class Pet extends React.Component {

  displayButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
  }

  handleClick = () => {
    return this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {this.props.pet.gender === 'male' ? <div>♂</div> : <div>♀</div>}
            {this.props.pet.name}
          </div>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.displayButton()}
        </div>
      </div>
    )
  }
}

export default Pet
