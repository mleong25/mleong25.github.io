import React, { Component } from 'react'
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default Portfolio;