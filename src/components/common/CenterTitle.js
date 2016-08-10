import React, { PropTypes } from 'react'

class CenterTitle extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:"44px",
        textAlign:"center",
        letterSpacing:"4px",
        fontFamily:"微软雅黑"
      },
      redword:{
        color:"red"
      },
      p:{
        textTransform: "uppercase",
        textAlign:"center",
        width:"440px",
        margin:"0 auto",
        fontSize:"16px",
        padding:"10px 0",
        fontWeight:"100",
        color:"#727272",
        fontFamily:"微软雅黑"
      },
      line:{
        width:"50px",
        margin:"0 auto",
        border:"1px solid red"
      }
    }
    return(
      <div>
        <h2 style={styles.h2}><span style={styles.redword}>{this.props.red1}</span><span>{this.props.black1}</span><span style={styles.redword}>{this.props.red2}</span><span>{this.props.black2}</span></h2>
        <p style={styles.p}><span style={styles.redword}>{this.props.engred}</span>{this.props.engblack}</p>
        <div style={styles.line}></div>
      </div>
    )
  }
}
CenterTitle.defaultProps={
  red1:"互联网+时代",
  black1:"/不懂",
  red2:"IT技术",
  black2:"迟早被淘汰",
  engred:"adfadsfasdfasdfasdfasdfsa",
  engblack:"maydmdasdf adsfjdaskl;jg ad f "
}
CenterTitle.PropTypes={
  red1:React.PropTypes.string.isRequired,
  black1:React.PropTypes.string.isRequired,
  red2:React.PropTypes.string.isRequired,
  black2:React.PropTypes.string.isRequired,
  engred:React.PropTypes.string.isRequired,
  engblack:React.PropTypes.string.isRequired
}
export default CenterTitle;
