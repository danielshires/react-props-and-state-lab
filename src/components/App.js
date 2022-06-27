import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
    }
  }

  fetchData = () => {
    let fetchURL
    if (this.state.filters.type === 'all') {
      fetchURL = `/api/pets`
    } else {
      fetchURL = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(fetchURL).then(res => res.json()).then(data => { this.setData(data) }).catch(error => console.log(error))
  }

  setData = (data) => {
    this.setState({
      pets: data,
      ...this.state.filters
    })
  }

  updateFilters = (value) => {
    this.setState({
      ...this.state.pets,
      filters: {
        type: value
      }
    }, () => console.log(`New App State: ${this.state.filters.type}`))
  }

  adoptPet = (id) => {
    const findPet = this.state.pets.find(entry => {
      return entry.id === id
    })

    this.setState(prevState => ({
      pets: prevState.pets.map(
        pet => pet.id === findPet.id ? {...pet, isAdopted: true} : pet
      )
    }), () => { console.log(this.state.pets) })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.fetchData} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


// postData = (data) => {
//   fetch(fetchURL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }