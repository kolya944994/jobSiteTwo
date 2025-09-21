import '@testing-library/jest-dom'

import ResizeObserver from 'resize-observer-polyfill'
;(globalThis as any).ResizeObserver = ResizeObserver

if (!window.matchMedia) {
	window.matchMedia = (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	})
}
