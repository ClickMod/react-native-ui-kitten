"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleStatusShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useToggleState = (initialState = false) => {
    const [checked, setChecked] = react_1.default.useState(initialState);
    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };
    return { checked, onChange: onCheckedChange };
};
const ToggleStatusShowcase = () => {
    const primaryToggleState = useToggleState();
    const successToggleState = useToggleState();
    const infoToggleState = useToggleState();
    const warningToggleState = useToggleState();
    const dangerToggleState = useToggleState();
    const basicToggleState = useToggleState();
    const controlToggleState = useToggleState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Toggle style={styles.toggle} status='primary' {...primaryToggleState}>
        Primary
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} status='success' {...successToggleState}>
        Success
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} status='info' {...infoToggleState}>
        Info
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} status='warning' {...warningToggleState}>
        Warning
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} status='danger' {...dangerToggleState}>
        Danger
      </components_1.Toggle>

      <components_1.Toggle style={styles.toggle} status='basic' {...basicToggleState}>
        Basic
      </components_1.Toggle>

      <react_native_1.View style={styles.controlContainer}>
        <components_1.Toggle style={styles.toggle} status='control' {...controlToggleState}>
          Control
        </components_1.Toggle>
      </react_native_1.View>

    </components_1.Layout>);
};
exports.ToggleStatusShowcase = ToggleStatusShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    toggle: {
        margin: 2,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 8,
        padding: 6,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=toggleStatus.component.js.map