import React, { PropTypes } from 'react';
import CenterTitle from '../common/CenterTitle';

class Internet extends React.Component {
  render () {
    let styles={
      root:{
        padding:"20px 0",
        borderBottom:"1px solid #727272"
      }
    }
    return(
      <div style={styles.root}>
        <div className="container">
          <CenterTitle engred="nternet + age don't"
                       engblack="understand IT technology to be eliminated sooner or later"
                       />
        </div>
      </div>
    )
  }
}

export default Internet;
