import { lazy, FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('../pages/home'));
const Subject = lazy(() => import('../pages/subject'));
const About = lazy(() => import('../pages/about'));
const Detail = lazy(() => import('../pages/detail'));

const RouterList: FC = () => {
	return (
		<Suspense fallback={<></>}>
			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/subject/:tag' exact component={Subject}></Route>
				<Route path='/detail/:id' exact component={Detail}></Route>
				<Route path='/about' exact component={About}></Route>
			</Switch>
		</Suspense>
        // <div>RouterList</div>
	)
}

export default RouterList