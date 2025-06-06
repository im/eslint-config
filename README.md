## 安装

```shell
# with npm 
npm i @cotan/eslint-config -D
# with yarn
yarn add @cotan/eslint-config -D
```

## 使用
项目根目录创建`.eslintrc`文件

```json
{
    "root": true,
    "extends": ['@cotan']
}
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
npx eslint -c .eslintrc --ext .ts,.js,.vue  /src
# fix
npx eslint -c .eslintrc --ext .ts,.js,.vue  /src --fix
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
    "eslint.options": {
        "overrideConfigFile": "./.eslintrc"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true
}
```