import { FC, useMemo } from 'react'
import { Avatar, List, Divider } from 'antd'
import { LinksWrapper } from '../style'
import { ILinks } from '../../../types';

const Links: FC<ILinks> = (props) => {
	const { linkListData } = props

	return useMemo(() => {
		return (
			<LinksWrapper>
				{console.log('Link渲染了')}
				<Divider>相关链接</Divider>
				<List
					size="small"
				 	className="listbox"
					itemLayout="horizontal"
					dataSource={linkListData.reverse()}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								avatar={<Avatar shape="square" src={item.img} />}
								title={<a target="_blank" rel="noreferrer" href={item.href}>{item.linkName}</a>}
								description={item.describe}
							/>
						</List.Item>
					)}
				/>
			</LinksWrapper>
		)
	},[linkListData])
}

export default Links