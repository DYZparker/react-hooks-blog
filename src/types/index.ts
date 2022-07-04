export interface IMenu {
	title: string,
	path: string,
	children?: Array<IMenu>
}
interface ITopicList {
	id: string
	alt: string
	href: string
	src: string
}

export interface IArticle {
	_id: string
	title: string
	img: string
	summary: string
	tags: Array<string>
  content?: string
}

export interface IArticleListData {
	articleList: Array<IArticle>
	total: number
	page: number
}

export interface ITopic {
	topicList: Array<ITopicList>
}

export interface IProps extends IArticleListData{
	tag: string
	actionType: string
  stataType: string
}

export interface ILink {
  _id: string
  linkName: string
  describe: string
  href: string
  img: string
}

export interface ITag {
  _id: string
  tagName: string
  color: string
}

export interface ITags {
  tagListData: Array<ITag>
}

interface ISideData {
  tagList: Array<ITag>
  linkList: Array<ILink>
}

export interface ILinks {
  linkListData: Array<ILink>
}

export interface ArticleListPayload {
  page: Number
  size: Number
  search: Object
}

export interface IState {
  homeData: IArticleListData
  subjectData: IArticleListData
  sideData: ISideData
  detailArticle: IArticle
}

export interface IStore {
  state: IState
  dispatch?: React.Dispatch<IAction>
}

export interface IAction {
  state: {
    homeData?: IArticleListData
    subjectData?: IArticleListData
    sideData?: ISideData
    detailArticle?: IArticle
  }
  type: string
}
// export class InitState {
//   homeData: IArticleListData = {
//     articleList: [],
//     page: 1,
//     total: -1
//   }
//   subjectData: IArticleListData = {
//     articleList: [],
//     page: 1,
//     total: -1
//   }
//   sideData: ISideData = {
//     tagList: [],
//     linkList: []
//   }
// }