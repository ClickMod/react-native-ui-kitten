"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const CalendarThemingShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    const [range, setRange] = react_1.default.useState({});
    return (<components_1.Layout style={styles.container} level='1'>

      <react_native_1.View style={styles.calendarContainer}>
        <components_1.Text style={styles.text} category='h6'>
          Date
        </components_1.Text>

        <components_1.Calendar date={date} onSelect={nextDate => setDate(nextDate)}/>
      </react_native_1.View>

      <react_native_1.View style={styles.calendarContainer}>
        <components_1.Text style={styles.text} category='h6'>
          Date Ranges
        </components_1.Text>

        <components_1.RangeCalendar range={range} onSelect={nextRange => setRange(nextRange)}/>
      </react_native_1.View>

    </components_1.Layout>);
};
exports.CalendarThemingShowcase = CalendarThemingShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    calendarContainer: {
        margin: 2,
    },
    text: {
        marginVertical: 8,
    },
});
//# sourceMappingURL=calendarTheming.component.js.map