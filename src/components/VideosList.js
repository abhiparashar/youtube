import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideosList extends Component {
  render() {
    const renderedList = this.props.videos.map((video) => {
      return (
        <VideoItem video={video} onVideoSelect={this.props.onVideoSelect} />
      );
    });
    return <div>{renderedList}</div>;
  }
}

export default VideosList;
