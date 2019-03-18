# @pulsar-ui/core

Pulsar UI is just another UI library ¯\\_(ツ)_/¯ using CSS in JS to provide a highly reusable and themeable experience.

[![Build Status][travis-image]][travis-url] [![License][license-image]][license-url]  

## Installation
```sh
npm i @pulsar-ui/core
```
optional:
```sh
npm i @pulsar-ui/theme-default
```

## Usage

```js
import React from "react";
import { ThemeProvider } from "@pulsar-ui/core/styled";
import Avatar from "@pulsar-ui/core/Avatar";
import Theme from "@pulsar-ui/theme-default"; // 

export const App = (props) => (
  <ThemeProvider theme={Theme}>
    <Avatar src="https://placekitten.com/100/100" />
  </ThemeProvider>
)
```

Currently it is just a small set of elements but it will grow over time because this UI will be used in all sorts of projects.


### License

[MIT license](http://opensource.org/licenses/MIT)

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
