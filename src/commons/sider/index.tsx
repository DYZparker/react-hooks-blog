import * as React from 'react'
import { SiderWrapper } from './style'
import { Affix } from 'antd'
import Author from './components/Author'
import LinkBox from './components/LinkBox'

const Sider: React.FC = () => {
	return (
		<SiderWrapper>
		{console.log('side渲染了')}
			<Author />
			<Affix offsetTop={50}>
				<div>
					<LinkBox />
				</div>
			</Affix>
		</SiderWrapper>
	)
}

export default Sider
