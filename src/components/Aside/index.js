import React from 'react'

export default (props) => (
  <React.Fragment>
    <aside class="aside">
      <div class="aside-header">
        { props.header }
      </div>
      <div class="aside-body">
        { props.children }
      </div>
      <div class="aside-footer">
        <div class="row gutters-xs">
          { props.footer }
        </div>
      </div>
    </aside>
  </React.Fragment>
)