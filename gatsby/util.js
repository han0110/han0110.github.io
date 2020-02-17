const path = require('path')

exports.rootResolve = relativeFromRoot => {
  return path.resolve(__dirname, '..', relativeFromRoot)
}
