import React, {Component} from 'react';
import Global from './components/Global'
import Countries from './components/Countries'
import Header from './components/Header'
import axios from 'axios'

import './Main.css';
class App extends Component{
  state={
    global:[],
    countries:[],
    search:''
    
  }
  //Global tally
  componentDidMount(){
    fetch('https://corona.lmao.ninja/all')
    .then(res=> res.json())
    .then(data=>{
      this.setState({
        global:data
      })
    })

    axios.get('https://corona.lmao.ninja/countries')
    .then(res=>{
      this.setState({
        countries:res.data
      })
      
    })
  }
  
  
  handleChange =(e)=>{
    this.setState({
      search:e.target.value
    })
    let countries = this.state.countries.filter(country=>{
      return country.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    if(countries){
        this.setState({
        countries:countries
      })
    }else{
      this.setState({
        search:'',
        countries:[]
      })
    }
   
    
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    
   
  }
  
  render(){
    return(
      <div>
         <Header/>
         <form onSubmit={this.handleSubmit} className="search-form">
            <input type="text" placeholder="Search Country..." value={this.state.search} onChange={this.handleChange}/>
            <button type="submit" className="btn btn-outline-info btn-search">Search</button>
        </form>
        <div className="container-fluid">
          <Global global={this.state.global}/>
          <Countries countries = {this.state.countries} /> 
        </div>
      </div>
    )
  }
}
export default App;