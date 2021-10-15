**Русский** | [English](./README.md)
# Throttle on weak device

> Легковесная библиотека, которая оборачивает Вашу функцию в lodash throttle/debounce только на слабых устройствах 

## Что подразумеватся под "слабым" устройством?

> Слабое утройства -  это мобильный телефон, с 4 или менее ядрами, или компьютер  - с двумя

## Оглавление

* [Простое использование](#простое-использование)
* [Расширенное использование](#расширенное-использование)
* [Лодаш ссылки](#лодаш-ссылки)

## Простое использование

```js
import {throttleOnWeak, debounceOnWeak} from 'throttleonweakdevice'

function _log(n = 0) {
	console.log(1 + n);
}

const logWithThrottle = throttleOnWeak(_log, 300)

const logWithDebounce = debounceOnWeak(_log, 300)

document.addEventListener('scroll', logWithThrottle);
// с аргументами
document.addEventListener('scroll', () => logWithDebounce(2));
```

## Расширенное использование

По умолчанию слабое устройство проверяется с помощью следующего выражения: 

```js
const _isWeakDevice =
	(window.navigator.hardwareConcurrency <= 4
	&& /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	|| window.navigator.hardwareConcurrency <= 2;
```

Но вы можете передать свое собственное:


```js
import {throttleOnWeak, debounceOnWeak} from 'throttleonweakdevice'

function _log(n = 0) {
	console.log(1 + n);
}

const logWithThrottle = throttleOnWeak(_log, 300)

const isIE = /MSIE|Trident/.test(navigator.userAgent);

const logWithDebounceOnIe = debounceOnWeak(_log, 300, _, isIE)
/* !!Внимание!! Вам нужно передавать свое проверочное выражение четвертым аргументом,
потому что третье - опции lodash.debounce/throttle (см. ссылки внизу) */


const logWithDebounceOnIeAndDefaultWeak = debounceOnWeak(_log, 300, {leading: true}, {merge: true, exp: isIE})
/* Если Вы передаете в качестве проверки строку - она заменит собой стандартую (как в примере выше).
Но Вы так же можете передать обьект с двумя опциями: merge: true и exp: ваше выражение.
Тогда они будут слиты. ({leading: true} это одна из опций, которую может использовать лодаш (ссылки внизу))  */

document.addEventListener('scroll', logWithThrottle);
// с аргументами
document.addEventListener('scroll', () => logWithDebounce(2));

document.addEventListener('scroll', logWithDebounceOnIe);
document.addEventListener('scroll', logWithDebounceOnIeAndDefaultWeak);
```

## Лодаш ссылки

[Lodash throttle](https://lodash.com/docs/4.17.15#throttle) </br>
[Lodash debounce](https://lodash.com/docs/4.17.15#debounce) </br>
