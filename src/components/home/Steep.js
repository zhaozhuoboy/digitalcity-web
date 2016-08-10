import React, { PropTypes } from 'react';
import '../../css/home/steep.css';
import MoreButton from '../common/MoreButton';
import TeacherCard from '../common/TeacherCard';

class Steep extends React.Component {
  render () {
    let styles={
      root:{
        padding:"50px 0",
        backgroundColor:"#f8f8f8"
      },
      img01:{
        width:"201px"
      }
    }
    let teacherData = [
      {
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/linxijun_03.jpg",
        name:"林喜军",
        jieshao:"Frank　北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历、10余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。"
      },
      {
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/liujian_03.jpg",
        name:"刘健",
        jieshao:"Jason 曾就职于北京创世奇迹Wonderad全国创意总监，并在OgilvyOne、麦肯光明、电通广告、AGENDA、等国际4A广告公司工作过，有多年创意方面的专业技能，而且在客户服务有丰富的经验。曾经服务过游戏客户：完美世界,网易游戏,盛大,搜狐畅游等。品牌客户IBM, Moto, DHL, LG, Airbus, WWF, JEEP, Siemens, Honda Acura众多国内外客户。"
      },
      {
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/chenshuo_03.jpg",
        name:"陈硕",
        jieshao:"现任金棕榈广告副总经理/创意总监，15年的广告行业从业经验，非常优秀的客户把控能力及项目开发能力。曾在多家4A及local广告公司任职负责创意策划工作，并对多家4A广告公司项目进行指导并协助完成。"
      },
      {
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/yangyong_03.jpg",
        name:"杨永",
        jieshao:"现就职于北京铭硕知识产权代理有限公司。研发中心前端工程师总监，负责管理沈阳分公司前端开发工作。擅长网页重构，人机交互设计，网页构架设计，CSS框架建设，安卓apk，苹果APP应用开发。"
      },
      {
        photo:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/peter_03.jpg",
        name:"Peter",
        jieshao:"好多视频网站创始人，慕课网在线视频的主讲，疯狂的在线教育爱好者，十多年业界经验的骨灰级专家，曾在清华大学举办过沙龙，倡导推广前端技术，在github上有十几万的粉丝。"
      }
    ];
    let teacherList =[];
    for(let i =0;i<teacherData.length;i++){
      teacherList.push(
        <TeacherCard photo={teacherData[i].photo} name={teacherData[i].name} jieshao={teacherData[i].jieshao}/>
      )
    }
    return(
      <div style={styles.root}>
        <div className="container">
          <img style={styles.img01} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/01-learn-what_03.jpg"/>
          <p className="content"><span>pc端模块：</span>div＋css网站重构，浏览器兼容，网站交互特效，数据交互技术，面向对象编程思想及模块化开发原理</p>
          <p className="content"><span>移动端模块：</span>css3动画，响应式设计，H5开发，微信场景开发技术，Web App开发</p>
          <p className="content"><span>全栈模块：</span>最新mean技术栈，es6，nodejs，reactjs组件化开发等技术</p>
          <p className="content"><span>全国首创ui+web前端课程，熟悉完整工作流程，减少沟通阻力，实现与ui设计师工作完美对接</span></p>
          <MoreButton style={{width:"200px",margin:"40px auto"}} title="了解更多课程内容"/>
          <div className="gray-line"></div>


          <img style={styles.img01} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/02-who-jiao_03.jpg"/>
          <div className="teachers">
            {teacherList}
          </div>
          <MoreButton style={{width:"200px",margin:"40px auto"}} title="查看更多师资信息"/>
          <div className="gray-line"></div>

          <img style={styles.img01} src="http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/03-hwo-to-learn_03.jpg "/>
          <p className="content"><span>企业项目实战教学，学习＝工作，</span>课程内容根据企业招聘需求更新，毕业即可顺利进入工作状态</p>



        </div>
      </div>
    )
  }
}

export default Steep;
