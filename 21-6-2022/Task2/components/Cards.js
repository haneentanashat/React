import React from 'react';
import './Body.css';

class Cards extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
      return(
<div class="card">
  <img src={this.props.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{this.props.title}</h5>
    <p class="card-text">{this.props.text}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

      )
    }
  }
  
  export default Cards;