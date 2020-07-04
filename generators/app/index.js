const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing () {
        // this.fs.write(
        //     this.destinationPath('temp.text'),
        //     Math.random().toString()
        // )
        // const tmpl = this.templatePath('foo.txt')
        // const output = this.destinationPath('foo.txt')
        // const context = {
        //     title: 'Leo',
        //     success: true
        // }
        const tmpl = this.templatePath('bar.htm')
        const output = this.destinationPath('bar.html')
        const context = this.answers
        this.fs.copyTpl(tmpl, output, context)
    }
}