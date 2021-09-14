import { FC, useState, useEffect } from 'react';
// import Topic from './components/Topic';
import ArticleList from '../articleList';
import { getCommonInfoApi, getArticleListApi } from '../../api';
import { IInfo } from '../../types';

//保存首次加载请求回来的数据
let info: IInfo

const Home: FC = () => {
	//更新state来重新渲染
	const [, setInfoData] = useState();

	//第一次加载时请求主页轮播图和文章列表数据
	useEffect(() => {
		if(!info) {
      // getCommonInfoApi().then((res) => {
			getArticleListApi({page: 1, size: 5, search:{tags: ''}}).then((res) => {
        const result = res.data.data
				info = result
				setInfoData(result)
      })
		}
	},[])

	//列表页到底请求下一页数据
	const scrollMore = () => {
		//设置重复点击开关
		let onOff = true
		if(onOff) {
			onOff = !onOff
			getArticleListApi({page: info.page + 1, size: 5, search:{tags: ''}}).then((res) => {
				const result = res.data.data
				info.page++
				info.articleList = [...info.articleList,...result.articleList]
				onOff = !onOff
				setInfoData(result)
			})
		}
	}

	//主页轮播图和最新文章列表
	return (info ? (
			<>
				{console.log('home渲染了', info)}
				{/* <Topic topicList={info.topicList} /> */}
				<ArticleList scrollMore={scrollMore} {...info} />
			</>
		)	: (<></>)
	)
}

export default Home;