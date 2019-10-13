'use strict'

const ScopeDetector = require('./scope-detector')

function register (server) {
  server.ext('onPostAuth', async (request, h) => {
    request.auth.authorizedScope = ScopeDetector.authorizedFor(request)

    return h.continue
  })
}

exports.plugin = {
  register,
  once: true,
  pkg: require('../package.json')
}
