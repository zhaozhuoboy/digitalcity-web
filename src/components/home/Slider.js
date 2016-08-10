import React, { PropTypes } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
class Slider extends React.Component {
  render () {
    return(
      <div>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img width={1920} height={646} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/banner-01_02.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={646} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/banner-01_02.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={646} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/banner-01_02.jpg"/>
        </Carousel.Item>


      </Carousel>
      </div>
    )
  }
}

export default Slider;
