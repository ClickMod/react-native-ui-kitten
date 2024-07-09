"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerSizeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useDatepickerState = (initialDate = null) => {
    const [date, setDate] = react_1.default.useState(initialDate);
    return { date, onSelect: setDate };
};
const DatepickerSizeShowcase = () => {
    const smallDatepickerState = useDatepickerState();
    const mediumDatepickerState = useDatepickerState();
    const largeDatepickerState = useDatepickerState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Datepicker style={styles.datepicker} size='small' placeholder='Small' {...smallDatepickerState}/>

      <components_1.Datepicker style={styles.datepicker} size='medium' placeholder='Medium' {...mediumDatepickerState}/>

      <components_1.Datepicker style={styles.datepicker} size='large' placeholder='Large' {...largeDatepickerState}/>

    </components_1.Layout>);
};
exports.DatepickerSizeShowcase = DatepickerSizeShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 420,
    },
    datepicker: {
        marginVertical: 2,
    },
});
//# sourceMappingURL=datepickerSize.component.js.map