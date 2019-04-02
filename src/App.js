import React, {Component} from 'react'


class App extends Component {
  constructor(){
    super()
    this.state = {
    loading: false,
    postac: {},
    }
  }

  componentDidMount(){
    this.setState({ loading: true})
    fetch("https://swapi.co/api/people/10/")
    .then( response => response.json() )
    .then (data => this.setState({ postac:data, loading:false}))
    .catch(error => console.log(error))
    }
  


  render(){
        const text = this.state.loading ? "Loading..." : this.state.postac.name
    
    return(
      <div>
        <h1>{text}</h1>
      </div>
    )
}

}


export default App