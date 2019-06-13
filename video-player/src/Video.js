import React from 'react';

export class Video extends React.Component {
  render() {
      // src from App used to display the chosen video
    return (
      <div>
        <video controls autostart="true" autoPlay muted 
          src={this.props.src}/>
      </div>
    );
  }
}