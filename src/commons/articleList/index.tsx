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
	// console.log(props)

	//按页请求列表数据并保存
	const getArticleList = useCallback(() => {
		getArticleListApi({page, size: 5, search:{tagName: tag}}).then((res) => {
			const { list, total } = res.data.result
			store.dispatch!({
				type: actionType,
				state: {
					[stataType]: {
						articleList: list,
						total,
						page: page + 1
					}
				}
			})
		})
	},[tag, page, actionType, stataType, store.dispatch])

	//初始化文章列表数据
	useEffect(() => {
		//total为-1表示从初始化得来
		//total为0表示从服务器查询为0
		//若total初始为0会导致查询为0的文章无限循环请求
		if((articleList.length === 0) && (total === -1)) {
			console.log('===调用了初始请求===')
			getArticleList()
		}
	},[articleList.length, total, getArticleList])

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

	if(total === 0) {
		return (
			<ListWrapper>
				<div className="list-over"><SmileOutlined /> 暂无相关文章 <SmileOutlined /></div>
			</ListWrapper>
		)
	}else if(articleList.length !== 0) {
		return (
			<ListWrapper>
				{console.log('articleList渲染了')}
				{window.scrollTo(0,0)}
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
	}else {
		return <></>
	}
}

export default ArticleList