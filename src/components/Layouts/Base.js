import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default (props) => (
  <div className="page">
    <Header />
    { props.children }
    <Footer />
  </div>
)