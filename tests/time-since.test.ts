import assert from 'assert'
import { timeSince } from '../time-since'

describe('moxy timeSince test suite', () => {
	it('should convert times into time since format', () => {
		const dateFiveMinAgo = new Date()
		dateFiveMinAgo.setMinutes(dateFiveMinAgo.getMinutes() - 5)

		const oneHourAgo = new Date()
		oneHourAgo.setHours(dateFiveMinAgo.getHours() - 1)

		const oneDayAgo = new Date()
		const ts = oneDayAgo.valueOf()
		let isDstDay = false
		oneDayAgo.setDate(oneDayAgo.getDate() - 1)
		if ((ts - oneDayAgo.valueOf()) / 1000 / 60 / 60 < 24) {
			isDstDay = true
			oneDayAgo.setHours(oneDayAgo.getHours() - 1)
		}

		const threeDaysAgo = new Date()
		threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
		if (isDstDay) {
			threeDaysAgo.setHours(threeDaysAgo.getHours() - 1)
		}
		const oneMonthAgo = new Date()
		oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)

		const oneYearAgo = new Date()
		oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

		const oneWeekAgo = new Date()
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
		if (isDstDay) {
			oneWeekAgo.setHours(oneWeekAgo.getHours() - 1)
		}
		const twoWeeksAgo = new Date()
		twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
		if (isDstDay) {
			twoWeeksAgo.setHours(twoWeeksAgo.getHours() - 1)
		}
		const tests = [
			{
				date: dateFiveMinAgo,
				expected: '5 minutes ago',
			},
			{
				date: oneHourAgo,
				expected: '1 hour ago',
			},
			{
				date: new Date(),
				expected: '0 seconds ago',
			},
			{
				date: oneDayAgo,
				expected: 'Yesterday',
			},
			{
				date: threeDaysAgo,
				expected: '3 days ago',
			},
			{
				date: oneMonthAgo,
				expected: 'Last month',
			},
			{
				date: oneYearAgo,
				expected: 'Last year',
			},
			{
				date: oneWeekAgo,
				expected: 'Last week',
			},
			{
				date: twoWeeksAgo,
				expected: '2 weeks ago',
			},
		]

		tests.forEach((test) => {
			assert.deepEqual(
				timeSince(test.date).toString(),
				test.expected,
				test.expected,
			)
		})
	})
})
