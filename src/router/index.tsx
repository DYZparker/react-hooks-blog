import { lazy, FC, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const ArticleList = lazy(() => import('../pages/articleList'))
// const Detail = React.lazy(() => import('../pages/detail'))
// const TagArticleList = React.lazy(() => import('../pages/tagArticleList'))
// const Management = React.lazy(() => import('../pages/management'))
// const AboutMe = React.lazy(() => import('../pages/aboutMe'))

const RouterList: FC = () => {
	return (
		<Suspense fallback={<></>}>
			<Switch>
				<Route path='/:tag' component={ArticleList}></Route>
				{/* <Route path='/taglist/:tag' exact component={TagArticleList}></Route>
				<Route path='/detail/:id' exact component={Detail}></Route>
				<Route path='/management' exact component={Management}></Route>
				<Route path='/aboutme' exact component={AboutMe}></Route> */}
				{/* <Redirect to="/"/> */}
			</Switch>
		</Suspense>
        // <div>RouterList</div>
	)
}

export default RouterList