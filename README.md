<div align="center">
  <img
    width="557" style="max-width:100%;"
    src="https://github.com/futurestudio/hapi-authorized-scope/blob/master/media/hapi-authorized-scope.png?raw=true"
    alt="hapi-authorized-scope logo">
  <br/>
  <br/>
  <p>
    Determine which scope authorized a user on a route.
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://travis-ci.com/futurestudio/hapi-authorized-scope"><img src="https://travis-ci.com/futurestudio/hapi-authorized-scope.svg?branch=master" alt="Build Status" data-canonical-src="https://travis-ci.com/futurestudio/hapi-authorized-scope.svg?branch=master" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/hapi-authorized-scope"><img src="https://img.shields.io/npm/v/hapi-authorized-scope.svg" alt="hapi-authorized-scope Version"></a>
    <a href="https://greenkeeper.io/" rel="nofollow"><img src="https://badges.greenkeeper.io/futurestudio/hapi-authorized-scope.svg" alt="Greenkeeper badge" data-canonical-src="https://badges.greenkeeper.io/futurestudio/hapi-authorized-scope.svg" style="max-width:100%;"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> for updates!</em>
  </p>
</div>

------

<p align="center"><sup>The <a href="https://futurestud.io">Future Studio University</a> supports development of this hapi plugin 🚀</sup>
<br><b>
Join the <a href="https://futurestud.io/university">Future Studio University and Skyrocket in Node.js</a></b>
</p>

------


## Introduction
The `hapi-authorized-scope` plugin determines and stores the scope that authorized an authenticated request. You'll find the scope authorizing the request in `request.auth.authorizedScope`.

In hapi, you’ll find all auth-related details in `request.auth`, that’s the reason this plugin adds the `authorizedScope` property there:

```js
{
  isAuthenticated: true,
  isAuthorized: true,
  credentials: { username: 'marcus', scope: ['admin', 'user'] },
  artifacts: null,
  strategy: 'test',
  mode: 'required',
  error: null,
  isInjected: true,
  authorizedScope: 'user'  // <-- added: the authorized scope that let the user access a route
}
```


## Requirements
> **hapi v19 (or later)** and **Node.js v12 (or newer)**

This plugin requires **hapi v19** (or later) and **Node.js v12 or newer**.


### Compatibility
| Major Release | [hapi.js](https://github.com/hapijs/hapi) version | Node.js version |
| --- | --- | --- |
| `v2` | `>=17 hapi` | `>=12` |
| `v1` | `>=17 hapi` | `>=8` |


## Installation
Add `hapi-authorized-scope` as a dependency to your project:

```bash
npm i hapi-authorized-scope
```


## Usage
The usage is pretty straightforward: register the plugin to your hapi server and that’s it:
```js
await server.register({
  plugin: require('hapi-authorized-scope')
})

// went smooth like chocolate :)
```

`hapi-authorized-scope` extends the request lifecycle `onPostAuth` and finds the first scope in the authenticated credentials that authorizes the request to access the route.

In your route handlers or request lifecycle extension points, you may access the authorized scope like this:

```js
{
  method: 'GET',
  path: '/profile',
  options: {
    handler: async (request, h) {
      const authorizedScope = request.auth.authorizedScope

      Logger.debug(`Scope authorizing the user to access this route: ${authorizedScope}`)

      return h.view('profile')
    }
  }
}

```

Enjoy!


## Links & Resources

- [hapi tutorial series](https://futurestud.io/tutorials/hapi-get-your-server-up-and-running) with 100+ tutorials


## Contributing

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License

MIT © [Future Studio](https://futurestud.io)

---

> [futurestud.io](https://futurestud.io) &nbsp;&middot;&nbsp;
> GitHub [@futurestudio](https://github.com/futurestudio/) &nbsp;&middot;&nbsp;
> Twitter [@futurestud_io](https://twitter.com/futurestud_io)
