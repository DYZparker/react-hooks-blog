import { FC, useMemo } from 'react'
import { Avatar, Tabs, List, Divider } from 'antd'
import { LinkBoxWrapper } from '../style'
import { ILinkBox } from '../../../types';

const { TabPane } = Tabs

const LinkBox: FC<ILinkBox> = (props) => {
	const { linkListData } = props

	return useMemo(() => {
		return (
			<LinkBoxWrapper>
				{console.log('Link渲染了')}
				<Divider>相关链接</Divider>
				<Tabs defaultActiveKey="javascript" animated={true} centered>
					{linkListData.map((item) => {
							return (
								<TabPane tab={item.name} key={item._id}>
									<List
										itemLayout="horizontal"
										dataSource={item.content}
										renderItem={i => (
											<List.Item>
												<List.Item.Meta
													avatar={<Avatar shape="square" src={i.src} />}
													title={<a href={i.href} target="_blank" rel="noopener noreferrer">{i.title}</a>}
												/>
											</List.Item>
										)}
									/>
								</TabPane>
							)
						})
					}
				</Tabs>
			</LinkBoxWrapper>
		)
	},[linkListData])
}

export default LinkBox