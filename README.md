
# throttleonweakdevice

> A tiny lib for throttle/debounce only on weak devices

## Whats is a "weak" device?

> Weak device is a mobile with 4 or less cores or a computer with 2 or less cores

## Usage

```js
import {throttleOnlyOnWeakDevice, debounceOnlyOnWeakDevice} from 'throttleonweakdevice'

function _log(n = 0) {
	console.log(1 + n);
}

const logWithThrottle = throttleOnlyOnWeakDevice(_log, 300)

const logWithDebounce = debounceOnlyOnWeakDevice(_log, 300)

document.addEventListener('scroll', logWithThrottle);
// with arguments
document.addEventListener('scroll', () => logWithDebounce(2));
```
