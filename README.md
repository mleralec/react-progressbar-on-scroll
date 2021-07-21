# [react-progressbar-on-scroll](https://www.npmjs.com/package/react-progressbar-on-scroll)

![npm bundle size](https://img.shields.io/bundlephobia/min/react-progressbar-on-scroll?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-progressbar-on-scroll/peer/react?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/mleralec/react-progressbar-on-scroll?style=flat-square)
![Licence](https://img.shields.io/npm/l/react-progressbar-on-scroll?style=flat-square)

Progress bar on scroll React component

> [live example on codesandbox](https://codesandbox.io/s/condescending-easley-qgiyn)

## Installation

```bash
npm install react-progressbar-on-scroll
# or
yarn add react-progressbar-on-scroll
```

## Usage

```jsx
import React from 'react'
import ProgressBar from 'react-progressbar-on-scroll'

const App = () => (
  <div className="app">
    <ProgressBar />
    <div>Your content...</div>
  </div>
)

export default App
```

## Available props

| key               | type         | default | description                          |
| ----------------- | ------------ | ------- | ------------------------------------ |
| **color**         | `string`     | #1ce    | color of progress bar                |
| **height**        | `number`     | 4       | height of progress bar in px         |
| **direction**     | `right-left` | right   | towards where the progress bar fills |
| **position**      | `top-bottom` | top     | position of progress bar in window   |
| **gradient**      | `boolean`    | false   | activate gradient on progress bar    |
| **gradientColor** | `string`     | yellow  | Second color of progress bar         |

## Example

```jsx
<ProgressBar
  color="#fff"
  height={10}
  direction="left"
  position="bottom"
  gradient={true}
  gradientColor="#eee"
/>
```

## Licence

MIT
