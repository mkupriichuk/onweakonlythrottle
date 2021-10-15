**English** | [Русский](./README.ru.md)
# Throttle on weak device

> A tiny lib for lodash throttle/debounce only on weak devices

## Whats is a "weak" device?

> Weak device is a mobile with 4 or less cores or a computer with 2 or less cores

## Table of Contents

* [Basic usage](#basic-usage)
* [Advanced usage](#advanced-usage)
* [Lodash links](#lodash-links)

## Basic usage

```js
import {throttleOnWeak, debounceOnWeak} from 'throttleonweakdevice'

function _log(n = 0) {
	console.log(1 + n);
}

const logWithThrottle = throttleOnWeak(_log, 300)

const logWithDebounce = debounceOnWeak(_log, 300)

document.addEventListener('scroll', logWithThrottle);
// with arguments
document.addEventListener('scroll', () => logWithDebounce(2));
```
## Advanced usage

By default a weak device is checked using the following expression:

```js
const _isWeakDevice =
	(window.navigator.hardwareConcurrency <= 4
	&& /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	|| window.navigator.hardwareConcurrency <= 2;
```

However you can replace it or merge with:

```js
import {throttleOnWeak, debounceOnWeak} from 'throttleonweakdevice'

function _log(n = 0) {
	console.log(1 + n);
}

const logWithThrottle = throttleOnWeak(_log, 300)

const isIE = /MSIE|Trident/.test(navigator.userAgent);

const logWithDebounceOnIe = debounceOnWeak(_log, 300, _, isIE)
/* !!You need a pass custom checker as the fourth parameter,
because is three - lodash.debounce/throttle options (see links below) */


const logWithDebounceOnIeAndDefaultWeak = debounceOnWeak(_log, 300, _, {merge: true, exp: isIE})
/* if checker is a string it will replace the default one (as above).
But you can pass a object with two parameters: merge: true and exp: your checker. Then they will merge */

document.addEventListener('scroll', logWithThrottle);
// with arguments
document.addEventListener('scroll', () => logWithDebounce(2));

document.addEventListener('scroll', logWithDebounceOnIe);
document.addEventListener('scroll', logWithDebounceOnIeAndDefaultWeak);
```

## Lodash links

[Lodash throttle](https://lodash.com/docs/4.17.15#throttle) </br>
[Lodash debounce](https://lodash.com/docs/4.17.15#debounce) </br>
