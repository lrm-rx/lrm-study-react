import React from 'react'
import {Consumer} from './context/peiqi'

export default function C() {
	return (
		<div style={{backgroundColor:'green',padding:'10px'}}>
			<h2>
				我是C组件，我收到的车：
				<Consumer>
					{
						(value)=>{return value}
					}
				</Consumer>
			</h2>
		</div>
	)
}
