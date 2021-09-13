import { FC, useState, useEffect } from 'react';
import Topic from './components/Topic';
import ArticleList from '../../commons/articleList';
import { getCommonInfoApi } from '../../api/common';
import { IInfo } from '../../types';

//保存首次加载请求回来的数据
let info: IInfo

const Home: FC = () => {
	//首次请求数据后更新state来重新渲染
	const [, setInfoData] = useState();

	//请求主页轮播图和文章列表数据
	useEffect(() => {
		// if(Object.keys(info).length === 0) {
		if(!info) {
      getCommonInfoApi().then((res) => {
				console.log('网络请求',res)
        const result = res.data.data
				info = result
				setInfoData(result)
      })
		}
	},[])

	//主页轮播图和最新文章列表
	// return (Object.keys(info).length > 0 ? (
	return (info ? (
			<>
				{console.log('home渲染了', info)}
				<Topic topicList={info.topicList} />
				<ArticleList {...info} />
			</>
		)	: (<></>)
	)
}

export default Home;