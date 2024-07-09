"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatepickerThemingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const DatepickerThemingShowcase = () => {
    const [date, setDate] = react_1.default.useState(new Date());
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Text category='h6'>
        {`Selected date: ${date.toLocaleDateString()}`}
      </components_1.Text>

      <components_1.Datepicker date={date} onSelect={nextDate => setDate(nextDate)}/>

    </components_1.Layout>);
};
exports.DatepickerThemingShowcase = DatepickerThemingShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 376,
    },
});
//# sourceMappingURL=datepickerTheming.component.js.map