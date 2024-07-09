"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxStatesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const CheckboxStatesShowcase = () => {
    const [activeChecked, setActiveChecked] = react_1.default.useState(false);
    const [indeterminateChecked, setIndeterminateChecked] = react_1.default.useState(false);
    const [indeterminate, setIndeterminate] = react_1.default.useState(true);
    const onIndeterminateChange = (isChecked, isIndeterminate) => {
        setIndeterminateChecked(isChecked);
        setIndeterminate(isIndeterminate);
    };
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.CheckBox style={styles.checkbox} checked={activeChecked} onChange={nextChecked => setActiveChecked(nextChecked)}>
        Active
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} checked={indeterminateChecked} indeterminate={indeterminate} onChange={onIndeterminateChange}>
        Indeterminate
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} disabled={true}>
        Disabled
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} disabled={true} checked={true}>
        Checked Disabled
      </components_1.CheckBox>

    </components_1.Layout>);
};
exports.CheckboxStatesShowcase = CheckboxStatesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    checkbox: {
        margin: 2,
    },
});
//# sourceMappingURL=checkboxStates.component.js.map