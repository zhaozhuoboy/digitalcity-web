import React, { PropTypes } from 'react';
import img1 from '../../images/dajie.jpg';
import img2 from '../../images/liangzhong.jpg';
import img3 from '../../images/mediav.jpg';
import img4 from '../../images/qinghua.jpg';
import img5 from '../../images/wanmeishijie.jpg';

class GongSiSlider extends React.Component {
  render () {
    let styles={
      root:{
        width: "100%",
        maxWidth: "1090px",
        margin: "0px auto",
        overflow: "hidden",
        padding: "40px 0px",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "rgb(204, 204, 204)",
        position: "relative",
        height: "298px"
      },
      img:{
        width:"20%"
      },
      left:{
        display:"block",
        width:"40px",
        heigth:"216px",
        lineHeight:"216px",
        fontSize:"40px",
        color:"#ccc",
        position:"absolute",
        zIndex:"3",
        top:"50%",
        left:"0",
        marginTop:"-108px",
        textAlign:"center"
      },
      right:{
        display:"block",
        width:"40px",
        heigth:"216px",
        lineHeight:"216px",
        fontSize:"40px",
        color:"#ccc",
        position:"absolute",
        zIndex:"3",
        top:"50%",
        right:"0",
        marginTop:"-108px",
        textAlign:"center"
      }

    }
    return(
      <div style={styles.root}>
        <img src={img1} style={styles.img}/>
        <img src={img2} style={styles.img}/>
        <img src={img3} style={styles.img}/>
        <img src={img4} style={styles.img}/>
        <img src={img5} style={styles.img}/>
        <span style={styles.left}>&lt;</span>
        <span style={styles.right}>&gt;</span>
      </div>
    )
  }
}

export default GongSiSlider
