/**
 * Return a function or functionWithThrottle
 * @param {Function} func function which you want to wrap
 * @param {number} ms number of delay
 * @param {{leading: boolean, trailing: boolean}|undefined|null} [options] options
 * @param {boolean|{merge: boolean, exp: boolean}} [condition] condition
 * @returns {Function} Return a function or functionWithThrottle
 */
 export function throttleOnWeak<T extends any[]>(
	func: (...args: T) => unknown,
	ms: number, options?: {leading?: boolean, trailing?: boolean}|undefined|null,
	condition?: boolean | {merge: boolean, exp: boolean})
	: (...args: T) => unknown

	/**
 * Return a function or functionWithDebounce
 * @param {Function} func function which you want to wrap
 * @param {number} ms number of delay
 * @param {{leading: boolean, trailing: boolean, maxWait: number}|undefined|null} [options] options
 * @param {boolean|{merge: boolean, exp: boolean}} [condition] condition
 * @returns {Function} Return a function or functionWithDebounce
 */
export function debounceOnWeak<T extends any[]>(func: (...args: T) => unknown,
ms: number, options?: {leading?: boolean, trailing?: boolean, maxWait?: number}|undefined|null,
condition?: boolean | {merge: boolean, exp: boolean}): (...args: T) => unknown
