import React, { PropTypes } from 'react';
import '../../css/common/internetcard.css';

class InternetCard extends React.Component {
  render () {
    return(
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.contxt}</p>
        <img src={this.props.imgurl}/>
      </div>
    )
  }
}
InternetCard.defaultProps={
  title:"中文标题",
  contxt:"详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述",
  imgurl:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/%E5%B7%A5%E8%B5%84%E6%94%B6%E5%85%A5%E6%B0%B4%E5%B9%B3_03.jpg"
}
InternetCard.PropTypes={
  title:React.PropTypes.string.isRequired,
  contxt:React.PropTypes.string.isRequired,
  imgurl:React.PropTypes.string.isRequired
}
export default InternetCard;
