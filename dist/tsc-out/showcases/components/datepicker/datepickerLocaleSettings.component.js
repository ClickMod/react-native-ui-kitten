"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerLocaleSettingsShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useDatepickerState = (initialDate = null) => {
    const [date, setDate] = react_1.default.useState(initialDate);
    return { date, onSelect: setDate };
};
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
const formatDateService = new components_1.NativeDateService('en', { format: 'DD.MM.YYYY' });
const DatepickerLocaleSettingsShowcase = () => {
    const dateFormatPickerState = useDatepickerState();
    const localePickerState = useDatepickerState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Datepicker style={styles.picker} placeholder='Date Format' dateService={formatDateService} {...dateFormatPickerState}/>

      <components_1.Datepicker style={styles.picker} placeholder='Locale' dateService={localeDateService} {...localePickerState}/>

    </components_1.Layout>);
};
exports.DatepickerLocaleSettingsShowcase = DatepickerLocaleSettingsShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: 360,
    },
    picker: {
        flex: 1,
        marginHorizontal: 2,
    },
});
//# sourceMappingURL=datepickerLocaleSettings.component.js.map