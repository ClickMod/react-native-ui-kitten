"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioStatusShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useRadioState = (initialCheck = false) => {
    const [checked, setChecked] = react_1.default.useState(initialCheck);
    return { checked, onChange: setChecked };
};
const RadioStatusShowcase = () => {
    const primaryRadioState = useRadioState();
    const successRadioState = useRadioState();
    const infoRadioState = useRadioState();
    const warningRadioState = useRadioState();
    const dangerRadioState = useRadioState();
    const basicRadioState = useRadioState();
    const controlRadioState = useRadioState();
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Radio style={styles.radio} status='primary' {...primaryRadioState}>
        Primary
      </components_1.Radio>

      <components_1.Radio style={styles.radio} status='success' {...successRadioState}>
        Success
      </components_1.Radio>

      <components_1.Radio style={styles.radio} status='info' {...infoRadioState}>
        Info
      </components_1.Radio>

      <components_1.Radio style={styles.radio} status='warning' {...warningRadioState}>
        Warning
      </components_1.Radio>

      <components_1.Radio style={styles.radio} status='danger' {...dangerRadioState}>
        Danger
      </components_1.Radio>

      <components_1.Radio style={styles.radio} status='basic' {...basicRadioState}>
        Basic
      </components_1.Radio>

      <react_native_1.View style={styles.controlContainer}>
        <components_1.Radio style={styles.radio} status='control' {...controlRadioState}>
          Control
        </components_1.Radio>
      </react_native_1.View>

    </components_1.Layout>);
};
exports.RadioStatusShowcase = RadioStatusShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    radio: {
        margin: 2,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=radioStatus.component.js.map