import { Component } from 'react'

import { Searchbar } from './components/Searchbar';
import { Button } from './components/Button'
import { ImageGallery } from './components/ImageGallery'
import  getImg  from './services/images-api'
import {Spinner} from './components/Loader'

import './App.css';

class App extends Component  {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    isLoading: false,
  }

  findImages = ( value) => {
    this.setState({searchValue: value})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({images: [], page: 1})
      
       this.fetchImages()
    }
  }

  fetchImages = () => {
    const { searchValue, page } = this.state
    const options = { searchValue, page }

    this.setState({isLoading: true})

    getImg
      .fetch(options)
      .then(images => this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1
      })))
      .then(() => {
        if (this.state.page > 2) {
          window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        }
      })
      .catch(error => console.log(error))
      .finally(this.setState({isLoading: false}))
    
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.findImages} />
        <ImageGallery images={this.state.images} />
        
        {this.state.images.length !== 0 && <Button onSubmit={this.fetchImages} />}
        {this.state.isLoading && <Spinner />}
      </>
    )
  }
}

export default App;
