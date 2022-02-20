import React, { Component } from 'react'

export default class App extends Component {
	state = {sum:0,a:1,b:200}
	render() {
		console.log('render')
		return (
			<div>
				<h2>我是App组件</h2>
				<h3>当前求和为：{this.state.sum}</h3>
				<button onClick={this.add}>+1</button>
				<button onClick={this.change}>变为99</button>
			</div>
		)
	}
	change = ()=>{
		//对象式，适用于：新状态不依赖于原状态
		this.setState({sum:99})
	}

	add = ()=>{
		//对象式，适用于：新状态不依赖于原状态
		//1.获取原来的状态
		const {sum} = this.state
		//2.计算后更新
		this.setState({sum:sum+1}) //对象式的setState
		console.log(this.state.sum)

		//函数式，适用于：新状态依赖于原状态
		// this.setState(state => ({sum:state.sum+1}) )
	}
}
