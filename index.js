import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const _isWeakDevice =
	(window.navigator.hardwareConcurrency <= 4 &&
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)) ||
	window.navigator.hardwareConcurrency <= 2;

/**
 * Return a function or functionWithTrottle
 * @param {Function} func function which you want to wrap
 * @param {number} ms number of delay
 * @param {{leading: boolean, trailing: boolean}} [options] options
 * @returns {Function} Returns the new throttled function.
 */
export const throttleOnlyOnWeakDevice = (func, ms, options) =>
	_isWeakDevice ? throttle(func, ms, options) : func;

/**
 * Return a function or functionWithDebounce
 * @param {Function} func function which you want to wrap
 * @param {number} ms number of delay
 * @param {{leading: boolean, trailing: boolean, maxWait: number}} [options] options
 * @returns {Function} Returns the new throttled function.
 */
export const debounceOnlyOnWeakDevice = (func, ms, options) =>
	_isWeakDevice ? debounce(func, ms, options) : func;
