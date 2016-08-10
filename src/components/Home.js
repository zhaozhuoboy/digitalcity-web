import React, { PropTypes } from 'react';
import Header from './share/Header';
import Slider from './home/Slider';
import Internet from './home/Internet';
import Xinzi from './home/Xinzi';
import GangWei from './home/GangWei';
import Steep from './home/Steep';

class Home extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Slider />
        <Internet />
        <Xinzi />
        <GangWei />
        <Steep />
      </div>
    )
  }
}

export default Home;
