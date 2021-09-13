import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { TopicWrapper } from '../style';
import { ITopic } from '../../../types';

const Topic: FC<ITopic> = (props) => {
	//从home父组件传入props.topicList并渲染
	const { topicList } = props
	return (
		<TopicWrapper>
			{console.log('Topic渲染了')}
			<Carousel autoplay>
				{topicList.map((item) => {
					return (<div key={item.alt}>
						<Link to={item.href}><img src={item.src} alt={item.alt} /></Link>
					</div>)
				})
				}
			</Carousel>
		</TopicWrapper>
	)
}

export default Topic