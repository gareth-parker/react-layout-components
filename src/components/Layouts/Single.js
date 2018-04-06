import React from 'react'
import classnames from 'classnames'

export default (props) => {
  return (
    <div class="page-single">
      <div class="container">
        <div class="row">
          <div class={classnames('col mx-auto', props.colClass)}>
            { props.content }
          </div>
        </div>
      </div>
    </div>
  )}