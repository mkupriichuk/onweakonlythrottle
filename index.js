import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const _isWeakDevice =
	(window.navigator.hardwareConcurrency <= 4 &&
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)) ||
	window.navigator.hardwareConcurrency <= 2;

export function throttleOnWeak(func, ms, options, condition) {
	const checker = _checkerBuilder(condition)
	return checker ? throttle(func, ms, options) : func;
}

export function debounceOnWeak(func, ms, options, condition) {
	const checker = _checkerBuilder(condition)
	return checker ? debounce(func, ms, options) : func;
}

function _checkerBuilder(condition) {
	let checker = _isWeakDevice
	if(typeof condition === 'boolean') {
		checker = condition
	}
	if(typeof condition === 'object' && condition.merge === true && typeof condition.exp === 'boolean') {
		checker = _isWeakDevice || condition.exp
	}
	return checker
}
