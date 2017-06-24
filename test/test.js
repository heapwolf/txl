const template = require('../index')
const assert = require('assert')
const fs = require('fs')

const t = template(fs.readFileSync(`${__dirname}/index.template`))
const myMixin = template(fs.readFileSync(`${__dirname}/mixin.template`))

const x = [1, 2, 3]

const actual = [
  t({ foo: 10, bar: 20, bazz: 30, x, myMixin }),
  t({ foo: 20, bar: 60, bazz: 130, x, myMixin })
].join('\n')

const expected = `<h1>hello 10, 50</h1>

<section>
  <div class="number">10</div>
  <div class="number">20</div>
  <div class="number">30</div>

</section>

<h1>hello 20, 190</h1>

<section>
  <div class="number">10</div>
  <div class="number">20</div>
  <div class="number">30</div>

</section>
`

assert.equal(actual, expected)
