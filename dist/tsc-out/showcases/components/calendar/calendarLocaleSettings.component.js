"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarLocaleSettingsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const i18n = {
    dayNames: {
        short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        long: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    },
    monthNames: {
        short: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        long: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],
    },
};
const localeDateService = new components_1.NativeDateService('ru', { i18n, startDayOfWeek: 1 });
const CalendarLocaleSettingsShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<components_1.Calendar dateService={localeDateService} date={date} onSelect={nextDate => setDate(nextDate)}/>);
};
exports.CalendarLocaleSettingsShowcase = CalendarLocaleSettingsShowcase;
//# sourceMappingURL=calendarLocaleSettings.component.js.map