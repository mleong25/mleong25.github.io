import React, { Component } from 'react'
import './styles/InfoBubble.css'

class InfoBubble extends React.Component {
  render() {
    const styles = {
      backgroundColor: this.props.info.color
    }
    
    return (  
      <div className="infoBubble_Container">
        <button className="button" style={styles}>
          <img src={this.props.info.img} />
        </button>
        <div className="infoBubble_Head">
          <h4>{this.props.info.hobby}</h4>
        </div>
      </div>
    )
  }  
}

export default InfoBubble