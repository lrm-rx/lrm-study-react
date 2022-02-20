import React,{useState} from 'react'

//用函数定义一个Count组件
export default function Count() {
	const [sum,setSum] = useState(0) //初始化状态
	const [person,setPerson] = useState({name:'张三',age:18,sex:'男'}) //初始化状态
	
	return (
		<div>
			<h2>当前求和为：{sum}</h2>
			<h2>人的信息是：{person.name}-{person.age}-{person.sex}</h2>
			<button onClick={add}>+1</button>
			<button onClick={changName}>改人的信息</button>
		</div>
	)
	//加的回调
	function add(){
		// setSum(sum+1) //更新的第一种写法：对象式
		setSum((value)=> value+1) //更新的第一种写法：函数式
	}
	function changName(){
		setPerson({...person,age:19})
	}
}


