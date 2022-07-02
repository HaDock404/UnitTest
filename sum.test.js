import { sum } from './sum.js'

describe('Unit test sum function', () => {
    it('should return 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

    it('should return 0', () => {
        expect(sum(1, -1)).toBe(0);
    })
})
