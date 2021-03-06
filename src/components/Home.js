import React, { PropTypes } from 'react';
import Header from './share/Header';
import Slider from './home/Slider';
import Internet from './home/Internet';
import Xinzi from './home/Xinzi';
import GangWei from './home/GangWei';
import Steep from './home/Steep';
import ZeroBasis from './home/ZeroBasis';
import JiuyeStar from './home/JiuyeStar';
import SchoolDongTai from './home/SchoolDongTai';
import Footer from './share/Footer';

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
        <ZeroBasis />
        <JiuyeStar />
        <SchoolDongTai />
        <Footer />
      </div>
    )
  }
}

export default Home;
