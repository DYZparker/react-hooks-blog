import { FC, useState, useEffect } from 'react';
import { SmileOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { ListWrapper } from './style';
import { IArticle }	from '../../types';
import ArticleCard from './components/articleCard';
import { IInfo } from '../../types';
import { getCommonInfoApi, getArticleListApi } from '../../api';

//保存首次加载请求回来的数据
let info: IInfo

const ArticleList: FC<IArticle> = (props) => {
	const { articleList, total } = props
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

	//绑定下拉事件，事件函数showMore判断滚动条到页底则调用父组件scrollMore事件加载下一页
	useEffect(() => {
		const showMore = () => {
			// console.log('======',articleList.length , total,'======')
			const scrollY = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
			const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight // 页面的可视高度（能看见的）
			const allHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) // 页面的总高度（所有的）
			// console.log('======',scrollY + vh , allHeight,'======')
			if (scrollY + vh >= allHeight) { // 当滚动条滑到页面底部
				if(articleList.length < total) {	//当现存列表数小于数据库中列表总数时
					console.log('===请求===')
					scrollMore()
				}
			}
		}
    window.addEventListener('scroll', showMore)
    return () => {
      window.removeEventListener('scroll', showMore)
    }
	},[articleList, total, scrollMore])

	return (
		<ListWrapper>
			{console.log('Article渲染了')}
			<div className="list-header">最新文章</div>
			{
				articleList.map((item) => {
					return <ArticleCard key={item._id} {...item} />
				})
			}
			{
				articleList.length === total ? 
				<div className="list-over"><SmileOutlined /> 已经是最后一篇了 <SmileOutlined /></div> : 
				<div className="list-more"><ArrowDownOutlined /> 下拉加载更多 <ArrowDownOutlined /></div>
			}
		</ListWrapper>
	)
}

export default ArticleList