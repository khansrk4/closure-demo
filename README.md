This repo is a proof-of-concept for bunding an Angular application with Google Closure Compiler.
It contains a minimal Hello World application with a single component.

See https://github.com/angular/angular/issues/8550#issuecomment-218908407

This example app builds a *single* `.js` file for an Angular 2 application.
No other scripts are needed (eg. zone.js)

The current size is:
```
-rw-r--r--   1 alexeagle  eng  130472 Dec 16 10:05 bundle.js
-rw-------   1 alexeagle  eng   34955 Dec 16 10:05 bundle.js.brotli
-rw-r--r--   1 alexeagle  eng   40244 Dec 16 10:05 bundle.js.gz
```

# Try it
`npm install`
`npm run build`
`python -m SimpleHTTPServer`

# Notes

This requires an ES6 distro of Angular.
I have published my own personal snapshot, which is built from this branch:
https://github.com/alexeagle/angular/tree/closure

See package.json for how this is used in the demo.

Requires Node 6.x since the `ngc` tool (and its deps) are now shipped as ES6 as well.

Requires building rxjs from https://github.com/alexeagle/rxjs/tree/closure2
using `npm run compile_dist_es6_for_closure`. Copy this into the `vendor` directory.

## TODO
- Get an official Angular distro with ES6, don't use my branch.
- Need rxjs to produce a closure-compatible ES6 distro, don't use my branch.
- Remove the hack of needing node_modules/rxjs for nodejs and vendor/rxjs for browser
- Extend the demo to use a 3rd party component, like @angular/material
