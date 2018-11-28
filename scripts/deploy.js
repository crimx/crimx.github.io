const shell = require('shelljs')
const path = require('path')
const fs = require('fs')

fs.copyFileSync(path.join(__dirname, '../CNAME'), path.join(__dirname, '../dist/CNAME'))

shell.cd(path.join(__dirname, '../dist'))
shell.exec('git init')
shell.exec('git add -A')
shell.exec('git commit -m "deploy"')
shell.exec('git push -f git@github.com:crimx/crimx.github.io.git master')
