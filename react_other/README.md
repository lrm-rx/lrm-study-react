## 1.setState的两种写法

<strong>第一种：对象式的setState </strong>

1. 语法：```setState(stateChange, [callback])```。
2. stateChange为状态改变对象（该对象可以体现出状态的更改）。
3. callback是可选的回调函数, 它在状态更新后、render调用后，才被调用。

<strong>第二种：函数式的setState </strong>

1. 语法：```setState(updater, [callback])```
2. updater可以接收到state和props。
3. callback是可选的回调函数, 它在状态更新后、render调用后，才被调用。

<strong>总结：</strong>

1. 对象式的setState是函数式的setState的简写方式（语法糖）
2. 使用原则：
   - 如果新状态不依赖于原状态 ===> 使用对象方式
   - 如果新状态依赖于原状态 ===> 使用函数方式
   - 如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取

## 2.setState的同步与异步

1. setState()更新状态的动作是同步还是异步的？—— 看它的执行位置

2. 具体规则：

   1. 在由<strong style="color:#DC4E41">react所控制的回调函数</strong>中更新的动作是【异步】的。

      ​	例如：生命周期钩子 / react所监听的事件。

   2. 在<strong style="color:#DC4E41">非react控制的异步回调函数</strong>中更新的动作是【同步】的。

      ​	例如：定时器的回调 / 原生事件监听回调 /Promise所指定的成功、失败回调

## 3. 路由懒加载

```react
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('../pages/Login'))
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```

## 4. Hooks

<strong>一、React Hook是什么?</strong>

1. Hook是React 16.8.0版本增加的新特性。
2. 可以让你在函数组件中使用 state 以及其他类式组件具备的特性。

<strong>二、3个常用的Hook</strong>

1. State Hook:``` React.useState()```
2. Effect Hook: ```React.useEffect()```
3. Ref Hook: ```React.useRef()```

<strong>1. State Hook</strong>

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

<strong>2. Effect Hook</strong>

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

<strong>3. Ref Hook</strong>

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```

## 5. Fragment

作用：让组件结构可以没有真实的DOM根标签了

	<Fragment> <Fragment>
	<> </>

## 6. Context

一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

```js
1.创建Context容器对象，并得到Provider与Consumer：
	const XxxContext = React.createContext()  
    const {Provider,Consumer} = XxxContext
	
2.渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<Provider value={数据}>
		子组件
    </Provider>
    
3.后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </Consumer>
备注：context一般用于封装react插件
```

## 7. 组件通信方式总结

通信方式：

	props：
		(1).children props
		(2).render props
	消息订阅-发布：
		pubs-sub、event等等
	集中式管理：
		redux、dva等等
	conText:
		生产者-消费者模式

组件间关系：

		父子组件：props
		兄弟组件(非嵌套组件)：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(用的少)

