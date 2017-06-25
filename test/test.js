const txl = require('../index')
const assert = require('assert')
const fs = require('fs')

{
  const template = txl(fs.readFileSync(`${__dirname}/index.template`))
  const myMixin = txl(fs.readFileSync(`${__dirname}/mixin.template`))

  const x = [1, 2, 3]

  const actual = [
    template({ foo: 10, bar: 20, bazz: 30, x, myMixin }),
    template({ foo: 20, bar: 60, bazz: 130, x, myMixin })
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
}

{
  const IF = (b, s) => b ? s : ''
  const template = txl('<div> ${ IF(foo < 10, `foo`) } </div>')
  const actual = template({ foo: 100, IF })
  const expected = '<div>  </div>'

  assert.equal(actual, expected)
}
