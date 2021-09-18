import { FC, useEffect } from 'react';
import { Button, Typography, Divider } from 'antd';
import { AboutWrapper } from './style';

const { Title, Paragraph } = Typography

const About: FC = () => {
  
	useEffect(() => {
		window.scrollTo(0,0)
  },[])

  const arr = Array.from(new Array(7)).map((item, index) => {
    return "http://122.51.57.99:7777/image/img" + (index + 1) + ".jpg"
  })
  
  return (
    <AboutWrapper>
      <Title level={2}>博客介绍</Title>
      <Paragraph>
        此博客为个人搭建，挂载于腾讯云服务器，实践+笔记
      </Paragraph>
      <Title level={3}>建站应用</Title>
      <Paragraph>
        <ul>
          <li>
            <p>前台展示：react-hooks、typeScript、antd</p>
            <p>代码Github地址：<a href="https://github.com/DYZparker/hook-ts-blog">https://github.com/DYZparker/hook-ts-blog</a></p>
          </li>
          <li>
            <p>后台管理：vue、element</p>
            <p>代码Github地址：<a href="https://github.com/DYZparker/vue-blog">https://github.com/DYZparker/vue-blog</a></p></li>
          <li>
            <p>服务器端：koa2、mangoDB</p>
            <p>代码Github地址：<a href="https://github.com/DYZparker/koa-server">https://github.com/DYZparker/koa-server</a></p></li>
        </ul>
      </Paragraph>

      <Divider />
      <Title level={3}>后台管理链接</Title>
      <Button type="primary" href="http://dengyunzhong.com:8888/" target="_blank">前往管理系统</Button>
      <Divider />
      <Title level={4}>介绍</Title>
      <Paragraph>
        博客管理系统是由Vue + Element写的一个中台，有登录系统和Token验证，管理前台博客的轮播图、标签、链接，还有文章的增删改等
      </Paragraph>
      <Divider />
      <Title level={4}>预览</Title>
      <Paragraph>
        {
          arr.map((item) => {
            return (<img src={item} alt={item} key={item}></img>)
          })
        }
      </Paragraph>
    </AboutWrapper>
  )
}

export default About