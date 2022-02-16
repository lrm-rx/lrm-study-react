import React, { Component } from 'react'
import B from './B'
import C from './C'

export default class A extends Component {
	render() {
		return (
			<div style={{backgroundColor:'skyblue',padding:'10px'}}>
				<h2>我是A组件</h2>
				<B/>
				<br />
				<C/>
			</div>
		)
	}
}
