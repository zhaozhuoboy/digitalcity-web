import React, { PropTypes } from 'react';
import '../../css/common/morebutton.css';

class MoreButton extends React.Component {
  render () {
    return(
      <div style={this.props.style}>
        <a className="more-btn">{this.props.title}<span></span></a>
      </div>
    )
  }
}
MoreButton.defaultProps={
  title:"更多按钮"
}
MoreButton.PropTypes={
  style:React.PropTypes.Object,
  title:React.PropTypes.string
}
export default MoreButton;
