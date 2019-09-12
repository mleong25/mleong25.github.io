import React, { Component } from 'react'
import './styles/BackDrop.css'

class BackDrop extends React.Component {
    render() {
        let background_styles = {
            backgroundImage: `url(${this.props.value.image})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            height: "500px",
        }

        return(
            <div className="overlay">
                <div style={background_styles} className="backDrop"></div>
            </div>
        )
    }
}
export default BackDrop