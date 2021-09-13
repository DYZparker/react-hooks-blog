export interface IMenu {
	title: string,
	path: string,
	children?: Array<IMenu>
}
interface ITopicList {
	_id: string
	alt: string
	href: string
	src: string
}

interface IArticleList {
	_id: string
	date: string
	title: string
	img: string
	summary: string
	tags: Array<string>
}

export interface IInfo {
	topicList: Array<ITopicList>
	articleList: Array<IArticleList>
	total: number
}

export interface ITopic {
	topicList: Array<ITopicList>
}

export interface IArticle {
	articleList: Array<IArticleList>
	total: number
	page?: 1
}