import assert from 'assert'
import { parseDate } from '../parse-date'

describe('moxy parseDate test suite', () => {
	it('should parse date phrases', () => {
		const tests = [
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Tue Feb 18 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'five days ago',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sat Feb 22 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'a day ago',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Tue Feb 25 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'a day from tomorrow',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Tue Feb 25 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'a day after tomorrow',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Fri Feb 21 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'the day before yesterday',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sat Feb 22 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'yesterday',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Mon Feb 24 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'tomorrow',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sun Mar 01 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'next week',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sun Feb 16 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'last week',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Mon Mar 23 2020 18:13:32 GMT-0500 (Central Daylight Time)',
				format: 'next month',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Thu Jan 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'last month',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Thu Jan 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'last jan',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Mon Dec 23 2019 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'last december',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Mon Mar 23 2020 18:13:32 GMT-0500 (Central Daylight Time)',
				format: 'next march',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Tue Feb 23 2021 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'next feb',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sun Feb 23 2020 18:02:32 GMT-0600 (Central Standard Time)',
				format: '-11 min',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sun Feb 23 2020 17:13:32 GMT-0600 (Central Standard Time)',
				format: '1 hour ago',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Sat Feb 23 2019 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'three hundred sixty five days ago',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Wed Feb 26 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'this wednesday',
			},
			{
				date: new Date(
					'Sun Feb 23 2020 18:13:32 GMT-0600 (Central Standard Time)',
				),
				expected:
					'Wed Mar 04 2020 18:13:32 GMT-0600 (Central Standard Time)',
				format: 'next wednesday',
			},
		]

		tests.forEach((test) => {
			assert.deepEqual(
				parseDate(test.format, test.date).toString(),
				test.expected,
				test.format,
			)
		})
	})
})
