'use strict'

class ScopeDetector {
  /**
   * Finds the first scope that authorizes the
   * authenticated user on the given `request`.
   *
   * @param {Request} request
   *
   * @returns {String}
   */
  on (request) {
    const { isAuthenticated, credentials } = request.auth

    if (isAuthenticated) {
      return []
        .concat(credentials.scope)
        .find(scope => {
          request.auth.credentials.scope = scope

          return request.route.auth.access(request)
        })
    }
  }
}

module.exports = ScopeDetector
