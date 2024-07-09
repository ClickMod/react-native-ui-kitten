"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerStatusShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useDatepickerState = (initialDate = null) => {
    const [date, setDate] = react_1.default.useState(initialDate);
    return { date, onSelect: setDate };
};
const DatepickerStatusShowcase = () => {
    const primaryDatepickerState = useDatepickerState();
    const successDatepickerState = useDatepickerState();
    const infoDatepickerState = useDatepickerState();
    const warningDatepickerState = useDatepickerState();
    const dangerDatepickerState = useDatepickerState();
    const basicDatepickerState = useDatepickerState();
    return (<components_1.Layout style={styles.container} level='1'>

      <react_native_1.View style={styles.rowContainer}>

        <components_1.Datepicker style={styles.picker} status='primary' placeholder='Primary' {...primaryDatepickerState}/>

        <components_1.Datepicker style={styles.picker} status='success' placeholder='Success' {...successDatepickerState}/>

      </react_native_1.View>

      <react_native_1.View style={styles.rowContainer}>

        <components_1.Datepicker style={styles.picker} status='info' placeholder='Info' {...infoDatepickerState}/>

        <components_1.Datepicker style={styles.picker} status='warning' placeholder='Warning' {...warningDatepickerState}/>

      </react_native_1.View>

      <react_native_1.View style={styles.rowContainer}>

        <components_1.Datepicker style={styles.picker} status='danger' placeholder='Danger' {...dangerDatepickerState}/>

        <components_1.Datepicker style={styles.picker} status='basic' placeholder='Basic' {...basicDatepickerState}/>

      </react_native_1.View>

    </components_1.Layout>);
};
exports.DatepickerStatusShowcase = DatepickerStatusShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 420,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        flex: 1,
        margin: 2,
    },
});
//# sourceMappingURL=datepickerStatus.component.js.map