"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarFiltersShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useCalendarState = (initialState = null) => {
    const [date, setDate] = react_1.default.useState(initialState);
    return { date, onSelect: setDate };
};
const filter = (date) => date.getDay() !== 0 && date.getDay() !== 6;
const now = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const CalendarFiltersShowcase = () => {
    const minMaxCalendarState = useCalendarState();
    const filterCalendarState = useCalendarState();
    const boundingCalendarState = useCalendarState();
    return (<components_1.Layout style={styles.container} level='1'>

      <react_native_1.View style={styles.calendarContainer}>
        <components_1.Text style={styles.text} category='h6'>
          Min / Max
        </components_1.Text>

        <components_1.Calendar min={yesterday} max={tomorrow} {...minMaxCalendarState}/>
      </react_native_1.View>

      <react_native_1.View style={styles.calendarContainer}>
        <components_1.Text style={styles.text} category='h6'>
          Filter
        </components_1.Text>

        <components_1.Calendar filter={filter} {...filterCalendarState}/>
      </react_native_1.View>

      <react_native_1.View style={styles.calendarContainer}>
        <components_1.Text style={styles.text} category='h6'>
          Bounding Month
        </components_1.Text>

        <components_1.Calendar boundingMonth={false} {...boundingCalendarState}/>
      </react_native_1.View>

    </components_1.Layout>);
};
exports.CalendarFiltersShowcase = CalendarFiltersShowcase;
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
//# sourceMappingURL=calendarFilters.component.js.map