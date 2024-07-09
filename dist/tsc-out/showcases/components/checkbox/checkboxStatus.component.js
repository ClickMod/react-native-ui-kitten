"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxStatusShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useCheckboxState = (initialCheck = false) => {
    const [checked, setChecked] = react_1.default.useState(initialCheck);
    return { checked, onChange: setChecked };
};
const CheckboxStatusShowcase = () => {
    const primaryCheckboxState = useCheckboxState();
    const successCheckboxState = useCheckboxState();
    const infoCheckboxState = useCheckboxState();
    const warningCheckboxState = useCheckboxState();
    const dangerCheckboxState = useCheckboxState();
    const basicCheckboxState = useCheckboxState();
    const controlCheckboxState = useCheckboxState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.CheckBox style={styles.checkbox} status='primary' {...primaryCheckboxState}>
        Primary
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} status='success' {...successCheckboxState}>
        Success
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} status='info' {...infoCheckboxState}>
        Info
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} status='warning' {...warningCheckboxState}>
        Warning
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} status='danger' {...dangerCheckboxState}>
        Danger
      </components_1.CheckBox>

      <components_1.CheckBox style={styles.checkbox} status='basic' {...basicCheckboxState}>
        Basic
      </components_1.CheckBox>

      <react_native_1.View style={styles.controlContainer}>
        <components_1.CheckBox style={styles.checkbox} status='control' {...controlCheckboxState}>
          Control
        </components_1.CheckBox>
      </react_native_1.View>

    </components_1.Layout>);
};
exports.CheckboxStatusShowcase = CheckboxStatusShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    checkbox: {
        margin: 2,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=checkboxStatus.component.js.map