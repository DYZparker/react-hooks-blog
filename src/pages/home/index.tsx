import { FC, useContext } from 'react';
import ArticleList from '../../commons/articleList';
import { HomeWrapper } from './style';
import { StContext } from '../../store';

const Home: FC = () => {

	//获取仓库数据并生成props传给子组件
	const store = useContext(StContext)
	const homeData = store.state.homeData
	const homeProps = {
		...homeData,
		tag: '',
		actionType: 'addHomeArticleList',
		stataType: 'homeData'
	}

	//主页全部文章列表
	return (
		<HomeWrapper>
			<div className="list-header">最新文章：</div>
			<ArticleList {...homeProps}/>
		</HomeWrapper>
	)
}

export default Home;