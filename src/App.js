import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

// fetch("https://openapi.naver.com/v1/search/movie", {
//   headers: {
//     "X-Naver-Client-Id": "{rH9uKZuMsk3h5h8fOc_l}",
//     "X-Naver-Client-Secret": "{yJlM1g1gVE}"
//   }
// })

class App extends Component {
  state = {}
  
  componentWillMount(){
    console.log('will mount')
  }
  
  componentDidMount(){
    console.log('did mount')
    this._getMovies();
    
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movies, index) => {
      return <Movie title={movies.title} poster={movies.medium_cover_image} key={movies.id}/>
    })
    return movies
  }
  
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    
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
