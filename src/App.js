import React, { Component } from 'react';
import './App.css';
import Movie from './movie';


class App extends Component {
  state = {
    movie_page: 1
  }
  
  componentWillMount(){
    console.log('will mount')
  }
  
  componentDidMount(){
    console.log('did mount')
    this._getMovies();
    window.addEventListener('scroll', this._infiniteScroll, true);
    
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movies, index) => {
      console.log(movies)
      return <Movie title={movies.title} poster={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} overview={movies.overview} rating={movies.vote_average} genre={movies.genre_ids} key={movies.id}/>
    })
    return movies
  }
  
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies.results.concat(movies.results)
    })
  }
  
  _callApi = () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d5f6d7a1803c7ddadee30f4f693b4340&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.movie_page}`)
    .then(response => response.json())
    .catch(err => console.log(err))
  }
  
  _infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight === scrollHeight){
      this.setState({
        movie_page: this.state.movie_page + 1
      })
      this._getMovies();
    }
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
