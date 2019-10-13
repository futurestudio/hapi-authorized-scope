<div align="center">
  <!-- <img
    width="571" style="max-width:100%;"
    src="https://github.com/futurestudio/hapi-authorized-scope/blob/master/media/hapi-authorized-scope.png?raw=true"
    alt="hapi-authorized-scope logo"> -->
    <p>
    <pre>hapi-authorized-scope</pre></p>
  <br/>
  <br/>
  <p>
    Determine which scope authorized a user on a route.
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a> ·
    <a href="#authentication-strategy-options"><strong>Strategy Options</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://travis-ci.org/futurestudio/hapi-authorized-scope"><img src="https://travis-ci.org/futurestudio/hapi-authorized-scope.svg?branch=master" alt="Build Status" data-canonical-src="https://travis-ci.org/futurestudio/hapi-authorized-scope.svg?branch=master" style="max-width:100%;"></a>
    <a href="https://snyk.io/test/github/futurestudio/hapi-authorized-scope"><img src="https://snyk.io/test/github/futurestudio/hapi-authorized-scope/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/futurestudio/hapi-authorized-scope" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/hapi-authorized-scope"><img src="https://img.shields.io/npm/v/hapi-authorized-scope.svg" alt="hapi-authorized-scope Version"></a>
    <a href="https://www.npmjs.com/package/hapi-authorized-scope"><img src="https://img.shields.io/npm/dt/hapi-authorized-scope.svg" alt="Total downloads"></a>
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
Tbd.


## Installation
Add `hapi-authorized-scope` as a dependency to your project:

```bash
npm i hapi-authorized-scope
```


## Usage
Tba.

```js
await server.register({
  plugin: require('hapi-authorized-scope')
})

// went smooth like chocolate :)
```

Tba.

```js
async (request, h) {
  const authorizedScope = request.auth.authorizedScope
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
