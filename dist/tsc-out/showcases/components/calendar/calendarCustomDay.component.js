"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarCustomDayShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const DayCell = ({ date }, style) => (<react_native_1.View style={[styles.dayContainer, style.container]}>
    <components_1.Text style={style.text}>
      {`${date.getDate()}`}
    </components_1.Text>
    <components_1.Text style={[style.text, styles.value]}>
      {`${100 * date.getDate() + Math.pow(date.getDate(), 2)}$`}
    </components_1.Text>
  </react_native_1.View>);
const CalendarCustomDayShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<components_1.Calendar date={date} onSelect={nextDate => setDate(nextDate)} renderDay={DayCell}/>);
};
exports.CalendarCustomDayShowcase = CalendarCustomDayShowcase;
const styles = react_native_1.StyleSheet.create({
    dayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
    },
    value: {
        fontSize: 12,
        fontWeight: '400',
    },
});
//# sourceMappingURL=calendarCustomDay.component.js.map