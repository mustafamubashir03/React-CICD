import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest' // Extends Vitest expectations with DOM matchers

// Automatically clean up the DOM  after each test block
afterEach(() => {
    cleanup()
})
