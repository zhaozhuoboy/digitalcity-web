import React, { PropTypes } from 'react';
import CenterTitle from '../common/CenterTitle';
import '../../css/home/zerobasis.css';
import MoreButton from '../common/MoreButton';

class ZeroBasis extends React.Component {
  render () {
    let styles={
      root:{
        padding:"50px 0"
      },
      p:{
        paddingLeft:"30px",
        marginTop:"18px",
        fontSize:"18px",
        lineHeight:"36px"
      },
      span:{
        fontWeight:"800",
      }
    }
    return(
      <div className="container" style={styles.root}>
        <CenterTitle red1="零基础" black1="入学" red2="4个月" black2="拥有两年项目经验" engblack="Zero base entrance, 4 months, with two years experience in project"/>

        <div className="xiangmubox">
          <div className="xiangmu"><img src="http://obmtlh6zk.bkt.clouddn.com/xiangmu1_03.jpg" /></div>
          <div className="xiangmu"><img src="http://obmtlh6zk.bkt.clouddn.com/xiangmu2_03.jpg" /></div>
          <div className="xiangmu"><img src="http://obmtlh6zk.bkt.clouddn.com/xiangmu3_03.jpg" /></div>
        </div>
        <div className="xiangmubox2">
          <div className="xiangmu"><img src="http://obmtlh6zk.bkt.clouddn.com/xiangmu4_03.jpg" /></div>
          <div className="xiangmu"><img src="http://obmtlh6zk.bkt.clouddn.com/xiangmu5_03.jpg" /></div>
          <div className="xiangmu"><img src="http://obmtlh6zk.bkt.clouddn.com/xiamgmu6_03.jpg" /></div>
        </div>

        <MoreButton style={{width:"164px",margin:"40px auto"}} title="更多学员作品"/>
        <div className="gray-line"></div>
        <p style={styles.p}><span style={styles.span}>就业保障：</span>就业顾问1对1就业指导，就业推荐，提供企业专属岗位业界最权威职业素养软实力训练，全面提高职业素养、
面试技巧、沟通能力等。</p>



      </div>
    )
  }
}

export default ZeroBasis;
