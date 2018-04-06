import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import FooterSub from '../FooterSub'
import Aside from '../Aside'

export default (props) => {
  return (
    <React.Fragment>
      {
        props.withAside && (
          <Aside header={props.asideHeader} footer={props.asideFooter}>
            { props.asideContent }
          </Aside>
        )
      }
      <div class="page-main">
        <Header />
        <div class="page-content">
          { props.mainTitle && (
            <div class="container">
              <div class="page-header">
                <h1 class="page-title">{ props.mainTitle }</h1>
              </div>
            </div>
          )}
          { props.children }
        </div>
      </div>
      <FooterSub />
      <Footer />
    </React.Fragment>
  )}