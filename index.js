module.exports = s => {
  const body = `return \`${s}\``
  return o => {
    const keys = Object.keys(o)
    const values = Object.values(o)
    return new Function(...keys, body)(...values)
  }
}
