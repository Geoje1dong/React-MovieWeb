import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

fetch("https://openapi.naver.com/v1/search/movie", {
  headers: {
    "X-Naver-Client-Id": "{rH9uKZuMsk3h5h8fOc_l}",
    "X-Naver-Client-Secret": "{yJlM1g1gVE}"
  }
})

class App extends Component {
  state = {
  }
  
  componentWillMount(){
    console.log('will mount')
  }
  
  componentDidMount(){
    console.log('did mount')
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movies, index) => {
      return <Movie title={movies.title} poster={movies.poster} key={index}/>
    })
    return movies
  }
  
  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
