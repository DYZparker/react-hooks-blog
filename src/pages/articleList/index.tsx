import { FC, useEffect } from 'react';
import { SmileOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { ListWrapper } from './style';
import { IArticle }	from '../../types';
import ArticleCard from './components/articleCard';

const ArticleList: FC<IArticle> = (props) => {
	const { articleList, total, scrollMore } = props

	//绑定下拉事件，事件函数showMore判断滚动条到页底则调用父组件scrollMore事件加载下一页
	useEffect(() => {
		const showMore = () => {
			// console.log('======',articleList.length , total,'======')
			const scrollY = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
			const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight // 页面的可视高度（能看见的）
			const allHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) // 页面的总高度（所有的）
			// console.log('======',scrollY + vh , allHeight,'======')
			if (scrollY + vh + 1 >= allHeight) { // 当滚动条滑到页面底部（因为小数点的缘故所以再加1）
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