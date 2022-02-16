import{createContext } from 'react'
//创建一个上下文
const peiqiContext = createContext()

const {Provider,Consumer} = peiqiContext
//暴露peiqiContext
export default peiqiContext
export {Provider,Consumer}