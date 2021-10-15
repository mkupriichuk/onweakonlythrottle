import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const _isWeakDevice =
	(window.navigator.hardwareConcurrency <= 4 &&
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)) ||
	window.navigator.hardwareConcurrency <= 2;

/**
 * Return a function or functionWithThrottle
 * @param {Function} func function which you want to wrap
 * @param {number} ms number of delay
 * @param {{leading: boolean, trailing: boolean}} [options] options
 * @param {string|{merge: boolean, exp: boolean}} [condition] condition
 * @returns {Function} Return a function or functionWithThrottle
 */
export const throttleOnWeak = (func, ms, options, condition) => {
	const checker = _checkerBuilder(condition)
	return checker ? throttle(func, ms, options) : func;
}

/**
 * Return a function or functionWithDebounce
 * @param {Function} func function which you want to wrap
 * @param {number} ms number of delay
 * @param {{leading: boolean, trailing: boolean, maxWait: number}} [options] options
 * @returns {Function} Return a function or functionWithDebounce
 */
export const debounceOnWeak = (func, ms, options, condition) => {
	const checker = _checkerBuilder(condition)
	return checker ? debounce(func, ms, options) : func;
}

/**
 *
 * @param {string|{merge: boolean, exp: boolean}} condition condition
 * @returns {Boolean} returns true or false
 */
function _checkerBuilder(condition) {
	let checker = _isWeakDevice
	if(typeof condition === 'boolean') {
		checker = condition
	}
	if(typeof condition === 'object' && condition.merge === true && condition.exp) {
		checker = _isWeakDevice || condition.exp
	}
	return checker
}
