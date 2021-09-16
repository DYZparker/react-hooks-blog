import * as React from 'react'
// import { Timeline, Typography, Divider } from 'antd';
// import { ManOutlined, ClockCircleOutlined } from '@ant-design/icons'
// import { AboutMeWrapper } from './style'

// const { Title, Paragraph, Text } = Typography

const AboutMe: React.FC = () => {
  
	React.useEffect(() => {
		window.scrollTo(0,0)
  },[])
  
  return (
    <div>
        此博客为个人搭建，挂载于腾讯云服务器，实践+笔记
    </div>
  )
}

export default AboutMe