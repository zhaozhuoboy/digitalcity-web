import React, { PropTypes } from 'react';
import img1 from '../../images/bai1.png';
import img2 from '../../images/huang.png';
import img3 from '../../images/yuan.png';
import footer from '../../images/footer.png';


class Footer extends React.Component {
  render () {
    let styles={
      root:{
        padding:"40px 0",
        backgroundColor:"#f6001d"
      },
      yellow:{
        color:"#ffd203"
      },
      bai:{
        color:"#FFF",
        margin:"0",
        paddingBottom:"4px"
      },
      input:{
        border: "1px solid rgb(255, 255, 255)",
        color: "rgb(255, 255, 255)",
        padding: "5px 10px",
        backgroundColor:" rgba(255, 255, 255, 0)"
      },
      button:{
        border: "none",
        borderRadius: "5px",
        color: "rgb(246, 0, 29)",
        backgroundColor: "rgb(255, 255, 255)",
        padding:"2px 5px",
        margin:"10px 0 0 30px"
      }

    }
    return(
      <div style={styles.root}>
        <div className="container">
          <div className="foot-left" style={{position:"relative"}}>
            <h2 style={{fontSize:"36px",color:"#fff"}}>高薪就业就选第嘉学社</h2>
            <img src={img1} style={{width:"auto",position:"absolute" ,top:"-30px",left:"15%"}}/>
            <img src={img2} style={{width:"auto",position:"absolute",top:"-30px",left:"25%"}}/>
            <img src={img1} style={{width:"auto",position:"absolute",left:"40%"}}/>
            <img src={img3} style={{width:"auto",position:"absolute",left:"32%"}}/>
            <p style={styles.bai}>秦皇岛第嘉</p>
            <p style={styles.yellow}>秦皇岛市海港区金梦海湾1号秦海路84号4层<br />
              电话：0335-7104491    15703387810    QQ : 3205653686</p>
            <p style={styles.bai}>北京第嘉</p>
            <p style={styles.yellow}>北京朝阳区建国路93号万达广场写字楼A    电话：400-600－7366</p>
            <p style={styles.bai}>沈阳第嘉</p>
            <p style={styles.yellow}>沈阳市沈北新区道义南大街江南甲第D座10-27   电话：400-600－7366<br />
（地铁2号线航空航天大学站A出口即是）</p>
            <p style={styles.bai}>深圳第嘉</p>
            <p style={styles.yellow}>深圳市南山高新科技园南区高新南一道德赛科技大厦604室   电话：400-600－7366</p>
            <img src={footer} style={{width:"auto",position:"absolute",right:"-30px",bottom:"-50px"}}/>
            <div style={{position:"absolute",top:"10px",right:"26%"}}>
                <input type="text" style={styles.input} placeholder="请输入手机号"/>
                <br />
                <button style={styles.button}>报名领取奖学金</button>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Footer;
