"use strict";
exports.__esModule = true;
exports.timeSince = function (d) {
    var time = typeof d === 'string'
        ? new Date(d).valueOf()
        : typeof d === 'object'
            ? d.valueOf()
            : new Date().valueOf();
    var timeTable = [
        [60, 'seconds', 1],
        [120, '1 minute ago', '1 minute from now'],
        [3600, 'minutes', 60],
        [7200, '1 hour ago', '1 hour from now'],
        [86400, 'hours', 3600],
        [172800, 'Yesterday', 'Tomorrow'],
        [604800, 'days', 86400],
        [1209600, 'Last week', 'Next week'],
        [2419200, 'weeks', 604800],
        [4838400, 'Last month', 'Next month'],
        [29030400, 'months', 2419200],
        [58060800, 'Last year', 'Next year'],
        [2903040000, 'years', 29030400],
        [5806080000, 'Last century', 'Next century'],
        [58060800000, 'centuries', 2903040000],
    ];
    var seconds = (new Date().valueOf() - time) / 1000;
    var token = 'ago';
    var idx = 1;
    if (seconds === 0) {
        return 'Just now';
    }
    if (seconds < 0) {
        seconds = -seconds;
        token = 'from now';
        idx = 2;
    }
    for (var _i = 0, timeTable_1 = timeTable; _i < timeTable_1.length; _i++) {
        var format = timeTable_1[_i];
        if (seconds < format[0]) {
            return typeof format[2] === 'string'
                ? format[idx].toString()
                : Math.floor(seconds / format[2]) +
                    ' ' +
                    format[1] +
                    ' ' +
                    token;
        }
    }
    return time.toString();
};
