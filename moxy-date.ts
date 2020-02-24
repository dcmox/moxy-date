import { parseDate } from './parse-date'
import { timeSince } from './time-since'
import { TZ_DATABASE } from './timezones'
import { MONTH_TRANSLATION, WEEKDAY_TRANSLATION } from './translations'

// Based on PHP Date format -> https://www.php.net/manual/en/function.date.php with support for YYYY-MM-DD format.
export class MoxyDate {
	public static parseDate(s: string, date: Date): Date {
		return parseDate(s, date)
	}
	public static timeSince(date: Date): string {
		return timeSince(date)
	}
	private _format: string = ''
	private _date: any = null
	private _d: string = ''
	private _formatted: string = ''

	constructor(format: string = 'YYYY-MM-DD', date: any = null) {
		this._format = format
		if (date && typeof date === 'string') {
			date = date.replace(/rd|th|nd/g, '')
		}
		this._date = date ? new Date(date) : new Date()
		this._d = this._date.toString()
		return this.toString()
	}

	public getFormattedDate(): string {
		return this.toString()
	}

	public getDate(): Date {
		return this._date
	}

	public format(format: string = 'full'): string {
		this._format = format
		this._formatted = ''
		return this.toString()
	}

	public isDst(): boolean {
		const d = new Date(this._date.getFullYear(), 0, 1)
		const offset = d.getTimezoneOffset()
		d.setMonth(6)
		return (
			this._date.getTimezoneOffset() <
			Math.max(offset, d.getTimezoneOffset())
		)
	}

	public parseDate(s: string): Date {
		const date = parseDate(s, this._date)
		return date
	}

	public tz(tz: string): MoxyDate {
		const tzd = TZ_DATABASE[tz]
		if (!tzd) {
			throw new Error('Timezone not supported!')
		}
		const [, , , , , timezone] = this._d.split(' ')
		const offset = parseInt(tzd, 10) - parseInt(timezone.slice(3, 6), 10)
		const d = new Date(this._date)
		d.setHours(this._date.getHours() + offset)
		this._d = d.toString()
		this._formatted = ''
		return this
	}

	public timeSince(): any {
		return timeSince(this._date)
	}

