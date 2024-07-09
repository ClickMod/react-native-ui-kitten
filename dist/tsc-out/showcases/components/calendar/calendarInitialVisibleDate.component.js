"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarInitialVisibleDateShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const now = new Date();
const date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
const initialVisibleDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate() + 1);
const CalendarInitialVisibleDateShowcase = () => {
    const [selectedDate, setSelectedDate] = react_1.default.useState(date);
    const componentRef = react_1.default.createRef();
    const scrollToSelected = () => {
        if (componentRef.current) {
            componentRef.current.scrollToDate(selectedDate);
        }
    };
    const scrollToToday = () => {
        if (componentRef.current) {
            componentRef.current.scrollToToday();
        }
    };
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Button onPress={scrollToToday}>
        Scroll to Today
      </components_1.Button>
      <components_1.Button onPress={scrollToSelected}>
        Scroll to Selected Date
      </components_1.Button>

      <react_native_1.View style={styles.calendarContainer}>
        <components_1.Text category='h6' style={styles.text}>
          {`Selected date: ${selectedDate.toLocaleDateString()}`}
        </components_1.Text>

        <components_1.Calendar ref={componentRef} date={selectedDate} initialVisibleDate={initialVisibleDate} onSelect={nextDate => setSelectedDate(nextDate)}/>
      </react_native_1.View>

    </components_1.Layout>);
};
exports.CalendarInitialVisibleDateShowcase = CalendarInitialVisibleDateShowcase;
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
//# sourceMappingURL=calendarInitialVisibleDate.component.js.map