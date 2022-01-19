import { ShowNum } from '../src/index'

describe('ShowNum', () => {
  test('Queue Methods', () => {
    expect(ShowNum(6.7)).toBe(6)
    expect(ShowNum(7.7)).toBe(7)
    expect(ShowNum(8.7)).toBe(8)
  })
})