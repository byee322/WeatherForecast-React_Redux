import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import Weather from '../containers/weather_list'

  const divStyle = {
	'marginTop': '10px'
  }


export default class App extends Component {
  
  render() {
  
   return (
    	<div style={divStyle}>
    		<SearchBar /> 
    		<Weather />
    	</div>
    );
  }
}
