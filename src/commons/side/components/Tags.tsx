import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Divider } from 'antd'
import { TagOutlined } from '@ant-design/icons'
import { TagsWrapper } from '../style'
import { ITags } from '../../../types';

const Tags: FC<ITags> = (props) => {
	const { tagListData } = props

	return useMemo(() => {
		return (
			<TagsWrapper>
				{console.log('Tags渲染了')}
				<Divider>标签分类</Divider>
				{tagListData.reverse().map((item) => {
					return (
						<Tag icon={<TagOutlined />} color={item.color} key={item._id}>
								<Link to={'/subject/' + item.tagName} >
									{item.tagName}
								</Link>
						</Tag>
					)
				})}
			</TagsWrapper>
		)
	},[tagListData])
}

export default Tags