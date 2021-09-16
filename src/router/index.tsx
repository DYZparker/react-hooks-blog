import { lazy, FC, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const Home = lazy(() => import('../pages/home'))
const Subject = lazy(() => import('../pages/subject'))
const About = lazy(() => import('../pages/about'))
// const Detail = React.lazy(() => import('../pages/detail'))
// const TagArticleList = React.lazy(() => import('../pages/tagArticleList'))
// const Management = React.lazy(() => import('../pages/management'))
// const AboutMe = React.lazy(() => import('../pages/aboutMe'))

const RouterList: FC = () => {
	return (
		<Suspense fallback={<></>}>
			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/subject/:tag' exact component={Subject}></Route>
				<Route path='/about' exact component={About}></Route>
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