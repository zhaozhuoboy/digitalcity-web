import React, { PropTypes } from 'react';
import '../../css/share/navbar.css';

class NavBar extends React.Component {
  render () {
    return(
      <div className="nav-wrap">
        <div className="container">
          <ul className="clearfix">
            <li><a href="#">热门课程</a></li>
            <li><a href="#">专业技能</a></li>
            <li><a href="#">师资力量</a></li>
            <li><a href="#">课程设置</a></li>
            <li><a href="#">项目实训</a></li>
            <li><a href="#">明星学员</a></li>
            <li><a href="#">学员作品</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar;
