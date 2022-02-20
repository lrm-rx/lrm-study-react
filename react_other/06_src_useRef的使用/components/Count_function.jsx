import React,{useState,createRef,useRef} from 'react'

//用函数定义一个Count组件
export default function Count() {
	const [sum,setSum] = useState(0) //初始化状态
	// let inpt = createRef()
	let inpt = useRef()
	return (
		<div>
			<h2>当前求和为：{sum}</h2>
			<input type="text" ref={inpt}/>
			<button onClick={add}>+1</button>
			<button onClick={showData}>提示输入的内容</button>
		</div>
	)
	//加的回调
	function add(){
		setSum( value => value+1)
	}
	function showData(){
		console.log(inpt.current.value)
	}

}


