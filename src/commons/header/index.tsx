import * as React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { HeaderWrapper, HeaderTitle } from './style'
import MenuList from './components/MenuList'
import logoImg from '../../statics/logo.png'

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Row justify="center">
				<Col xs={0} sm={0} md={0} lg={6} xl={7} xxl={6}>
					<Link to='/'>
						<HeaderTitle><img src={logoImg} alt='logo' /></HeaderTitle>
					</Link>
				</Col>
				<Col xs={24} sm={24} md={24} lg={18} xl={12} xxl={9}>
					<MenuList />
				</Col>
			</Row>
		</HeaderWrapper>
	)
}

export default Header