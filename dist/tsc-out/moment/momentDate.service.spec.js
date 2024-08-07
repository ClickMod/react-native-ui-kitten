"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const momentDate_service_1 = require("./momentDate.service");
const moment_1 = __importDefault(require("moment"));
describe('@moment-date: service checks', () => {
    let dateService;
    beforeEach(() => {
        dateService = new momentDate_service_1.MomentDateService('en');
    });
    it('* should validate as correct if date string is valid according to the format', () => {
        const isValid = dateService.isValidDateString('04.23.2018', 'MM.DD.YYYY');
        expect(isValid).toBeTruthy();
    });
    it('* should validate as incorrect if date string is invalid according to the format', () => {
        const isValid = dateService.isValidDateString('23.04.2018', 'MM.DD.YYYY');
        expect(isValid).toBeFalsy();
    });
    it('* should validate as incorrect if date string is completely incorrect', () => {
        const isValid = dateService.isValidDateString('hello, it is a date string', 'MM.DD.YYYY');
        expect(isValid).toBeFalsy();
    });
    it('* should create today date', () => {
        const today = dateService.today();
        expect(dateService.isSameDay(today, (0, moment_1.default)())).toBeTruthy();
    });
    it('* should get date', () => {
        const date = (0, moment_1.default)().year(2018).month(5).date(15);
        expect(dateService.getDate(date)).toBe(15);
    });
    it('* should get month', () => {
        const month = (0, moment_1.default)().year(2018).month(5).date(15);
        expect(dateService.getMonth(month)).toBe(5);
    });
    it('* should get year', () => {
        const year = (0, moment_1.default)().year(2018).month(5).date(15);
        expect(dateService.getYear(year)).toBe(2018);
    });
    it('* should get day of week', () => {
        const date = (0, moment_1.default)().year(2018).month(8).date(17);
        expect(dateService.getDayOfWeek(date)).toBe(1);
    });
    it('* should get first day of week', () => {
        expect(dateService.getFirstDayOfWeek()).toBe(0);
    });
    it('* should get month name', () => {
        const month = (0, moment_1.default)().year(2018).month(5).date(15);
        expect(dateService.getMonthName(month)).toBe('Jun');
    });
    it('* should get month name by index', () => {
        expect(dateService.getMonthNameByIndex(5)).toBe('Jun');
    });
    it('* should get day of week names', () => {
        expect(dateService.getDayOfWeekNames()).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    });
    it('* should format date according to the MM.DD.YYYY format', () => {
        const date = (0, moment_1.default)().year(2018).month(5).date(15);
        expect(dateService.format(date, 'MM.DD.YYYY')).toBe('06.15.2018');
    });
    it('* should parse date according to the MM.DD.YYYY format', () => {
        const date = '06.15.2018';
        const parsed = dateService.parse(date, 'MM.DD.YYYY');
        expect(parsed.year()).toEqual(2018);
        expect(parsed.month()).toEqual(5);
        expect(parsed.date()).toEqual(15);
    });
    it('* should parse date according to the DD.MM.YYYY format', () => {
        const date = '15.06.2018';
        const parsed = dateService.parse(date, 'DD.MM.YYYY');
        expect(parsed.year()).toEqual(2018);
        expect(parsed.month()).toEqual(5);
        expect(parsed.date()).toEqual(15);
    });
    it('* should not format if date isn\'t passed', () => {
        expect(() => dateService.format(undefined, 'DD.MM.YYYY')).not.toThrow();
        expect(dateService.format(undefined, 'DD.MM.YYYY')).toEqual('');
    });
    it('* should get year end', () => {
        const date = (0, moment_1.default)().year(2018).month(5).date(15);
        const yearEnd = dateService.getYearEnd(date);
        expect(yearEnd.year()).toEqual(2018);
        expect(yearEnd.month()).toEqual(11);
        expect(yearEnd.date()).toEqual(31);
    });
    it('* should get year start', () => {
        const date = (0, moment_1.default)().year(2018).month(5).date(15);
        const yearEnd = dateService.getYearStart(date);
        expect(yearEnd.year()).toEqual(2018);
        expect(yearEnd.month()).toEqual(0);
        expect(yearEnd.date()).toEqual(1);
    });
    it('* should get number of days in month', () => {
        expect(dateService.getNumberOfDaysInMonth((0, moment_1.default)().year(2018).month(1).date(10))).toBe(28);
        expect(dateService.getNumberOfDaysInMonth((0, moment_1.default)().year(2018).month(0).date(10))).toBe(31);
    });
    it('* should get number of days in month in leap year', () => {
        expect(dateService.getNumberOfDaysInMonth((0, moment_1.default)().year(2016).month(1).date(10))).toBe(29);
    });
    it('* should add day', () => {
        const newDate = dateService.addDay((0, moment_1.default)().year(2018).month(6).date(16), 1);
        expect(newDate.year()).toEqual(2018);
        expect(newDate.month()).toEqual(6);
        expect(newDate.date()).toEqual(17);
    });
    it('* should add day in the end of the year', () => {
        const newDate = dateService.addDay((0, moment_1.default)().year(2018).month(11).date(31), 1);
        expect(newDate.year()).toEqual(2019);
        expect(newDate.month()).toEqual(0);
        expect(newDate.date()).toEqual(1);
    });
    it('* should add day in the leap year', () => {
        const newDate = dateService.addDay((0, moment_1.default)().year(2016).month(1).date(29), 1);
        expect(newDate.year()).toEqual(2016);
        expect(newDate.month()).toEqual(2);
        expect(newDate.date()).toEqual(1);
    });
    it('* should add month', () => {
        const newDate = dateService.addMonth((0, moment_1.default)().year(2018).month(6).date(16), 1);
        expect(newDate.year()).toEqual(2018);
        expect(newDate.month()).toEqual(7);
        expect(newDate.date()).toEqual(16);
    });
    it('* should add month in the end of the year', () => {
        const newDate = dateService.addMonth((0, moment_1.default)().year(2018).month(11).date(16), 1);
        expect(newDate.year()).toEqual(2019);
        expect(newDate.month()).toEqual(0);
        expect(newDate.date()).toEqual(16);
    });
    it('* should add year', () => {
        const newDate = dateService.addYear((0, moment_1.default)().year(2018).month(11).date(16), 1);
        expect(newDate.year()).toEqual(2019);
        expect(newDate.month()).toEqual(11);
        expect(newDate.date()).toEqual(16);
    });
    it('* should create date', () => {
        const date = dateService.createDate(2018, 6, 16);
        expect(date.year()).toEqual(2018);
        expect(date.month()).toEqual(6);
        expect(date.date()).toEqual(16);
    });
    it('* should create date for two digit year', () => {
        const date = dateService.createDate(12, 6, 16);
        expect(dateService.getYear(date)).toBe(12);
        expect(dateService.getMonth(date)).toBe(6);
        expect(dateService.getDate(date)).toBe(16);
    });
    it('* should clone', () => {
        const date = (0, moment_1.default)().year(2018).month(6).date(16);
        expect(dateService.clone(date)).toEqual(date);
    });
    it('* should get month start', () => {
        const date = dateService.getMonthStart((0, moment_1.default)().year(2018).month(6).date(16));
        expect(date.year()).toEqual(2018);
        expect(date.month()).toEqual(6);
        expect(date.date()).toEqual(1);
    });
    it('* should compare years correctly', () => {
        expect(dateService.isSameYear((0, moment_1.default)().year(2018).month(0), (0, moment_1.default)().year(2018).month(6))).toBeTruthy();
        expect(dateService.isSameYear((0, moment_1.default)().year(2018).month(0), (0, moment_1.default)().year(6123).month(6))).toBeFalsy();
    });
    it('* should compare months correctly', () => {
        expect(dateService.isSameMonth((0, moment_1.default)().year(2018).month(6), (0, moment_1.default)().year(2018).month(6))).toBeTruthy();
        expect(dateService.isSameMonth((0, moment_1.default)().year(2018).month(0), (0, moment_1.default)().year(2018).month(6))).toBeFalsy();
    });
    it('* should compare days correctly', () => {
        expect(dateService.isSameMonth((0, moment_1.default)().year(2018).month(6).date(16), (0, moment_1.default)().year(2018).month(6).date(16))).toBeTruthy();
        expect(dateService.isSameMonth((0, moment_1.default)().year(2018).month(7).date(16), (0, moment_1.default)().year(2018).month(6).date(16))).toBeFalsy();
    });
    it('* should compare dates correctly', () => {
        expect(dateService.compareDates((0, moment_1.default)().year(2018).month(6).date(16), (0, moment_1.default)().year(2017).month(2).date(14))).toBeGreaterThan(0);
        expect(dateService.compareDates((0, moment_1.default)().year(2018).month(6).date(16), (0, moment_1.default)().year(2019).month(2).date(14))).toBeLessThan(0);
        expect(dateService.compareDates((0, moment_1.default)().year(2018).month(6).date(16), (0, moment_1.default)().year(2018).month(6).date(16))).toBe(0);
    });
});
//# sourceMappingURL=momentDate.service.spec.js.map