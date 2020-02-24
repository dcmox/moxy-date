"use strict";
exports.__esModule = true;
var MSG_INVALID_DATE = 'Date is not valid!';
// tslint:disable: object-literal-sort-keys
// tslint:disable: indent
var NumberMap = {
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    fourty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    'one-hundred': 100,
    'two-hundred': 200,
    'three-hundred': 300,
    'four-hundred': 400,
    'five-hundred': 500,
    'six-hundred': 600,
    'seven-hundred': 700,
    'eight-hundred': 800,
    'nine-hundred': 900,
    'one-thousand': 1000,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10
};
var DayMap = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
};
var MonthMap = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
};
exports.parseDate = function (s, d) {
    var newDate = new Date(d);
    s = s
        .replace(/a |the /g, '1 ')
        .replace(/after/, 'from')
        .replace(/\+/, '')
        .toLowerCase()
        .trim();
    if (s === 'yesterday') {
        newDate.setDate(newDate.getDate() - 1);
        return newDate;
    }
    else if (s === 'tomorrow') {
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
    }
    else if (s === 'after tomorrow') {
        newDate.setDate(newDate.getDate() + 2);
        return newDate;
    }
    else if (s === 'next week') {
        newDate.setDate(newDate.getDate() + 7);
        return newDate;
    }
    else if (s === 'last week') {
        newDate.setDate(newDate.getDate() - 7);
        return newDate;
    }
    else if (s === 'last year') {
        newDate.setFullYear(newDate.getFullYear() - 1);
        return newDate;
    }
    else if (s === 'next year') {
        newDate.setFullYear(newDate.getFullYear() + 1);
        return newDate;
    }
    else if (s === 'next month') {
        newDate.setMonth(newDate.getMonth() + 1);
        return newDate;
    }
    else if (s === 'last month') {
        newDate.setMonth(newDate.getMonth() - 1);
        return newDate;
    }
    else if (s.indexOf('next') > -1) {
        var interval = s.split('next')[1].trim();
        if (MonthMap[interval] !== undefined) {
            if (newDate.getMonth() >= MonthMap[interval]) {
                newDate.setFullYear(newDate.getFullYear() + 1);
            }
            newDate.setMonth(MonthMap[interval]);
            return newDate;
        }
        else {
            newDate.setDate(newDate.getDate() - newDate.getDay() + 7 + DayMap[interval]);
        }
        return newDate;
    }
    else if (s.indexOf('this') > -1) {
        var interval = s.split('this')[1].trim();
        newDate.setDate(newDate.getDate() - newDate.getDay() + DayMap[interval]);
        return newDate;
    }
    else if (s.indexOf('last') > -1) {
        var interval = s.split('last')[1].trim();
        if (MonthMap[interval] !== undefined) {
            if (MonthMap[interval] >= newDate.getMonth()) {
                newDate.setFullYear(newDate.getFullYear() - 1);
            }
            newDate.setMonth(MonthMap[interval]);
            return newDate;
        }
        else {
            newDate.setDate(newDate.getDate() - newDate.getDay() - 8 + DayMap[interval]);
        }
        return newDate;
    }
    // ? Support of conditions, eg. Jan of next year, Jan of last year
    var isPast = false;
    if (s.indexOf('ago') > -1) {
        isPast = true;
        s = s.replace('ago', 'from now');
    }
    else if (s.indexOf('before') > -1) {
        isPast = true;
        s = s.replace('before', 'from');
    }
    else if (s.indexOf('from now') === -1) {
        s += ' from now';
    }
    if (s.charAt(0) === '-') {
        isPast = true;
    }
    if (s.indexOf('from') > -1) {
        var _a = s.split('from').map(function (pt) { return pt.trim(); }), timePeriod = _a[0], timeStart = _a[1];
        var periods = timePeriod.split(' ');
        var period = periods.pop();
        var interval = periods
            .join('-')
            .replace(new RegExp(Object.keys(NumberMap).join('|'), 'g'), function (match) { return NumberMap[match]; })
            .replace(/000|00|0\-/g, '')
            .replace(/\-/g, '');
        if (!interval || !period) {
            throw new Error(MSG_INVALID_DATE);
        }
        if (isPast) {
            interval = -parseInt(interval, 10);
        }
        else {
            interval = parseInt(interval, 10);
        }
        if (timeStart === 'yesterday') {
            newDate.setDate(d.getDate() - 1);
        }
        if (timeStart === 'tomorrow') {
            newDate.setDate(d.getDate() + 1);
        }
        if (timeStart === 'next week') {
            newDate.setDate(d.getDate() + 7);
        }
        if (period === 'day' || period === 'days') {
            newDate.setDate(newDate.getDate() + interval);
        }
        else if (['months', 'month'].indexOf(period) > -1) {
            newDate.setMonth(newDate.getMonth() + interval);
        }
        else if (['years', 'year', 'yrs', 'yr'].indexOf(period) > -1) {
            newDate.setFullYear(newDate.getFullYear() + interval);
        }
        else if (['seconds', 'second', 'secs', 'sec'].indexOf(period) > -1) {
            newDate.setSeconds(newDate.getSeconds() + interval);
        }
        else if (['minutes', 'minute', 'mins', 'min'].indexOf(period) > -1) {
            newDate.setMinutes(newDate.getMinutes() + interval);
        }
        else if (['hours', 'hour', 'hrs', 'hr'].indexOf(period) > -1) {
            newDate.setHours(newDate.getHours() + interval);
        }
        else if (['milliseconds', 'millisecond', 'ms'].indexOf(period) > -1) {
            newDate.setHours(newDate.getHours() + interval);
        }
    }
    return newDate;
};
