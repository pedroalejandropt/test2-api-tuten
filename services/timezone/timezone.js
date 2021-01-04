const express = require('express');
const Time = require('../../models/time');

const getUTC = async (req, res, next) => {
    try {

        const {
            time,
            timezone
        } = req.body;

        if (time === undefined || time === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'Time is required',
                'field': 'time'
            });
        }

        if (timezone === undefined || timezone === '') {
            return res.status(422).json({
                'code': 'REQUIRED_FIELD_MISSING',
                'description': 'Time Zone is required',
                'field': 'timezone'
            });
        }

        var [hour, minutes, seconds] = time.split(':');
        var [first, second] = (timezone.includes('.')) ? timezone.split('.') : [timezone, 0];

        var [responseHour, responseMinutes] = 
        (timezone.includes('.')) ? 
        (eval(`0.${second} * 60 + ${minutes}`) >= 60) ?
        (eval(`-1*${first}+${hour}+1`) > 24) ?
        [eval(`-1*${first}+${hour}+1 - 24`), eval(`0.${second} * 60 + ${minutes}-60`)] :
        [eval(`-1*${first}+${hour}+1`), eval(`0.${second} * 60 + ${minutes}-60`)] :
        (eval(`-1*${first}+${hour}`) > 24) ?
        [eval(`-1*${first}+${hour}-24`), eval(`0.${second} * 60 + ${minutes}`)] : 
        [eval(`-1*${first}+${hour}`), eval(`0.${second} * 60 + ${minutes}`)] : 
        (eval(`-1*${first}+${hour}`) > 24) ?
        [eval(`-1*${first}+${hour}-24`), minutes] :
        [eval(`-1*${first}+${hour}`), minutes]

        return res.status(200).json({
            'message': 'Successfully',
            'response': {
                'time': `${responseHour}:${responseMinutes}:${seconds}`,
                'timezone': 'utc'
            }
        });

    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'Something went wrong, Please try again'
        });
    }
}

module.exports = {
    getUTC: getUTC
}