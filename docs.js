import fs from 'fs'
import { execSync } from 'child_process'

const coverpagePath = './docs/_coverpage.md'
const packagePath = './package.json'

const packageContent = fs.readFileSync(packagePath, 'utf8',)

const packageJson = JSON.parse(packageContent)

const coverpageContent = `
![logo](./icon.svg) 

# ${packageJson.name} <small style="font-weight: bold; margin-left: 10px;">${packageJson.version}</small>

> 代码格式化

[NPM](https://www.npmjs.com/package/@cotan/eslint-config)
`

fs.writeFileSync(coverpagePath, coverpageContent)

fs.copyFileSync('./README.md', './docs/README.md')

execSync('git add .', { cwd: './' })
execSync('git commit -m "update"', { cwd: './' })
execSync('git push -f', { cwd: './' })

console.log(' 发布成功 ')