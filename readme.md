# Svelte CountUp

This Svelte component counts up from an initial number to a target number.

## Demo

https://svelte.dev/repl/e38ffac8831d44128a127b5dfe114f6f?version=3.46.4

## Features

- You can specify the initial number, target number, and the duration of the count up
- You can specify the number of decimal places
- You can choose the target number to be rounded or not
- You can set the step size of the count up
- You can use multiple count ups on the same page
- Countup only starts when it is visible on the screen and stops when it is not visible

## Install

```
npm i svelte-countup
```

## Usage

```js
import Countup from "svelte-countup";
```

```svelte
<Countup value={100} />
```

## Porps

All props (with default values):

```svelte
<Countup
  initial={0}
  value={100}
  duration={3000}
  step={1}
  roundto={1}
  format={true}
/>
```

- `initial`: The initial number to count up from.
- `value`: The target number to count up to.
- `duration`: The duration of the animation in milliseconds.
- `step`: The number of steps to count up by.
- `roundto`: The number of decimal places to round to.
- `format`: Whether to separate thousands with commas.
