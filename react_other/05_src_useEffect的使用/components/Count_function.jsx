import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'

//用函数定义一个Count组件
export default function Count() {
	const [sum,setSum] = useState(0) //初始化状态
	const [name,setName] = useState('张三') //初始化状态

	//useEffect所传入的那个函数，目前来看，相当与：componentDidMount、componentDidUpdate
	useEffect(()=>{
		let timer = setInterval(()=>{
			setSum( value => value+1)
		},1000)
		return ()=>{
			console.log('我即将乘风归去！')
			clearInterval(timer)
		}
	},[])

	return (
		<div>
			<h2>当前求和为：{sum}</h2>
			<h2>我是：{name}</h2>
			<button onClick={add}>+1</button>
			<button onClick={changeName}>换名</button>
			<button onClick={death}>卸载</button>
		</div>
	)
	//加的回调
	function add(){
		// setSum(sum+1) //更新的第一种写法：对象式
		setSum( value => value+1) //更新的第一种写法：函数式
	}
	function changeName(){
		setName( value => value+='!')
	}
	function death(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}
}


