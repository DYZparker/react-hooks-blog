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

export interface IArticle {
	_id: string
	date: string
	title: string
	img: string
	summary: string
	tags: Array<string>
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

export interface ILinkContent {
  id: number
  title: string
  src: string
  href: string
}

export interface ITag {
  _id: string
  title: string
  color: string
}

export interface ITags {
  tagListData: Array<ITag>
}

interface ISideData {
  tagList: Array<ITag>
  linkList: Array<ILink>
}

export interface ILink {
  _id: string
  name: string
  content: Array<ILinkContent>
}

export interface ILinkBox {
  linkListData: Array<ILink>
}

export interface ArticleListPayload {
  page: Number
  size: Number
  search: {tags: String | undefined}
}

export interface IState {
  homeData: IArticleListData
  subjectData: IArticleListData
  sideData: ISideData
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
  }
  type: string
}