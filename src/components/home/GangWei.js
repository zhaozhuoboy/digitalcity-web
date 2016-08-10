import React, { PropTypes } from 'react';
import CenterTitle from '../common/CenterTitle';
import '../../css/home/gangwei.css';

class GangWei extends React.Component {
  render () {
    let styles={
      root:{
        padding:"60px 0"
      },
      container:{
        borderBottom:"1px solid #cacaca"
      },
      img1:{
        display:"block",
        width:"90%",
        margin:"30px auto",
        paddingBottom:"30px",
        borderBottom:"1px solid #cacaca"
      },
      img2:{
        display:"block",
        width:"90%",
        margin:"30px auto",
        paddingBottom:"30px"
      }
    }
    return(

      <div style={styles.root}>
        <div className="container">
            <CenterTitle black1="就业岗位" engblack="employment"/>
            <img style={styles.img1} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/%E5%B0%B1%E4%B8%9A%E5%B2%97%E4%BD%8D_07.jpg"/>
            <p className="txt-p">茫茫人海中&nbsp;&nbsp; <span>你是哪一个</span></p>
            <img style={styles.img2} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/who-you-are.jpg"/>
            <p className="txt-2"><span>改变现状</span>&nbsp;&nbsp; 只需<span>4</span>个月</p>
        </div>

      </div>
    )
  }
}

export default GangWei;
