"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerFiltersShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useDatepickerState = (initialDate = null) => {
    const [date, setDate] = react_1.default.useState(initialDate);
    return { date, onSelect: setDate };
};
const filter = (date) => date.getDay() !== 0 && date.getDay() !== 6;
const now = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const DatepickerFiltersShowcase = () => {
    const minMaxPickerState = useDatepickerState();
    const filterPickerState = useDatepickerState();
    const boundingPickerState = useDatepickerState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Datepicker placeholder='Min / Max' min={yesterday} max={tomorrow} {...minMaxPickerState}/>

      <react_native_1.View style={styles.rowContainer}>

        <components_1.Datepicker style={styles.picker} placeholder='Date Filter' filter={filter} {...filterPickerState}/>

        <components_1.Datepicker style={styles.picker} placeholder='Bounding Month' boundingMonth={false} {...boundingPickerState}/>

      </react_native_1.View>

    </components_1.Layout>);
};
exports.DatepickerFiltersShowcase = DatepickerFiltersShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 360,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    picker: {
        flex: 1,
        margin: 2,
    },
});
//# sourceMappingURL=datepickerFilters.component.js.map