	public toString(format?: string): any {
		if (format) {
			this.tz(format)
		}
		// "Sun Feb 23 2020 09:29:29 GMT-0600 (Central Standard Time)"
		if (this._formatted) {
			return this._formatted
		}
		const [
			day,
			month,
			date,
			year,
			time,
			timezone,
			...tzStringParts
		] = this._d.split(' ')
		const tzString = tzStringParts.join(' ')
		const [hours, minutes, seconds] = time ? time.split(':') : ['', '', '']
		if (this._format) {
			const lowerFormat = this._format.toLowerCase()
			// Handle all common formats first for optimization
			if (this._format === 'YYYY-MM-DD' || lowerFormat === 'yyyy-mm-dd') {
				// default format 2020-02-23
				this._formatted = `${year}-${MONTH_TRANSLATION[month].number}-${date}`
				return this._formatted
			} else if (this._format === 'full') {
				// February 1st, 2020 5:30pm -> Optimized
				const h = (hours === '12'
					? 12
					: parseInt(hours, 10) % 12
				).toString()
				const ampm = parseInt(hours, 10) >= 12 ? 'pm' : 'am'
				this._formatted = `${
					MONTH_TRANSLATION[month].full
				} ${date}${this._getSuffix(
					date,
				)}, ${year} ${h}:${minutes}${ampm}`
				return this._formatted
			} else if (
				this._format === 'sql' ||
				lowerFormat === 'yyyy-mm-dd hh:mm:ss'
			) {
				this._format = 'YYYY-MM-DD hh:mm:ss'
				this._formatted = `${year}-${MONTH_TRANSLATION[month].number}-${date} ${hours}:${minutes}:${seconds}`
				return this._formatted
			} else if (
				lowerFormat === 'yyyy-mm-dd hh:mm:ss.sss' ||
				lowerFormat === 'yyyy-mm-dd hh:mm:ss.u'
			) {
				this._format = 'YYYY-MM-DD hh:mm:ss'
				this._formatted = `${year}-${
					MONTH_TRANSLATION[month].number
				}-${date} ${hours}:${minutes}:${seconds}.${this._date
					.valueOf()
					.toString()
					.slice(-3)}`
				return this._formatted
			} else if (this._format === 'mongo' || this._format === 'utc') {
				this._formatted = `${year}-${
					MONTH_TRANSLATION[month].number
				}-${date}T${hours}:${minutes}:${seconds}.${this._date
					.valueOf()
					.toString()
					.slice(-3)}Z`
				return this._formatted
			} else if (this._format === 'short' || this._format === 'm/d/Y') {
				// month/day/year
				this._formatted = `${MONTH_TRANSLATION[month].number}/${date}/${year}`
				return this._formatted
			} else if (this._format === 'long' || this._format === 'M d Y') {
				// month/day/year
				this._formatted = `${month} ${date} ${year}`
				return this._formatted
			} else if (this._format === 'iso' || this._format === 'Y-m-d') {
				// year/month/day
				this._formatted = `${year}-${MONTH_TRANSLATION[month].number}-${date}`
				return this._formatted
			} else if (this._format === 'year' || this._format === 'yyyy') {
				this._formatted = year
				return this._formatted
			} else if (this._format === 'day' || this._format === 'l') {
				this._formatted = WEEKDAY_TRANSLATION[day].full
				return this._formatted
			} else if (this._format === 'D') {
				this._formatted = day
				return this._formatted
			} else if (this._format === 'date' || this._format === 'dd') {
				this._formatted = date
				return this._formatted
			} else if (this._format === 'month' || this._format === 'F') {
				this._formatted = MONTH_TRANSLATION[month].full
				return this._formatted
			} else if (this._format === 'time' || lowerFormat === 'hh:mm:ss') {
				this._formatted = time
				return this._formatted
			}

			const tc = this._tryCase
			const f = { result: this._format }

			// Process time first, since mm conflicts with m for month
			// Hours
			tc(
				f,
				'g',
				(hours === '12' ? 12 : parseInt(hours, 10) % 12).toString(),
			) // 12 hr format, no leading
			tc(f, 'G', parseInt(hours, 10).toString()) // 24 hour format, no leading
			tc(
				f,
				['hh', 'h'],
				(hours === '12' ? 12 : parseInt(hours, 10) % 12)
					.toString()
					.padStart(2, '0'),
			) // 12 hr format, leading 0s
			tc(f, ['HH', 'H'], hours) // 24 hour format, leading 0s

			// Minutes
			tc(f, ['i', 'mm'], minutes) // minutes with leading 0s

			// Micro-seconds
			tc(
				f,
				['sss', 'u', 'v'],
				this._date
					.valueOf()
					.toString()
					.slice(-3),
			)

			// Seconds
			tc(f, ['ss', 's'], seconds) // seconds with leading 0s

			// Year
			tc(f, ['YYYY', 'yyyy'], year) // YYYY -> 2020
			tc(f, ['YYY', 'yyy'], Number(year).toString()) // 0890 -> 890
			tc(f, ['YY', 'y'], year.slice(2)) // 2020 -> 20
			tc(f, 'Y', year) // Y -> YYYY -> 2020

			// Month
			tc(f, ['MM', 'm'], MONTH_TRANSLATION[month].number) // MM -> 01
			tc(f, 'F', MONTH_TRANSLATION[month].full) // F -> January
			tc(f, 'M', month) // M -> Jan
			tc(f, 'n', Number(month).toString()) // n

			// Date
			tc(f, ['DD', 'dd', 'd'], date) // DD -> 03
			tc(f, 'j', Number(date).toString()) // j -> 3
			if (f.result.indexOf('t') > -1) {
				// Days of month
				const lastDay = new Date(
					this._date.getYear(),
					this._date.getMonth(),
					0,
				)
				tc(f, 't', lastDay.getDate().toString())
			}

			// Special
			tc(f, 'U', this._date.valueOf().toString()) // Unix time since epoch
			if (f.result.indexOf('B') > -1) {
				// Swatch Internet time
				tc(
					f,
					'B',
					Math.floor(
						((((this._date.getUTCHours() + 1) % 24) +
							this._date.getUTCMinutes() / 60 +
							this._date.getUTCSeconds() / 3600) *
							1000) /
							24,
					).toString(),
				)
			}
			if (f.result.indexOf('L') > -1) {
				// Prints 1 if leap year, 0 if not
				const nYear = parseInt(year, 10)
				tc(
					f,
					'L',
					Number(
						(nYear % 4 === 0 && nYear % 100 !== 0) ||
							nYear % 400 === 0,
					).toString(),
				)
			}

			if (f.result.indexOf('O') > -1) {
				// GMT+0300 -> + 0300
				f.result = f.result.replace(/O/g, timezone.substring(3))
			}
			if (f.result.indexOf('P') > -1) {
				// GMT+0300 -> +03:00
				f.result = f.result.replace(
					/P/g,
					`${timezone.substring(3, 6)}:${timezone.substring(6)}`,
				)
			}
			tc(f, 'D', day) // D -> Mon
			tc(f, 'w', WEEKDAY_TRANSLATION[day].number) // w -> Sunday -> 0
			if (f.result.indexOf('W') > -1) {
				tc(f, 'W', this._getWeekNumber().toString()) // Week number of year
			}
			tc(f, 'N', WEEKDAY_TRANSLATION[day].numberAlt) // N -> Monday -> 1, Sunday -> 7
			if (f.result.indexOf('S') > -1) {
				const suffix = this._getSuffix(date)
				f.result = f.result.replace(/S/g, suffix)
			}

			const tzIdentifier: string = timezone.slice(0, 3)
			if (f.result.indexOf('e') > -1) {
				// Timezone identifier
				f.result = f.result.replace(/e/g, tzIdentifier)
				//// Intl.DateTimeFormat().resolvedOptions().timeZone,
			}

			if (f.result.indexOf('T') > -1) {
				// Timezone abbreviation, eg: CST, EST.
				// Replace tzIdentifier with lowercase so we dont have a conflict
				f.result = f.result.replace(
					new RegExp(tzIdentifier, 'g'),
					tzIdentifier.toLowerCase(),
				)
				f.result = f.result.replace(
					/T/g,
					tzString
						.replace(/\(|\)/g, '')
						.split(' ')
						.map((w: string) => w.charAt(0))
						.join(''),
				)
				f.result = f.result.replace(
					new RegExp(tzIdentifier.toLowerCase(), 'g'),
					tzIdentifier,
				)
			}

			// Save replacements that may conflict for last
			tc(f, 'A', parseInt(hours, 10) >= 12 ? 'PM' : 'AM')
			tc(f, 'a', parseInt(hours, 10) >= 12 ? 'pm' : 'am')
			tc(f, 'l', WEEKDAY_TRANSLATION[day].full) // l -> Monday
			this._formatted = f.result
			return this._formatted
		}
		return this._d
	}

