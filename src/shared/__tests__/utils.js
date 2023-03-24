import {getFormattedValue} from 'shared/utils'

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1234.0')
})
