import React, { PropTypes } from 'react';
import CenterTitle from '../common/CenterTitle';
import MoreButton from '../common/MoreButton';

class Xinzi extends React.Component {
  render () {
    let styles={
      root:{
        width:"100%",
        padding:"50px 0",
        backgroundColor:"#fbfbfb"
      },
      img:{
        display:"block",
        width:"76%",
        margin:"30px auto"
      }
    }
    return(
      <div style={styles.root}>
        <div className="container">
          <CenterTitle red1="薪资" black1="不断攀升,发展" red2="潜力" black2="无限" engblack="Rising wages and development potential"/>
          <img style={styles.img} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/%E6%8A%98%E7%BA%BF%E5%9B%BE_03.jpg"/>
          <MoreButton style={{width:"200px",margin:"0 auto"}} title="了解更多行业资讯"/>
        </div>
      </div>
    )
  }
}

export default Xinzi;
