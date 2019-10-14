'use strict'

const Lab = require('@hapi/lab')
const Plugin = require('../lib')
const Hapi = require('@hapi/hapi')
const { expect } = require('@hapi/code')

const { describe, it } = exports.lab = Lab.script()

async function prepareServer () {
  const server = new Hapi.Server()
  await server.register(Plugin)

  server.auth.scheme('succeeding', (_, options) => {
    return {
      authenticate (_, h) {
        return h.authenticated({ credentials: options.value, artifacts: options.artifacts })
      }
    }
  })

  server.auth.strategy('test', 'succeeding', { value: { first: 1 }, artifacts: { name: 'Marcus' } })

  return server
}

describe('Authorized Scopes', () => {
  it('authorized for post:create', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: {
          strategy: 'test',
          scope: ['admin', 'post:create']
        },
        handler: request => request.auth
      }
    })

    const { statusCode, result } = await server.inject({
      method: 'GET',
      url: '/',
      auth: {
        credentials: {
          username: 'marcus',
          scope: 'post:create'
        },
        strategy: 'test'
      }
    })

    expect(statusCode).to.equal(200)
    expect(result).to.include({
      isAuthenticated: true,
      isAuthorized: true,
      authorizedScope: 'post:create'
    })
  })

  it('authorized for first found scope', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: {
          strategy: 'test',
          scope: ['admin', 'post:create']
        },
        handler: request => request.auth
      }
    })

    const { statusCode, result } = await server.inject({
      method: 'GET',
      url: '/',
      auth: {
        credentials: {
          username: 'marcus',
          scope: ['post:read', 'post:create', 'other:scope', 'admin']
        },
        strategy: 'test'
      }
    })

    expect(statusCode).to.equal(200)
    expect(result).to.include({
      isAuthenticated: true,
      isAuthorized: true,
      authorizedScope: 'post:create'
    })
  })

  it('authorized for post:delete', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: {
          strategy: 'test',
          scope: ['post:create', 'post:delete']
        },
        handler: request => request.auth
      }
    })

    const { statusCode, result } = await server.inject({
      method: 'GET',
      url: '/',
      auth: {
        credentials: {
          username: 'marcus',
          scope: 'post:delete'
        },
        strategy: 'test'
      }
    })

    expect(statusCode).to.equal(200)
    expect(result).to.include({
      isAuthenticated: true,
      isAuthorized: true,
      authorizedScope: 'post:delete'
    })
  })

  it('unauthorized', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: {
          strategy: 'test',
          scope: ['admin', 'post:create']
        },
        handler: request => request.auth
      }
    })

    const { statusCode } = await server.inject({
      method: 'GET',
      url: '/',
      auth: {
        credentials: {
          username: 'marcus'
        },
        strategy: 'test'
      }
    })

    expect(statusCode).to.equal(403)
  })

  it('handles no scopes', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: {
          strategy: 'test'
        },
        handler: request => request.auth
      }
    })

    const { statusCode, result } = await server.inject({
      method: 'GET',
      url: '/',
      auth: {
        credentials: {
          username: 'marcus'
        },
        strategy: 'test'
      }
    })

    expect(statusCode).to.equal(200)
    expect(result).to.include({
      isAuthenticated: true,
      isAuthorized: false,
      authorizedScope: undefined
    })
  })

  it('no auth', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/',
      options: {
        handler: request => request.auth
      }
    })

    const { statusCode, result } = await server.inject({
      method: 'GET',
      url: '/'
    })

    expect(statusCode).to.equal(200)
    expect(result).to.include({
      isAuthenticated: false,
      isAuthorized: false,
      authorizedScope: undefined
    })
  })

  it('dynamic scopes', async () => {
    const server = await prepareServer()

    server.route({
      method: 'GET',
      path: '/books/{slug}',
      options: {
        auth: {
          strategy: 'test',
          scope: ['book:{params.slug}']
        },
        handler: request => request.auth
      }
    })

    const { statusCode, result } = await server.inject({
      method: 'GET',
      url: '/books/hapi',
      auth: {
        credentials: {
          username: 'marcus',
          scope: 'book:hapi'
        },
        strategy: 'test'
      }
    })

    expect(statusCode).to.equal(200)
    expect(result).to.include({
      isAuthenticated: true,
      isAuthorized: true,
      authorizedScope: 'book:hapi'
    })
  })
})
