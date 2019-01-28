import React, { Component } from 'react'
import afternoon from '../img/afternoon.jpg'
import './styles/Header.css'

class Header extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let time
    const styles = {
      fontSize: 40
    }
    
    let background
    let background_styles = {
    }
    
    if (hours < 12) {
      time = "morning"
      styles.color = "#ffb83f"
    } else if (hours >= 12 && hours < 23) {
      time = "afternoon"
      styles.color = "#ffc832"
      background_styles.backgroundImage = `url(${afternoon})`;
      background_styles.backgroundSize = "cover";
      background_styles.backgroundRepeat = "no-repeat";
    } else {
      time = "evening"
      styles.color = "#1197ff"
    }
    
    return(
      <div style={background_styles} className="header">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
        
        <h2 style={styles}>Good {time}!</h2>
        
        <div className="header_img">
          <img src="" className="header_img_profile"/>
        </div>
        
        <p className="header_description" style={{color: "#ededed"}}>{"Welcome to my website! Visit at different times of the day to check out some cool features! Keep scrolling to check out what I'm up to."}</p>
      </div>
    )
  }
}

export default Header