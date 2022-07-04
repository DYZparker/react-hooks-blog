import { FC, useEffect, useMemo, useContext } from 'react'
import { SideWrapper } from './style'
import { Affix } from 'antd'
import Author from './components/Author'
import Links from './components/Links'
import Tags from './components/Tags'
import ArticleAnchor from './components/ArticleAnchor'
import { StContext } from '../../store'
import { getSideInfoApi } from '../../api'

const Side: FC = () => {

  //获取仓库数据并生成props传给子组件
	const store = useContext(StContext)
	const { tagList, linkList } = store.state.sideData

	//第一次加载时请求side数据
  useEffect(() => {
		getSideInfoApi().then((res) => {
			const result = res.data.result
			store.dispatch!({
				type: 'addSideData',
				state: {
					sideData: {
						tagList: result.tagList.res,
						linkList: result.linkList.res
					}
				}
			})
		})
	},[store.dispatch])

	return useMemo(() => {
		if(tagList.length !== 0) {
			return (
				<SideWrapper>
					{console.log('side渲染了')}
					<Author />
					<Affix offsetTop={50}>
						<div>
							<Tags tagListData={tagList} />
							<Links linkListData={linkList} />
							<ArticleAnchor/>
						</div>
					</Affix>
				</SideWrapper>
			)
		}else {
			return <></>
		}
	},[tagList, linkList])
}

export default Side
