# moxy-date

Fast date formatter and timezone conversion library. This library benchmarks anywhere from 2-6x faster than using standard Date methods. Date format logic is based on the PHP date() function.

## Formats

By default, MoxyDate supports the following formats:

-   full - February 23rd, 2020 3:02pm
-   sql - 2020-02-23 15:02:13
-   utc - 2020-02-23T15:02:13.000Z
-   cookie - Sunday, 23-Feb-2020 14:02:13 CST
-   rss - Sun, 23 Feb 2020 14:02:13 -0600
-   short - 02/23/2020
-   long - Feb 23 2020
-   iso - 2020-02-23
-   year - 2020
-   month - February
-   date - 20
-   day - Thursday

## Custom Formats

For a full list of formatting variables, please check out the official [PHP Date documentation](https://www.php.net/manual/en/function.date.php). MoxyDate formatting is heavily inspired by the documentation provided there.

## Functions

-   parseDate(s: string, d: Date) - Parses a string representation of a date, eg: 'five days from now'
-   timeSince(d: Date) - Parses a date into a phrase, eg: '5 days ago'

## Examples

```typescript
const MoxyDate = require('moxy-date')

const d = new Date('Sun Feb 23 2020 15:02:13 GMT-0600')
const date = new MoxyDate('YYYY-MM-DD', d)
console.log(date.toString()) // Outputs 2020-02-23
console.log(date.format('short')) // Outputs 02/23/2020

const newYorkDate = new MoxyDate('full', '2020-02-23T20:51:09.548Z')
console.log(newYorkDate.toString('America/New_York')) // Outputs February 23rd, 2020 3:51pm
// or
const newYorkDateAlt = new MoxyDate('full', '2020-02-23T20:51:09.548Z')
console.log(newYorkDateAlt.tz('America/New_York').toString()) // Outputs February 23rd, 2020 3:51pm

const longDate = new MoxyDate(
	'yyyy-mm-dd hh:mm:ss a @ eO',
	'Sun Feb 23 2020 00:02:13 GMT-0600',
)
console.log(longDate.toString()) // Outputs '2020-02-23 00:02:13 am @ GMT-0600'

const longDateEscaped = new MoxyDate(
	'yyyy-mm-dd\\Thh:mm:ss a @ eO \\A\\B\\C',
	'Sun Feb 23T2020 00:02:13 GMT-0600 ABC',
)
console.log(longDateEscaped.toString()) // Outputs '2020-02-23T00:02:13 am @ GMT-0600 ABC'

const twoDays = 'the day after tomorrow'
console.log(MoxyDate.parseDate(twoDays, new Date('2020-02-23'))) // Outputs result of new Date('2020-02-25')

console.log(MoxyDate.timeSince(new Date('2020-02-18'))) // Outputs '5 days ago' (if today were 2020-02-23)
```

## Client-side Usage

Below is the webpacked version of moxy-date, for use on the client-side.

```html
<script src="./dist/moxy-date.js"></script>
```
