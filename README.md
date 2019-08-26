# react-progressbar-on-scroll

Progress bar on scroll React component

## Installation

```bash
npm install react-progressbar-on-scroll
```

## Usage

```jsx
import React from 'react'
import ProgressBar from 'react-scroll-on-progressbar'

const App = () => (
    <div className="app">
        <ProgressBar />
        <div>Your content...</div>
    </div>
)

export default App
```

## Options

| Props         | type         | default | Required ?  | More                                 |
| ------------- | ------------ | ------- | ----------- | ------------------------------------ |
| **color**     | `string`     | #1ce    | _optionnal_ | color of progress bar                |
| **height**    | `number`     | 4       | _optionnal_ | height of progress bar in px         |
| **direction** | `right-left` | right   | _optionnal_ | towards where the progress bar fills |
| **position**  | `top-bottom` | top     | _optionnal_ | position of progress bar in window   |

## Example

```jsx
<ProgressBar 
    color="#fff" 
    height={10} 
    direction="left" 
    position="bottom" 
/>
```

## Licence

MIT
