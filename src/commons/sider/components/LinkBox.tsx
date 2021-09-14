import { FC, useState, useEffect } from 'react'
import { Avatar, Tabs, List, Divider } from 'antd'
import { LinkBoxWrapper } from '../style'
import { getSideInfoApi } from '../../../api'
import { ILink } from '../../../types';

const { TabPane } = Tabs
//保存首次加载请求回来的数据
let info: Array<ILink>

const LinkBox: FC = () => {
	//更新state来重新渲染
	const [, setInfoData] = useState();

	//第一次加载时请求side数据
  useEffect(() => {
		if(!info) {
			getSideInfoApi().then((res) => {
				const result = res.data.data
				info = result.linkList
				setInfoData(result.linkList)
			})
		}
	},[])

	return (info ? (
			<LinkBoxWrapper>
				{console.log('Link渲染了', info)}
				<Divider>相关链接</Divider>
				<Tabs defaultActiveKey="javascript" animated={true} centered>
					{info.map((item) => {
							return (
								<TabPane tab={item.name} key={item.name}>
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
		: <></>
	)
}

export default LinkBox