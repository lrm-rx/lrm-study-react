import React, { Component } from 'react'

export default class App extends Component {
	state = {sum:0,a:1,b:200}
	render() {
		// console.log('render')
		return (
			<div>
				<h2>我是App组件</h2>
				<h3>当前求和为：{this.state.sum}</h3>
				<button onClick={this.add}>+1</button>
				<button id="btn">+1（用原生事件写的）</button>
			</div>
		)
	}

	//add是react所监听的事件回调，所以setState更新状态的动作是【异步】的
	/* add = ()=>{
		//1.获取原来的状态
		const {sum} = this.state
		//2.计算后更新
		this.setState({sum:sum+1})
		console.log(this.state.sum)
	} */

	//componentDidMount是react的生命周期钩子，所以setState更新状态的动作是【异步】的
	/* componentDidMount(){
		//1.获取原来的状态
		const {sum} = this.state
		//2.计算后更新
		this.setState({sum:sum+1})
		console.log(this.state.sum)
	} */

	componentDidMount(){
		/* const btn = document.getElementById('btn')
		btn.addEventListener('click',()=>{
			//1.获取原来的状态
			const {sum} = this.state
			//2.计算后更新
			this.setState({sum:sum+1})
			console.log(this.state.sum)
		}) */

		/* setTimeout(()=>{
			//1.获取原来的状态
			const {sum} = this.state
			//2.计算后更新
			this.setState({sum:sum+1})
			console.log(this.state.sum)
		},0) */

		/* Promise.resolve(100).then(
			()=>{
				//1.获取原来的状态
				const {sum} = this.state
				//2.计算后更新
				this.setState({sum:sum+1})
				console.log(this.state.sum)
			}
		) */
	}
}
