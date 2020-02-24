"use strict";
exports.__esModule = true;
var parse_date_1 = require("./parse-date");
var time_since_1 = require("./time-since");
var timezones_1 = require("./timezones");
var translations_1 = require("./translations");
// Based on PHP Date format -> https://www.php.net/manual/en/function.date.php with support for YYYY-MM-DD format.
var MoxyDate = /** @class */ (function () {
    function MoxyDate(format, date) {
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        if (date === void 0) { date = null; }
        this._format = '';
        this._date = null;
        this._d = '';
        this._formatted = '';
        this._format = format;
        if (date && typeof date === 'string') {
            date = date.replace(/rd|th|nd/g, '');
        }
        this._date = date ? new Date(date) : new Date();
        this._d = this._date.toString();
        return this.toString();
    }
    MoxyDate.parseDate = function (s, date) {
        return parse_date_1.parseDate(s, date);
    };
    MoxyDate.timeSince = function (date) {
        return time_since_1.timeSince(date);
    };
    MoxyDate.prototype.getFormattedDate = function () {
        return this.toString();
    };
    MoxyDate.prototype.getDate = function () {
        return this._date;
    };
    MoxyDate.prototype.format = function (format) {
        if (format === void 0) { format = 'full'; }
        this._format = format;
        this._formatted = '';
        return this.toString();
    };
    MoxyDate.prototype.isDst = function () {
        var d = new Date(this._date.getFullYear(), 0, 1);
        var offset = d.getTimezoneOffset();
        d.setMonth(6);
        return (this._date.getTimezoneOffset() <
            Math.max(offset, d.getTimezoneOffset()));
    };
    MoxyDate.prototype.parseDate = function (s) {
        var date = parse_date_1.parseDate(s, this._date);
        return date;
    };
    MoxyDate.prototype.tz = function (tz) {
        var tzd = timezones_1.TZ_DATABASE[tz];
        if (!tzd) {
            throw new Error('Timezone not supported!');
        }
        var _a = this._d.split(' '), timezone = _a[5];
        var offset = parseInt(tzd, 10) - parseInt(timezone.slice(3, 6), 10);
        var d = new Date(this._date);
        d.setHours(this._date.getHours() + offset);
        this._d = d.toString();
        this._formatted = '';
        return this;
    };
    MoxyDate.prototype.timeSince = function () {
        return time_since_1.timeSince(this._date);
    };
    MoxyDate.prototype.toString = function (format) {
        if (format) {
            this.tz(format);
        }
        // "Sun Feb 23 2020 09:29:29 GMT-0600 (Central Standard Time)"
        if (this._formatted) {
            return this._formatted;
        }
        var _a = this._d.split(' '), day = _a[0], month = _a[1], date = _a[2], year = _a[3], time = _a[4], timezone = _a[5], tzStringParts = _a.slice(6);
        var tzString = tzStringParts.join(' ');
        var _b = time ? time.split(':') : ['', '', ''], hours = _b[0], minutes = _b[1], seconds = _b[2];
        if (this._format) {
            var lowerFormat = this._format.toLowerCase();
            // Handle all common formats first for optimization
            if (this._format === 'YYYY-MM-DD' || lowerFormat === 'yyyy-mm-dd') {
                // default format 2020-02-23
                this._formatted = year + "-" + translations_1.MONTH_TRANSLATION[month].number + "-" + date;
                return this._formatted;
            }
            else if (this._format === 'full') {
                // February 1st, 2020 5:30pm -> Optimized
                var h = (hours === '12'
                    ? 12
                    : parseInt(hours, 10) % 12).toString();
                var ampm = parseInt(hours, 10) >= 12 ? 'pm' : 'am';
                this._formatted = translations_1.MONTH_TRANSLATION[month].full + " " + date + this._getSuffix(date) + ", " + year + " " + h + ":" + minutes + ampm;
                return this._formatted;
            }
            else if (this._format === 'sql' ||
                lowerFormat === 'yyyy-mm-dd hh:mm:ss') {
                this._format = 'YYYY-MM-DD hh:mm:ss';
                this._formatted = year + "-" + translations_1.MONTH_TRANSLATION[month].number + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
                return this._formatted;
            }
            else if (lowerFormat === 'yyyy-mm-dd hh:mm:ss.sss' ||
                lowerFormat === 'yyyy-mm-dd hh:mm:ss.u') {
                this._format = 'YYYY-MM-DD hh:mm:ss';
                this._formatted = year + "-" + translations_1.MONTH_TRANSLATION[month].number + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "." + this._date
                    .valueOf()
                    .toString()
                    .slice(-3);
                return this._formatted;
            }
            else if (this._format === 'mongo' || this._format === 'utc') {
                this._formatted = year + "-" + translations_1.MONTH_TRANSLATION[month].number + "-" + date + "T" + hours + ":" + minutes + ":" + seconds + "." + this._date
                    .valueOf()
                    .toString()
                    .slice(-3) + "Z";
                return this._formatted;
            }
            else if (this._format === 'short' || this._format === 'm/d/Y') {
                // month/day/year
                this._formatted = translations_1.MONTH_TRANSLATION[month].number + "/" + date + "/" + year;
                return this._formatted;
            }
            else if (this._format === 'long' || this._format === 'M d Y') {
                // month/day/year
                this._formatted = month + " " + date + " " + year;
                return this._formatted;
            }
            else if (this._format === 'iso' || this._format === 'Y-m-d') {
                // year/month/day
                this._formatted = year + "-" + translations_1.MONTH_TRANSLATION[month].number + "-" + date;
                return this._formatted;
            }
            else if (this._format === 'year' || this._format === 'yyyy') {
                this._formatted = year;
                return this._formatted;
            }
            else if (this._format === 'day' || this._format === 'l') {
                this._formatted = translations_1.WEEKDAY_TRANSLATION[day].full;
                return this._formatted;
            }
            else if (this._format === 'D') {
                this._formatted = day;
                return this._formatted;
            }
            else if (this._format === 'date' || this._format === 'dd') {
                this._formatted = date;
                return this._formatted;
            }
            else if (this._format === 'month' || this._format === 'F') {
                this._formatted = translations_1.MONTH_TRANSLATION[month].full;
                return this._formatted;
            }
            else if (this._format === 'time' || lowerFormat === 'hh:mm:ss') {
                this._formatted = time;
                return this._formatted;
            }
            var tc = this._tryCase;
            var f = { result: this._format };
            // Process time first, since mm conflicts with m for month
            // Hours
            tc(f, 'g', (hours === '12' ? 12 : parseInt(hours, 10) % 12).toString()); // 12 hr format, no leading
            tc(f, 'G', parseInt(hours, 10).toString()); // 24 hour format, no leading
            tc(f, ['hh', 'h'], (hours === '12' ? 12 : parseInt(hours, 10) % 12)
                .toString()
                .padStart(2, '0')); // 12 hr format, leading 0s
            tc(f, ['HH', 'H'], hours); // 24 hour format, leading 0s
            // Minutes
            tc(f, ['i', 'mm'], minutes); // minutes with leading 0s
            // Micro-seconds
            tc(f, ['sss', 'u', 'v'], this._date
                .valueOf()
                .toString()
                .slice(-3));
            // Seconds
            tc(f, ['ss', 's'], seconds); // seconds with leading 0s
            // Year
            tc(f, ['YYYY', 'yyyy'], year); // YYYY -> 2020
            tc(f, ['YYY', 'yyy'], Number(year).toString()); // 0890 -> 890
            tc(f, ['YY', 'y'], year.slice(2)); // 2020 -> 20
            tc(f, 'Y', year); // Y -> YYYY -> 2020
            // Month
            tc(f, ['MM', 'm'], translations_1.MONTH_TRANSLATION[month].number); // MM -> 01
            tc(f, 'F', translations_1.MONTH_TRANSLATION[month].full); // F -> January
            tc(f, 'M', month); // M -> Jan
            tc(f, 'n', Number(month).toString()); // n
            // Date
            tc(f, ['DD', 'dd', 'd'], date); // DD -> 03
            tc(f, 'j', Number(date).toString()); // j -> 3
            if (f.result.indexOf('t') > -1) {
                // Days of month
                var lastDay = new Date(this._date.getYear(), this._date.getMonth(), 0);
                tc(f, 't', lastDay.getDate().toString());
            }
            // Special
            tc(f, 'U', this._date.valueOf().toString()); // Unix time since epoch
            if (f.result.indexOf('B') > -1) {
                // Swatch Internet time
                tc(f, 'B', Math.floor(((((this._date.getUTCHours() + 1) % 24) +
                    this._date.getUTCMinutes() / 60 +
                    this._date.getUTCSeconds() / 3600) *
                    1000) /
                    24).toString());
            }
            if (f.result.indexOf('L') > -1) {
                // Prints 1 if leap year, 0 if not
                var nYear = parseInt(year, 10);
                tc(f, 'L', Number((nYear % 4 === 0 && nYear % 100 !== 0) ||
                    nYear % 400 === 0).toString());
            }
            if (f.result.indexOf('O') > -1) {
                // GMT+0300 -> + 0300
                f.result = f.result.replace(/O/g, timezone.substring(3));
            }
            if (f.result.indexOf('P') > -1) {
                // GMT+0300 -> +03:00
                f.result = f.result.replace(/P/g, timezone.substring(3, 6) + ":" + timezone.substring(6));
            }
            tc(f, 'D', day); // D -> Mon
            tc(f, 'w', translations_1.WEEKDAY_TRANSLATION[day].number); // w -> Sunday -> 0
            if (f.result.indexOf('W') > -1) {
                tc(f, 'W', this._getWeekNumber().toString()); // Week number of year
            }
            tc(f, 'N', translations_1.WEEKDAY_TRANSLATION[day].numberAlt); // N -> Monday -> 1, Sunday -> 7
            if (f.result.indexOf('S') > -1) {
                var suffix = this._getSuffix(date);
                f.result = f.result.replace(/S/g, suffix);
            }
            var tzIdentifier = timezone.slice(0, 3);
            if (f.result.indexOf('e') > -1) {
                // Timezone identifier
                f.result = f.result.replace(/e/g, tzIdentifier);
                //// Intl.DateTimeFormat().resolvedOptions().timeZone,
            }
            if (f.result.indexOf('T') > -1) {
                // Timezone abbreviation, eg: CST, EST.
                // Replace tzIdentifier with lowercase so we dont have a conflict
                f.result = f.result.replace(new RegExp(tzIdentifier, 'g'), tzIdentifier.toLowerCase());
                f.result = f.result.replace(/T/g, tzString
                    .replace(/\(|\)/g, '')
                    .split(' ')
                    .map(function (w) { return w.charAt(0); })
                    .join(''));
                f.result = f.result.replace(new RegExp(tzIdentifier.toLowerCase(), 'g'), tzIdentifier);
            }
            // Save replacements that may conflict for last
            tc(f, 'A', parseInt(hours, 10) >= 12 ? 'PM' : 'AM');
            tc(f, 'a', parseInt(hours, 10) >= 12 ? 'pm' : 'am');
            tc(f, 'l', translations_1.WEEKDAY_TRANSLATION[day].full); // l -> Monday
            this._formatted = f.result;
            return this._formatted;
        }
        return this._d;
    };
    MoxyDate.prototype.timestamp = function () {
        return this._d.valueOf();
    };
    MoxyDate.prototype.valueOf = function () {
        return this._formatted;
    };
    MoxyDate.prototype._getSuffix = function (date) {
        var suffix = 'th';
        if (date.slice(-1) === '1') {
            suffix = 'st';
        }
        else if (date.slice(-1) === '2') {
            suffix = 'nd';
        }
        else if (date.slice(-1) === '3') {
            suffix = 'rd';
        }
        return suffix;
    };
    MoxyDate.prototype._getWeekNumber = function () {
        // Copy date so don't modify original
        var d = new Date(this._date);
        // Set to nearest Thursday: current date + 4 - current day number,
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).valueOf();
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(((d.valueOf() - yearStart) / 86400000 + 1) / 7);
        return weekNo;
    };
    MoxyDate.prototype._tryCase = function (fObject, dCase, replaceWith) {
        if (dCase instanceof Array) {
            var ret = false;
            for (var _i = 0, dCase_1 = dCase; _i < dCase_1.length; _i++) {
                var cCase = dCase_1[_i];
                if (fObject.result.indexOf(cCase) > -1) {
                    fObject.result = fObject.result.replace(new RegExp(cCase, 'g'), replaceWith);
                    ret = true;
                }
            }
            return ret;
        }
        else {
            if (fObject.result.indexOf(dCase) > -1) {
                fObject.result = fObject.result.replace(new RegExp(dCase, 'g'), replaceWith);
                return true;
            }
        }
        return false;
    };
    return MoxyDate;
}());
exports.MoxyDate = MoxyDate;
module.exports = MoxyDate;
