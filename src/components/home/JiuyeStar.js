import React, { PropTypes } from 'react';
import CenterTitle from '../common/CenterTitle';
import GongSiSlider from '../common/GongSiSlider';
import StarStudent from '../common/StarStudent';
import MoreButton from '../common/MoreButton';
import line from '../../images/hongxian.png';

class JiuyeStar extends React.Component {
  render () {
    let styles={
      root:{
        backgroundColor:" rgb(248, 248, 248)",
        padding:"60px 0"
      },
      h2:{
        fontWeight:"700",
        textAlign:"center"
      },
      red:{
        color:"#f6001d"
      }

    }
    let stardata=[
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/leshi.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/haoxiaojun.jpg",
        name:"郝小军",
        gongsi:"乐视",
        gongzi:"15000",
        school:"河北科技师范学院"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/lianjia.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/daijining.jpg",
        name:"戴金明",
        gongsi:"链家",
        gongzi:"12000",
        school:"河北科技师范学院"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/baidu.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/jiangwen.jpg",
        name:"姜文",
        gongsi:"百度",
        gongzi:"13000",
        school:"河北科技师范学院"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/youku.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/sunlulu.jpg",
        name:"孙璐璐",
        gongsi:"优酷土豆",
        gongzi:"15000",
        school:"河北科技师范学院"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/wangyi.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/yuhao.jpg",
        name:"余昊",
        gongsi:"网易",
        gongzi:"25000",
        school:"武汉大学"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/htc.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/zhangjunya.jpg",
        name:"张君雅",
        gongsi:"HTC",
        gongzi:"15000",
        school:"南京艺术师范学校"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/mi.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/wangshaojing.jpg",
        name:"王少静",
        gongsi:"小米科技",
        gongzi:"15000",
        school:"河北理工学校"
      },
      {
        logo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/souhu.jpg",
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/logoinfo/kongyue.jpg",
        name:"孔越",
        gongsi:"搜狐",
        gongzi:"12000",
        school:"沈阳大学"
      }

    ];
    let StarStudentCards =[];
    for(let i = 0 ;i< stardata.length ; i++){
      StarStudentCards.push(
        <StarStudent logo={stardata[i].logo}
                     photo={stardata[i].photo}
                     name={stardata[i].name}
                     gongsi={stardata[i].gongsi}
                     gongzi={stardata[i].gongzi}
                     school={stardata[i].school}
                  />
      )
    }
    return(
      <div style={styles.root}>
        <div className="container">
          <CenterTitle style={{width:"840px",margin:"0 auto"}}
                      black1="百余家合作企业，近千个就业岗位虚位以待"
                      red2="期待你的加入"
                      engblack="Looking forward to your joining"/>
          <GongSiSlider />
          {StarStudentCards}
          <MoreButton style={{width:"240px",margin:"50px auto"}} title="了解更多就业学员信息"/>
          <h2 style={styles.h2}>他们已经实现了<span style={styles.red}>完美蜕变</span>，月薪万元<span style={styles.red}>只需一个电话</span></h2>
          <img src={line} style={{display:"block",width:"423px",margin:"0 auto"}}/>
        </div>
      </div>
    )
  }
}

export default JiuyeStar;