	public timestamp(): string {
		return this._d.valueOf()
	}

	public valueOf(): string {
		return this._formatted
	}

	private _getSuffix(date: string): string {
		let suffix: string = 'th'
		if (date.slice(-1) === '1') {
			suffix = 'st'
		} else if (date.slice(-1) === '2') {
			suffix = 'nd'
		} else if (date.slice(-1) === '3') {
			suffix = 'rd'
		}
		return suffix
	}

	private _getWeekNumber(): number {
		// Copy date so don't modify original
		const d = new Date(this._date)
		// Set to nearest Thursday: current date + 4 - current day number,
		d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
		// Get first day of year
		const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).valueOf()
		// Calculate full weeks to nearest Thursday
		const weekNo = Math.ceil(((d.valueOf() - yearStart) / 86400000 + 1) / 7)
		return weekNo
	}

	private _tryCase(
		fObject: any,
		dCase: string[] | string,
		replaceWith: string,
	): boolean {
		if (dCase instanceof Array) {
			let ret: boolean = false
			for (const cCase of dCase) {
				if (fObject.result.indexOf(cCase) > -1) {
					fObject.result = fObject.result.replace(
						new RegExp(cCase, 'g'),
						replaceWith,
					)
					ret = true
				}
			}
			return ret
		} else {
			if (fObject.result.indexOf(dCase) > -1) {
				fObject.result = fObject.result.replace(
					new RegExp(dCase, 'g'),
					replaceWith,
				)
				return true
			}
		}
		return false
	}
}

module.exports = MoxyDate
