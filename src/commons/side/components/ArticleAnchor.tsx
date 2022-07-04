import { FC, useContext } from 'react'
import { Anchor, Divider } from 'antd'
import { LinksWrapper } from '../style'
import { StContext } from '../../../store'

const ArticleAnchor: FC = () => {
	const { Link } = Anchor
  const store = useContext(StContext)
  const { detailArticle } = store.state
	// let arr: RegExpMatchArray | null = []
	const fn = () => {
		if(detailArticle.content){
			const arr = detailArticle.content.match(/(#+)(.*)/g)
			let key = '#'
			const arrFilter = arr?.filter((i) => {
				return i.match(/#/g)?.length === key.length
			})
			const arr2 = arrFilter?.map((i) => i.split(key).pop()?.trim())
			return (
				arr2?.map((i) => {
					return <Link key={i} href={`#${i}`} title={i}></Link>
				})
			)
		}
	}
	return (
		<LinksWrapper>
			{console.log('Link渲染了')}
			<Divider>文章目录</Divider>
			<Anchor>
					{fn()}
				{/* <Link href="#pnpm的依赖管理" title="pnpm的依赖管理"></Link>
				<Link href="#第一章" title="第一章">
					<Link href="#vue" title="vue" />
					<Link href="#react" title="react" />
				</Link>
				<Link href="#2.数据" title="2.数据">
					<Link href="#生命周期" title="生命周期" />
					<Link href="#价值观" title="价值观" />
				</Link>
				<Link href="#3. 函数" title="3. 函数">
					<Link href="#第一课" title="第一课" />
					<Link href="#Link-Props" title="Link Props" />
				</Link> */}
			</Anchor>
		</LinksWrapper>
	)
}

export default ArticleAnchor