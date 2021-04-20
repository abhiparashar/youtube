import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    if (!this.props.video) {
      return <div>Loading.....</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <div>
          <iframe src={videoSrc} />
        </div>
        <h4>{this.props.video.snippet.title}</h4>
        <p>{this.props.video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
