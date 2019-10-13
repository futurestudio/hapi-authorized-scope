'use strict'

class ScopeDetector {
  authorizedFor (request) {
    const user = request.auth.credentials

    return [].concat(user.scope)
      .map(scope => scope)
      .find(scope => {
        return request.route.auth.access(Object.assign({},
          request,
          { auth: { credentials: { scope } } }
        ))
      })
  }

  static authorizedFor (request) {
    return new ScopeDetector().authorizedFor(request)
  }
}

module.exports = ScopeDetector
