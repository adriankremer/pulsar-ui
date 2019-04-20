<p align="center">
  <img width="200" src="https://raw.githubusercontent.com/adriankremer/pulsar-ui/master/assets/logoWithText.png" />
</p>

Style-independent components with React Hooks. The Core package serves all the components and a context-provider. The provider consumes a design-system (e.g. @pulsar-ui/system) that uses component hooks to invoke component properties and options.

[Documentation](https://pulsar-ui.netlify.com/)

[![Build Status][travis-image]][travis-url] [![License][license-image]][license-url]  

## Installation
```sh
npm i @pulsar-ui/core @pulsar-ui/system
```

## Usage

```js
import React from "react";
import { Provider, Avatar } from "@pulsar-ui/core";
import * as system from "@pulsar-ui/system";

export const App = () => (
  <Provider system={system}>
    <Avatar src="https://placekitten.com/100/100" />
  </Provider>
)
```

### Credits 💖
Structures and many other ideas like component hooks and system patterns are copied from [@diegohaz's](https://github.com/diegohaz)   [reakit v2](https://github.com/reakit/reakit/tree/next) 

### License

[ISC license](http://opensource.org/licenses/ISC)

[travis-image]: https://travis-ci.org/adriankremer/pulsar-ui.svg?branch=master
[travis-url]: https://travis-ci.org/adriankremer/pulsar-ui
[license-image]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: http://opensource.org/licenses/MIT


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/adriankremer"><img src="https://avatars2.githubusercontent.com/u/7591767?v=4" width="100px;" alt="Adrian Kremer"/><br /><sub><b>Adrian Kremer</b></sub></a><br /><a href="https://github.com/adriankremer/pulsar-ui/commits?author=adriankremer" title="Code">💻</a> <a href="https://github.com/adriankremer/pulsar-ui/commits?author=adriankremer" title="Tests">⚠️</a> <a href="#ideas-adriankremer" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-adriankremer" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/zidizei"><img src="https://avatars2.githubusercontent.com/u/470408?v=4" width="100px;" alt="Patrick Lam"/><br /><sub><b>Patrick Lam</b></sub></a><br /><a href="https://github.com/adriankremer/pulsar-ui/commits?author=zidizei" title="Code">💻</a> <a href="https://github.com/adriankremer/pulsar-ui/commits?author=zidizei" title="Tests">⚠️</a> <a href="#ideas-zidizei" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-zidizei" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
