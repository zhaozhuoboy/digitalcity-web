import React, { PropTypes } from 'react';
import '../../css/share/topbar.css';

class TopBar extends React.Component {
  render () {
    return(
      <div className="top-wrap">
        <div className="container">
          <h1>第嘉学社</h1>
          <form>
            <input type="text" className="input" placeholder="手机号"/>
            <input type='button' value="领取助学金" className="btn"/>
          </form>
        </div>
      </div>
    )
  }
}

export default TopBar;
