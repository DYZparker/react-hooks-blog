import { FC, useEffect, useCallback, useContext } from 'react';
import { SmileOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { ListWrapper } from './style';
import ArticleCard from './components/articleCard';
import { IProps } from '../../types';
import { getArticleListApi } from '../../api';
import { StContext } from '../../store';

const ArticleList: FC<IProps> = (props) => {
	const store = useContext(StContext)
	const { articleList, total, page, tag, actionType, stataType } = props

	//按页请求列表数据并保存
	const getArticleList = useCallback(() => {
		console.log('请求数据')
		getArticleListApi({page, size: 5, search:{tags: tag}}).then((res) => {
			const result = res.data.data
			store.dispatch!({
				type: actionType,
				state: {
					[stataType]: {
						articleList: result.articleList,
						total: result.total,
						page: result.page + 1
					}
				}
			})
		})
	},[tag, page, actionType, stataType, store.dispatch])

	//初始化文章列表数据
	useEffect(() => {
		console.log('初始化列表')
		if(articleList.length === 0) {
			getArticleList()
		}
	},[articleList.length, getArticleList])

	//绑定下拉事件，事件函数showMore判断滚动条到页底则调用getArticleList加载下一页
	useEffect(() => {
		//页面下拉加载防抖函数
		let timer: number
		const singleAction = () => {
			if(timer) {
				window.clearTimeout(timer)
			}
			timer = window.setTimeout(() => {
				getArticleList()
			}, 200)
		}
		const showMore = () => {
			const scrollY = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
			const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight // 页面的可视高度（能看见的）
			const allHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) // 页面的总高度（所有的）
			if (scrollY + vh + 1 >= allHeight) { // 当滚动条滑到页面底部（因为有小数点所以再加1）
				if(articleList.length < total) {	//当现存列表数小于数据库中列表总数时
					singleAction()
				}
			}
		}
    window.addEventListener('scroll', showMore)
    return () => {	//组件销毁时清除window上绑定的事件
      window.removeEventListener('scroll', showMore)
			window.clearTimeout(timer)
    }
	},[articleList, total, getArticleList])

	return (articleList.length !== 0 ? (
			<ListWrapper>
				{console.log('articleList渲染了')}
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
		) : (<></>)
	)
}

export default ArticleList