import React, { PropTypes } from 'react';
import CenterTitle from '../common/CenterTitle';
import InternetCard from '../common/InternetCard';
import '../../css/home/internet.css';

class Internet extends React.Component {
  render () {
    let data=[
      {
        title:"薪资高，让同龄人遥不可及",
        contxt:"web前端开发源于传统的互联网，互联网普及让人才需求量居高不下，随着移动互联网的高速发展，移动终端的前端开发也越来越受到重视，因此薪水自然也高，据智联招聘、51job、拉勾、猎聘网等招聘网站得到的数据，web前端工程师的平均薪资都在万元以上，是真正的高薪职业。",
        imgurl:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/%E5%B7%A5%E8%B5%84%E6%94%B6%E5%85%A5%E6%B0%B4%E5%B9%B3_03.jpg"
      },
      {
        title:"人才缺口大   现在是入行最佳时机",
        contxt:"在互联网高速发展的今天，web前端工程师是市场上紧缺的高技能人才，每天有数万家企业招聘该岗位，以北京为例，每天就有近9000条web前端工程师职位招聘，可以说web前端工程师就业前景广阔，符合未来发展趋势",
        imgurl:"http://obmtlh6zk.bkt.clouddn.com/image/digitalcity/%E4%BA%BA%E6%89%8D%E7%BC%BA%E5%8F%A3%E5%A4%A7_03.jpg"
      }
    ]

    let styles={
      root:{
        padding:"20px 0",
        borderBottom:"1px solid #cacaca"
      }
    }
    return(
      <div style={styles.root}>
        <div className="container">
          <CenterTitle red1="互联网＋时代"
                       black1="/不懂"
                       red2="IT技术"
                       black2="迟早被淘汰"
                       engred="nternet + age don't"
                       engblack="understand IT technology to be eliminated sooner or later"
          />
        <div className="box">
            <InternetCard title={data[0].title} contxt={data[0].contxt} imgurl={data[0].imgurl}/>
            <InternetCard title={data[1].title} contxt={data[1].contxt} imgurl={data[1].imgurl}/>
        </div>
        </div>
      </div>
    )
  }
}

export default Internet;
