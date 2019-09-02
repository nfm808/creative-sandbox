import React from 'react';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    let body = window.document.getElementsByTagName("body")[0]
    if (this.props.location.pathname !== prevProps.location.pathname) {
      body.scrollTo(0, 0)
    }
  }
  render() {
    return (
      this.props.children
    )
  }
}

export default withRouter(ScrollToTop);