import React, { PropTypes } from 'react';
import '../../css/common/starstudent.css';

class StarStudent extends React.Component {
  render () {
    let styles={
      gongzi:{
        color:"#f6001d"
      }
    }
    return(
      <div className="star-card col-xs-12 col-sm-6 col-md-3">
        <div className="img">
          <div className="logo">
            <img src={this.props.logo} />
          </div>
          <img src={this.props.photo} className="photo"/>
        </div>
        <h3>{this.props.name}</h3>
        <p>就职：{this.props.gongsi}</p>
        <p>薪资：<span style={styles.gongzi}>{this.props.gongzi}</span>元/月</p>
        <p>毕业学校：{this.props.school}</p>
      </div>
    )
  }
}

export default StarStudent;
