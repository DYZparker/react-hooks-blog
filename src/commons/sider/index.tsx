import { FC, useEffect, useMemo, useContext } from 'react'
import { SiderWrapper } from './style'
// import { Affix } from 'antd'
import Author from './components/Author'
import LinkBox from './components/LinkBox'
import Tags from './components/Tags'
import { StContext } from '../../store'
import { getSideInfoApi } from '../../api'

const Sider: FC = () => {

  //获取仓库数据并生成props传给子组件
	const store = useContext(StContext)
	const tagListData = store.state.sideData.tagList
	const linkListData = store.state.sideData.linkList

	//第一次加载时请求side数据
  useEffect(() => {
		getSideInfoApi().then((res) => {
			const result = res.data.data
			store.dispatch!({
				type: 'addSideData',
				state: {
					sideData: {
						tagList: result.tagList,
						linkList: result.linkList
					}
				}
			})
		})
	},[store.dispatch])

	return useMemo(() => {
		if(tagListData.length !== 0) {
			return (
				<SiderWrapper>
				{console.log('side渲染了')}
					<Author />
					{/* <Affix offsetTop={50}>
						<> */}
							<Tags tagListData={tagListData} />
							<LinkBox linkListData={linkListData} />
						{/* </>
					</Affix> */}
				</SiderWrapper>
			)
		}else {
			return <></>
		}
	},[tagListData, linkListData])
}

export default Sider
