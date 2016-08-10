import React, { PropTypes } from 'react';
import Header from './share/Header';
import Slider from './home/Slider';
import Internet from './home/Internet';

class Home extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Slider />
        <Internet />
      </div>
    )
  }
}

export default Home;
