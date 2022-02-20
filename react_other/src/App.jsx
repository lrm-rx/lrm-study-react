import React, { Component } from 'react'
import {Provider} from './context/peiqi'
import A from './A'

export default class App extends Component {
	state = {
		car:'红旗'
	}
	render() {
		return (
			<div style={{backgroundColor:'gray',padding:'10px'}}>
				<h2>我是App组件，我的车：{this.state.car}</h2>
				<Provider value={this.state.car}>
					<A/>
				</Provider>
			</div>
		)
	}
}

