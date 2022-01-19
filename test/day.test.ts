import { day } from '../src/index'

describe('day', () => {
  test('day Methods', () => {
    const date = day('2022-01-19')
    expect(date.year()).toBe(2022)
    // month 是从 0 到 11 的
    expect(date.month()).toBe(1)
    expect(date.date()).toBe(19)
  })
})
