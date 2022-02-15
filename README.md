# Mobx --- 购物车案例

1. `create-react-app`脚手架创建的项目，该项目是Mobx的入门案例----购物车实战
2. 安装依赖 `yarn add -D mobx mobx-react`
3. 需要使用装饰器，安装依赖`yarn add -D react-app-rewired customize-cra @babel/plugin-proposal-decorators`
   该项目没有切换弹出模式，所以在项⽬根⽬录下创建 `config-overrides.js` 并写⼊以下内容
    
    ```js
        const { override, addDecoratorsLegacy } = require("customize-cra")
        module.exports = override(
             addDecoratorsLegacy()
        )

    ```

   修改 `package.json` ⽂件中 `scripts` 脚本

    ```json
        /* package.json */
        // 符号声明：- 删除   + 新增

         "scripts": {
        - "start": "react-scripts start",
        + "start": "react-app-rewired start",
        - "build": "react-scripts build",
        + "build": "react-app-rewired build",
        - "test": "react-scripts test --env=jsdom",
        + "test": "react-app-rewired test --env=jsdom"
        }
    ```

5. 如果在 `cra` 中使⽤ `eject` ⽅式启⽤ `decorator`

    切换弹出模式 `npm run eject`
    安装 babel 语法（类属性，装饰器）解析插件`yarn add -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators`
    修改 `package.json` 中的 `babel` 配置项
    
    ```json
    ...
    "babel": {
         "presets": [
             "react-app"
         ],
         "plugins": [
             ["@babel/plugin-proposal-decorators", {
                 "legacy": true
             }],
             ["@babel/plugin-proposal-class-properties", {
                 "loose": true
             }]
         ]
    }
    ...
    ```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
