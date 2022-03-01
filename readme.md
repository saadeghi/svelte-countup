# Svelte CountUp

This Svelte component counts up from an initial number to a target number.

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
