## 安装

```shell
# with pnpm 
pnpm add @cotan/eslint-config -D
# with npm 
npm i @cotan/eslint-config -D
# with yarn
yarn add @cotan/eslint-config -D
```

## 使用
项目根目录创建`eslint.config.js`文件

```js
import standard from '@cotan/eslint-config'

export default [
    ...standard
]
```

## 命令行操作

```shell
# 指定后缀名
npx eslint . --ext .ts
# 指定多个后缀名
npx eslint . --ext .ts --ext .js --ext .vue
或
npx eslint . --ext .ts,.js,.vue
# 指定文件夹
npx eslint --ext .ts,.js,.vue  /src

# 指定eslint配置文件
npx eslint -c eslint.config.js --ext .ts,.js,.vue  /src
# fix
npx eslint -c eslint.config.js --ext .ts,.js,.vue  /src --fix
```

## vscode 相关配置
* 安装eslint插件
* 使用eslint格式化文件
* 添加vscode相关配置

```json
{
    "editor.formatOnSave": true,
    "eslint.format.enable": true,
    "eslint.enable": true,
    "eslint.validate": [
        "javascript",
        "typescript",
        "javascriptreact",
        "vue",
        "html"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true
}
```