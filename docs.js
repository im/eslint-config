import fs from 'fs'

const coverpagePath = './docs/_coverpage.md'
const packagePath = './package.json'

const packageContent = fs.readFileSync(packagePath, 'utf8',)

const packageJson = JSON.parse(packageContent)

const coverpageContent = `
![logo](./icon.svg) 

# ${packageJson.name} <small style="font-weight: bold; margin-left: 10px;">${packageJson.version}</small>

> 代码格式化
`

fs.writeFileSync(coverpagePath, coverpageContent)

fs.copyFileSync('./README.md', './docs/README.md')