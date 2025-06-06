// const path = require('path')
// const fs = require('fs')
// const rules = require('../index').rules

// const TOP = `---
// sidebar: false
// --- \r`
// const TYPES = {
//     '@typescript-eslint': 'typescript',
//     vue: 'vue',
//     'javascript': 'javascript'
// }
// const LINKS = {
//     typescript: 'https://typescript-eslint.io/rules/*placeholder*',
//     vue: 'https://eslint.vuejs.org/rules/*placeholder*.html',
//     javascript: 'https://eslint.bootcss.com/docs/rules/*placeholder*'
// }

// const getRulesMap = () => {
//     const keys = Object.keys(rules)
//     const obj = {
//         vue: {},
//         typescript: {},
//         javascript: {}
//     }
//     keys.forEach(rule => {
//         const arr = rule.split('/')
//         const type = arr.length > 1 ? TYPES[arr[0]] : 'javascript'
//         const placeholder = arr.length > 1 ? arr[1] : arr[0]
//         obj[type][rule] = LINKS[type].replace(/\*placeholder\*/g, placeholder)
//     })
//     return obj
// }

// const getRulesContent = () => {
//     const map = getRulesMap()
//     const keys = Object.keys(map)
//     let str = ''
//     keys.forEach(key => {
//         str += `#### ${key} \n\n`
//         const rulesKeys = Object.keys(map[key])
//         rulesKeys.forEach(rule => {
//             str += `[${rule}](${map[key][rule]}) \n\n`
//         })
//         str +='*** \n'
//     })
//     return str
// }

// const indexPath = path.join(__dirname, 'index.md')
// const readmePath = path.join(__dirname, '../README.md')

// const readmeData = fs.readFileSync(readmePath)
// fs.writeFileSync(indexPath,TOP + readmeData.toString())

// const rulesPath = path.join(__dirname, 'rules.md')
// const title = '## 规则 \n\n'
// fs.writeFileSync(rulesPath,TOP + title + getRulesContent())