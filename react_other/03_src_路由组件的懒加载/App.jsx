import React, { Component,lazy,Suspense} from 'react'
import {Link,Route,Switch} from 'react-router-dom'
// import About from './components/About'
// import Home from './components/Home'
import Loading from './components/Loading'

const About = lazy(()=> import('./components/About') )
const Home = lazy(()=> import('./components/Home') )

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中我们通过a标签实现：多个页面的跳转 */}
							{/* <a className="list-group-item" href="./about.html">About</a> */}
							{/* <a className="list-group-item" href="./home.html">Home</a> */}

							{/* react中我们通过Link标签实现：路径的改变，进而引起不同组件的切换 */}
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
							
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 制定路由具体规则 */}
								<Suspense fallback={<Loading/>}>
									<Switch>
										<Route path="/about" component={About}/>
										<Route path="/home" component={Home}/>
									</Switch>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
