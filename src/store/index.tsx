import { FC, createContext, Reducer, useReducer } from 'react';
import { IState, IAction, IStore } from '../types'

// useReducer的初始值
const initialState: IState = {
  homeData: {
    articleList: [],
    page: 1,
    total: -1
  },
  subjectData: {
    articleList: [],
    page: 1,
    total: -1
  },
  sideData: {
    tagList: [],
    linkList: []
  },
  detailArticle: {
    _id: "",
    title: "",
    tags: [],
    img: "",
		summary: "",
		content: ""
	}
}

// useReducer的reducer
const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    // 添加侧边栏信息
    case 'addSideData':
      let newSideData = {...state.sideData}
      if(action.state.sideData) {
        newSideData = action.state.sideData
      }
      return {
        ...state,
        sideData: newSideData
      }
    // 主页添加列表
    case 'addHomeArticleList':
      const newHomeData = {...state.homeData}
      if(action.state.homeData) {
        newHomeData.articleList = [...newHomeData.articleList, ...action.state.homeData.articleList]
        newHomeData.page = action.state.homeData.page
        newHomeData.total = action.state.homeData.total
      }
      return {
        ...state,
        homeData: newHomeData
      }
    // 分类页添加列表
    case 'addSubjectArticleList':
      const newSubjectData = {...state.subjectData}
      if(action.state.subjectData) {
        newSubjectData.articleList = [...newSubjectData.articleList, ...action.state.subjectData.articleList]
        newSubjectData.page = action.state.subjectData.page
        newSubjectData.total = action.state.subjectData.total
      }
      return {
        ...state,
        subjectData: newSubjectData
      }
    // 清空分类页列表
    case 'clearSubjectArticleList':
      const emptySubjectData = {...state.subjectData}
      if(action.state.subjectData) {
        emptySubjectData.articleList = [...action.state.subjectData.articleList]
        emptySubjectData.page = action.state.subjectData.page
        emptySubjectData.total = action.state.subjectData.total
      }
      return {
        ...state,
        subjectData: emptySubjectData
      }
    // 清空分类页列表
    case 'addDetailArticle':
      let ArticleData = {...state.detailArticle}
      if(action.state.detailArticle) {
        ArticleData = action.state.detailArticle
      }
      return {
        ...state,
        detailArticle: ArticleData
      }
    default:
      return state
  }
}

// 创建并导出context对象
export const StContext = createContext<IStore>({
  state: {
    homeData: {
      articleList: [],
      page: 0,
      total: -1
    },
    subjectData: {
      articleList: [],
      page: 0,
      total: -1
    },
    sideData: {
      tagList: [],
      linkList: []
    },
    detailArticle: {
      _id: "",
      title: "",
      tags: [],
      img: "",
      summary: "",
      content: ""
    }
  }
})

// 导出封装的Store组件
// 把useReducer的state, dispatch传给context
export const Store: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StContext.Provider value={{state, dispatch}}>
      {children}
    </StContext.Provider>
  )
}
