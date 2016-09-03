import React, { PropTypes } from 'react';
import MoreButton from '../common/MoreButton';

class SchoolDongTai extends React.Component {
  render () {
    let styles={
      root:{
        padding:"30px 0",
        backgroundColor:"#fff"
      },
      h2:{
        fontWeight:"800",
        textAlign:"center",
        fontSize:"40px"
      },
      p:{
        textAlign:"center",
      },
      ul:{
        listStyle:"none",
        margin:"30px auto",
        width:"100%",
        maxWidth:"1000px"
      },
      li:{
        padding:"14px",
        borderBottom:"1px solid #ccc"
      },
      a:{
        fontSize:"16px",
        padding:"10px 0",
        color:"#212121",
        textDecoration: "none"
      },
      span:{
        float:"right"
      }

    }
    return(
      <div style={styles.root}>
        <div className="container">
          <h2 style={styles.h2}>学校动态</h2>
          <p style={styles.p}>SCHOOL DYNAMIC</p>
          <ul style={styles.ul}>
            <li style={styles.li}></li>
            <li style={styles.li}><a style={styles.a} href="#">用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘<span style={styles.span}>更多></span></a></li>
            <li style={styles.li}><a style={styles.a} href="#">用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘<span style={styles.span}>更多></span></a></li>
            <li style={styles.li}><a style={styles.a} href="#">用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘<span style={styles.span}>更多></span></a></li>
            <li style={styles.li}><a style={styles.a} href="#">用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘<span style={styles.span}>更多></span></a></li>
            <li style={styles.li}><a style={styles.a} href="#">用友B2C研发部招聘用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘 用友B2C研发部招聘<span style={styles.span}>更多></span></a></li>
          </ul>
          <MoreButton style={{width:"200px",margin:"30px auto"}} title="了解更多招聘信息"/>
        </div>
      </div>
    )
  }
}

export default SchoolDongTai;
