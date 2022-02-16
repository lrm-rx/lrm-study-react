import React, { Component } from 'react'
import peiqiContext from './context/peiqi'

export default class B extends Component {
	static contextType = peiqiContext //找上层要context数据
	render(){
		console.log(this)
		return (
			<div style={{backgroundColor:'orange',padding:'10px'}}>
				<h2>
					我是B组件，我收到的车：{this.context}
				</h2>
			</div>
		)
	}
}
