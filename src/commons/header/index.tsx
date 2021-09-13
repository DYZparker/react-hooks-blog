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
				<Col xs={22} sm={22} md={10} lg={12} xl={8}>
					<Link to='/'>
						<HeaderTitle><img src={logoImg} alt='logo' /></HeaderTitle>
					</Link>
				</Col>
				<Col xs={2} sm={2} md={14} lg={12} xl={12}>
					<MenuList />
				</Col>
			</Row>
		</HeaderWrapper>
	)
}

export default Header