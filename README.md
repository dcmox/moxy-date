# moxy-date

Fast date formatter and timezone conversion library. This library benchmarks anywhere from 2-6x faster than using standard Date methods. Date format logic is based on the PHP date() function.

## Formats

By default, MoxyDate supports the following formats:

-   full - February 23rd, 2020 3:02pm
-   sql - 2020-02-23 15:02:13
-   utc - 2020-02-23T15:02:13.000Z
-   short - 02/23/2020
-   long - Feb 23 2020
-   iso - 2020-02-23
-   year - 2020
-   month - February
-   date - 20
-   day - Thursday

## Custom Formats

For a full list of formatting variables, please check out the official [PHP Date documentation](https://www.php.net/manual/en/function.date.php). MoxyDate formatting is heavily inspired by the documentation provided there.

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
```
