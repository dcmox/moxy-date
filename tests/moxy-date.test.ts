import assert from 'assert'
import { MoxyDate } from '../moxy-date'

describe('moxy-date test suite', () => {
	it('should produce formatted dates', () => {
		const tests = [
			{
				date: new Date('January 14 2020'),
				expected: '2020-01-14',
				format: 'YYYY-MM-DD',
			},
			{
				date: new Date('Sun Feb 23 2020 15:02:13 GMT-0600'),
				expected: 'February 23rd, 2020 3:02pm',
				format: 'full',
			},
			{
				date: new Date('2020-02-23T20:51:09.548Z'),
				expected: 'February 23rd, 2020 2:51pm',
				format: 'full',
				tz: 'America/Chicago',
			},
			{
				date: new Date('2020-02-23T20:51:09.548Z'),
				expected: 'February 23rd, 2020 3:51pm',
				format: 'full',
				tz: 'America/New_York',
			},
			{
				date: new Date('2020-02-23T20:51:09.548Z'),
				expected: 'February 23rd, 2020 12:51pm',
				format: 'full',
				tz: 'America/Los_Angeles',
			},
			{
				date: new Date('Sun Feb 23 2020 15:02:13 GMT-0600'),
				expected: '2020-02-23 15:02:13',
				format: 'YYYY-MM-DD hh:mm:ss',
			},
			{
				date: new Date('Sun Feb 23 2020 15:02:15 GMT-0600'),
				expected: '2020-02-23 15:02:15',
				format: 'sql',
			},
			{
				date: new Date('Sun Feb 23 2020 15:02:13 GMT-0600'),
				expected: '02/23/2020',
				format: 'short',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: 'Feb 23 2020',
				format: 'long',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: '2020-02-23',
				format: 'iso',
			},
			{
				date: new Date('February 20 2020'),
				expected: '2020',
				format: 'year',
			},
			{
				date: new Date('February 20 2020'),
				expected: 'February',
				format: 'month',
			},
			{
				date: new Date('February 20 2020'),
				expected: '20',
				format: 'date',
			},
			{
				date: new Date('February 20 2020'),
				expected: 'Thursday',
				format: 'day',
			},
			{
				date: new Date('February 20 2020'),
				expected: 'Thursday',
				format: 'l',
			},
			{
				date: new Date('February 20 2020'),
				expected: '4',
				format: 'w',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: '1582488133000',
				format: 'U',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: 'GMT',
				format: 'e',
			},
			{
				date: new Date('February 20 2020'),
				expected: '1',
				format: 'L',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: '-0600',
				format: 'O',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: '-06:00',
				format: 'P',
			},
			{
				date: new Date('February 23 2020'),
				expected: 'Sun',
				format: 'D',
			},
			{
				date: new Date('Sun Feb 23 2020 14:02:13 GMT-0600'),
				expected: 'pm',
				format: 'a',
			},
			{
				date: new Date('Sun Feb 23 2020 12:02:13 GMT-0600'),
				expected: 'PM',
				format: 'A',
			},
			{
				date: new Date('Sun Feb 23 2020 08:02:13 GMT-0600'),
				expected: 'AM',
				format: 'A',
			},
			{
				date: new Date('Sun Feb 23 2020 00:02:13 GMT-0600'),
				expected: 'am',
				format: 'a',
			},
			{
				date: new Date('Sun Feb 23 2020 00:02:13 GMT-0600'),
				expected: '2020-02-23 00:02:13 am @ GMT-0600',
				format: 'yyyy-mm-dd hh:mm:ss a @ eO',
			},
		]
		tests.forEach((test) => {
			if (test.tz) {
				assert.deepEqual(
					new MoxyDate(test.format, test.date).tz(test.tz).toString(),
					test.expected,
					test.format,
				)
			} else {
				assert.deepEqual(
					new MoxyDate(test.format, test.date).toString(),
					test.expected,
					test.format,
				)
			}
		})
	})
})
