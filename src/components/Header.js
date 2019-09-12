import React, { Component } from 'react'
import morning from '../img/morning1.jpg'
import profile from '../img/profile.jpg'
import './styles/Header.css'

class Header extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let time
    const styles = {
      fontSize: 40
    }

    let background_styles = {
    }

    styles.color = "#ffb83f"
    background_styles.backgroundImage = `url(${morning})`;
    background_styles.backgroundSize = "cover";
    background_styles.backgroundRepeat = "no-repeat";
    background_styles.backgroundAttachment = "fixed";
    background_styles.backgroundPosition = "center";
    
    return(
      <div style={background_styles} className="header">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
        
        <div className="header_img">
          <img src={profile} className="header_img_profile"/>
        </div>
        
        <h1 className="name">MARCUS LEONG</h1>
      </div>
    )
  }
}

export default Header