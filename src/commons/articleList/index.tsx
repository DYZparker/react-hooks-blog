import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CalendarOutlined, TagsOutlined } from '@ant-design/icons';
import { ListWrapper, CardWrapper } from './style';
import { IArticle }	from '../../types';

const ArticleList: FC<IArticle> = (props) => {
	//从home父组件传入props.articleList并渲染
	const { articleList, total, page } = props
	console.log(page)

	// const scrollMore = () => {
	// 	if(pageStore) {
	// 		getArticleListApi({page: pageStore + 1, size: 5, search:{tags: ''}}).then((res) => {
	// 			const result = res.data.data
	// 			store.dispatch!({
	// 				type: 'addHomeArticleList',
	// 				page: pageStore,
	// 				articleList: result.articleList
	// 			})
	// 		})
	// 	}
	// }

	// const showMore = () => {
	// 	const scrollY = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
	// 	const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight // 页面的可视高度（能看见的）
	// 	const allHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) // 页面的总高度（所有的）
	// 	if (scrollY + vh >= allHeight) { // 当滚动条滑到页面底部
	// 		if(articleList && total !== articleList.length) {
	// 			scrollMore()
	// 		}
	// 	}
	// }

	// useEffect(() => {
  //   window.addEventListener('scroll', showMore)
  //   return () => {
  //     window.removeEventListener('scroll', showMore)
  //   }
	// },[])

	return (
		<ListWrapper>
			{console.log('Article渲染了')}
			<div className="list-header">最新文章</div>
			{
				articleList.map((item) => {
					return (
						<CardWrapper key={item._id}>
							<div className="card-title"><Link to={'/detail/' + item._id}>{item.title}</Link></div>
							<div className="card-icon">
								<i><CalendarOutlined />{moment(item.date).format('YYYY-MM-DD')}</i>
								<i><TagsOutlined />{item.tags.join('、')}</i>
							</div>
							<div className="card-context">
								{item.img ? <img src={item.img} alt={item.title}></img> : <></>}
								<p>{item.summary}</p>
							</div>
							<div className="card-go"><Link to={'/detail/' + item._id}>查看全文 &gt; </Link></div>
						</CardWrapper>)
				})
			}
			{/* {
				totalStore === articleList.length ? 
				<div className="list-over"><SmileOutlined /> 已经是最后一篇了 <SmileOutlined /></div> : 
				<div className="list-more"><ArrowDownOutlined /> 下拉加载更多 <ArrowDownOutlined /></div>
			} */}
		</ListWrapper>
	)
}

export default ArticleList