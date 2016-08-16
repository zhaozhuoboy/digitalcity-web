import React, { PropTypes } from 'react';

class ZuoPinCard extends React.Component {
  render () {
    let styles={
      root:{
        marginTop:"20px",
        marginBottom:"20px",
      },
      img:{
        display:"block",
        maxWidth:"261px",
        maxHeight:"262px"
      },
      h3:{
        textAlign:"center",
        padding:"10px",
        backgroundColor:this.props.titleBgColor,
        margin:"0",
        color:"#fff",
        letterSpacing: "6px"
      }
    }
      return(
        <div className="col-xs-12 col-sm-6 col-md-3" style={styles.root}>
          <img style={styles.img} src={this.props.zuopinImg}/>
          <h3 style={styles.h3}>{this.props.title}</h3>
        </div>
      )
  }
}
ZuoPinCard.defaultProps={
  zuopinImg:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/zuopin6.jpg",
  title:"标题",
  titleBgColor:"#ccc"
}
export default ZuoPinCard;
