import React, { Component } from 'react'
import SearchBar from './components/SeachBar'
import youtube from './api/Youtube'
import VideosList from './components/VideosList'
import VideoDetail from './components/VideoDetail'

class App extends Component {
  state={videos:'',selectvideo:null}

  handleSubmit = async(term)=>{
    let response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    this.setState({videos:response.data.items})
  }

  onVideoSelect = (video) =>{
   this.setState({selectvideo:video})
  }


  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}/>
        <div>
        I have {this.state.videos.length} videos
        </div>
        <VideosList videos={!this.state.videos?[]:this.state.videos} onVideoSelect={this.onVideoSelect} />
        <VideoDetail video={this.state.selectvideo}/>
      </div>
    )
  }
}

export default App
