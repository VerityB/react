import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';


const VIDEOS = {
  fast: '/videos/react_video-fast.mp4',
  slow: '/videos/react_video-slow.mp4',
  cute: '/videos/react_video-cute.mp4',
  eek: '/videos/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
// App passes down this.state.src to Video.js and Menu.js
    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this)
  }
  
  chooseVideo(newVideo) {
  this.setState({
    src: VIDEOS[newVideo]
  });
}
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

export default App;