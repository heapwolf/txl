# SYNOPSIS
All your html templating needs in under 10 lines of JS.

# USAGE

## BASICS
The `Template` function takes a string and returns a function that takes your
template "locals".

```js
const Template = require('templates')
const t = Template('<h1>${name}</h1>')

t({ nane: 'Danzig' }) // t() can be reused
```

## ITERATION

#### index.js
```js
const Template = require('templates')
const fs = require('fs')

const t = Template(fs.readFileSync('./template'))

t({ list: [1,2,3] })
```

```html
<ul>
  ${ list.map(n => `<li>${n}</li>`).join('') }
</ul>
```

## MIXINS

#### index.js

```js
const Template = require('templates')
const fs = require('fs')

const t = Template(fs.readFileSync('./index.template'))
const m = Template(fs.readFileSync('./mixin.template'))

t({ names: ['Glen', 'Henry'] li: m })
```

#### index.template

```html
<ul>
  ${ list.map(name => li({ name })).join('') }
</ul>
```

#### mixin.template

```html
<li class="name">${name}</li>
```
