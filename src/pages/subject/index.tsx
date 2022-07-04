import { FC, useContext, useEffect, useMemo } from 'react'
import { useHistory } from "react-router-dom"
import { StContext } from '../../store'
import ArticleList from '../../commons/articleList'
import { SubjectWrapper } from './style'

const Subject: FC = () =>{

  //获取路由信息
	let history = useHistory()
  const pathTag = history.location.pathname.split('/').pop() || ''

  //获取仓库数据并生成props传给子组件
	const store = useContext(StContext)
	const subjectData = store.state.subjectData
	const subjectProps = useMemo(() => {
		return (
			{
				...subjectData,
				tag: pathTag,
				actionType: 'addSubjectArticleList',
				stataType: 'subjectData'
			}
		)
	},[pathTag, subjectData])
	// console.log('============',subjectData)

  //监听路由跳转并清空分类列表
	useEffect(() => {
		window.scrollTo(0,0)
		const unlisten = history.listen(() => {
			console.log('路由改变了')
			store.dispatch!({
				type: 'clearSubjectArticleList',
				state: {
					subjectData: {
						articleList: [],
						total: -1,
						page: 1
					}
				}
			})
		})
		return () => {
			unlisten()
		}
	},[history, store.dispatch])

	//分类文章列表
	return useMemo(() => {
			return (
				<SubjectWrapper>
					{console.log('subject渲染了')}
					<div className="list-header">包含<span>{pathTag}</span>的文章 ：</div>
					<ArticleList {...subjectProps}/>
				</SubjectWrapper>
			)
	},[pathTag, subjectProps])
}

export default Subject