import React, { PropTypes } from 'react';
import '../../css/common/teachercard.css';

class TeacherCard extends React.Component {
  render () {
    return(
      <div className="teacher-card">
        <img src={this.props.photo} />
        <p className="teacher-name">{this.props.name}</p>
        <p className="jieshao">{this.props.jieshao}</p>
      </div>
    )
  }
}
TeacherCard.PropTypes={
  photo:React.PropTypes.string.isRequired,
  name:React.PropTypes.string.isRequired,
  jieshao:React.PropTypes.string.isRequired

}
export default TeacherCard;
