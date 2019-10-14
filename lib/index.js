'use strict'

const ScopeFinder = require('./scope-finder')
const find = new ScopeFinder()

function register (server) {
  server.ext('onPostAuth', (request, h) => {
    request.auth.authorizedScope = find.on(request)

    return h.continue
  })
}

exports.plugin = {
  register,
  once: true,
  pkg: require('../package.json')
}
