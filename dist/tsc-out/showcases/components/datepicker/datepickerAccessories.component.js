"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerAccessoriesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const CalendarIcon = (props) => (<components_1.Icon {...props} name='calendar'/>);
const DatepickerAccessoriesShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Datepicker label='Label' caption='Caption' placeholder='Pick Date' date={date} onSelect={nextDate => setDate(nextDate)} accessoryRight={CalendarIcon}/>

    </components_1.Layout>);
};
exports.DatepickerAccessoriesShowcase = DatepickerAccessoriesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 360,
    },
});
//# sourceMappingURL=datepickerAccessories.component.js.map