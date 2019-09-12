import React, { Component } from 'react'
import './styles/InfoBubble.css'

class InfoBubble extends React.Component {
  render() {
    const styles = {
      backgroundColor: this.props.info.color,
      width: this.props.info.width,
      backgroundImage: this.props.info.backgroundImage,
    }
    
    return (  
      <div className="infoBubble_Container">
        <button className="button" style={styles}>
          <img src={this.props.info.img} />
        </button>
        <div className="infoBubble_Head">
          <h3>{this.props.info.hobby}</h3>
        </div>
        <p>{this.props.info.description}</p>
      </div>
    )
  }  
}
export default InfoBubble