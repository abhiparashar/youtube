import React, { Component } from "react";

class VideoItem extends Component {
  render() {
    return (
      <div onClick={()=>this.props.onVideoSelect(this.props.video)}>
        <div>{this.props.video.snippet.title}</div>
        <div>
          <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.description} />
        </div>
      </div>
    );
  }
}

export default VideoItem;
