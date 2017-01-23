import React from 'react'
import { Link } from 'react-router'
import Header from 'js/Header'
import Footer from 'js/Footer'

export default React.createClass({
  render() {
    return (
      <section>
        <Header />
        { this.props.children }
        <Footer />
      </section>
    )
  }
})
