import moment from 'moment'
import { Strings } from './String'
import {
    MINUTE,
    HOUR,
    HOURS,
    DAYS,
    DAY,
    MONTHS,
    DATE_FORMATE,
    TIME_FORMATE,
    DATE_TIME_FORMATE,
} from './Constants'

class DateUtils {

    static getdate(dateObject, format) {
        if (!dateObject)
            return DATE_FORMATE
        const showDate = moment(dateObject).format(format)
        return showDate
    }

    static timeDateFromNow(dateObject) {
        if (!dateObject)
            return ''
        let result = moment().isSame(dateObject, DAY)
            ? moment(dateObject).fromNow()
            : moment(dateObject).format(DATE_TIME_FORMATE);
        return result
    }

    static setTime(hours, minutes) {
        if (!hours || !minutes)
            return TIME_FORMATE
        var time = moment()
            .set(HOUR, hours)
            .set(MINUTE, minutes)
            .format(TIME_FORMATE)
        return time
    }

    static getTime(timeObj, format) {
        if (!timeObj)
            return TIME_FORMATE
        const time = moment(timeObj).format(format)
        return time
    }

    static getMinutes(timeObj) {
        const time = moment(timeObj).minutes()
        return time
    }

    static getHours(timeObj) {
        const time = moment(timeObj).hours()
        return time
    }

    static startAndEndDateCheck(sDate, eDate, minimumBookingTime, maximumBookingHours, resName) {
        if (!sDate)
            return Strings.pleaseAddStartDate
        if (!eDate)
            return Strings.pleaseAddEndDate
        // const monthsDiff = moment(sDate).diff(moment(eDate), MONTHS)
        const monthsDiff = moment(eDate).diff(moment(sDate), DAYS)
        if (minimumBookingTime && monthsDiff < 27)
            return (Strings.PrivateOfficeCanOnlyBeBookedinHours + resName)

        const daysDiff = moment(eDate).diff(moment(sDate), DAYS)
        if (maximumBookingHours === 24 && daysDiff >= 1)
            return (Strings.Minimum24hoursBookingTimeisAllowed + resName)

        return ''
    }

    static addNoOfHours(timeObj, hours) {
        if (!timeObj)
            return null
        const time = moment(timeObj).
            add(hours, HOURS)
        return new Date(time)
    }

    // static getTimeObject(timeObj, hours) {
    //     if (!timeObj)
    //         return null
    //     const time = moment(timeObj).
    //         add(hours, HOURS)
    //     return new Date(time)
    // }

    static startAndEndDateTimeCheck(sTime, eTime, sDate, eDate, opStartTime, opEndTime) {
        if (!sDate)
            return Strings.pleaseAddStartDate
        if (!eDate)
            return Strings.pleaseAddEndDate
        if (!sTime)
            return Strings.PleaseAddStartTime
        if (!eTime)
            return Strings.PleaseAddEndTime

        // const ost = moment(opStartTime, "HH:mm A")
        // const oet = moment(opEndTime, "HH:mm A")

        // ost &&
        // console.log('my time ===> ', opStartTime, opEndTime, moment(sTime).format("HH:mm A"))

        if (sDate?.toDateString() === new Date()?.toDateString() &&
            sTime?.toTimeString() < new Date()?.toTimeString())
            return Strings.YouCannotMakeaBookinginPast
        if (eDate?.toDateString() === new Date()?.toDateString() &&
            eTime?.toTimeString() < new Date()?.toTimeString())
            return Strings.YouCannotMakeaBookinginPast

        if (sTime?.toTimeString() === eTime?.toTimeString())
            return Strings.StartTimeShouldNotbeEqualThanEndTime
        const startTime = moment(sTime)
        const endTime = moment(eTime)
        const check = startTime.isSameOrBefore(endTime)
        if (!check)
            return Strings.StartTimeShouldbeSmallerorEqualThanEndTime
        return ''
    }

    static durationAsString(ms) {
        const maxPrecission = 3
        const duration = moment.duration(ms)

        const items = []
        items.push({ timeUnit: 'd', value: Math.floor(duration.asDays()) })
        items.push({ timeUnit: 'h', value: duration.hours() })
        items.push({ timeUnit: 'm', value: duration.minutes() })
        items.push({ timeUnit: 's', value: duration.seconds() })

        const formattedItems = items.reduce((accumulator, { value, timeUnit }) => {
            if (accumulator.length >= maxPrecission || (accumulator.length === 0 && value === 0)) {
                return accumulator
            }

            accumulator.push(`${value}${timeUnit}`)
            return accumulator
        }, [])

        return formattedItems.length !== 0 ? formattedItems.join(' ') : '-'
    }

    static getCurrentRegion() {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        return timezone
    }

    static findDistanceBetweenTwoLocation(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;

        const res = 12742 * Math.asin(Math.sqrt(a));
        return res.toFixed(2) // 2 * R; R = 6371 km
    }

}

export default DateUtils