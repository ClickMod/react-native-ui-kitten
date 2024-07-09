"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerCustomDayShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const DayCell = ({ date }, style) => (<react_native_1.View style={[styles.dayContainer, style.container]}>
    <components_1.Text style={style.text}>
      {date.getDate()}
    </components_1.Text>
    <components_1.Text style={[style.text, styles.value]}>
      {`${100 * date.getDate() + Math.pow(date.getDate(), 2)}$`}
    </components_1.Text>
  </react_native_1.View>);
const DatepickerCustomDayShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Datepicker placeholder='Pick Date' date={date} onSelect={nextDate => setDate(nextDate)} renderDay={DayCell}/>

    </components_1.Layout>);
};
exports.DatepickerCustomDayShowcase = DatepickerCustomDayShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 360,
    },
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
//# sourceMappingURL=datepickerCustomDay.component.js.map