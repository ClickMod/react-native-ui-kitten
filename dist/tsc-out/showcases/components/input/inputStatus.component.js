"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputStatusShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useInputState = (initialValue = '') => {
    const [value, setValue] = react_1.default.useState(initialValue);
    return { value, onChangeText: setValue };
};
const InputStatusShowcase = () => {
    const primaryInputState = useInputState();
    const successInputState = useInputState();
    const infoInputState = useInputState();
    const warningInputState = useInputState();
    const dangerInputState = useInputState();
    const basicInputState = useInputState();
    const controlInputState = useInputState();
    return (<>

      <components_1.Input style={styles.input} status='primary' placeholder='Primary' {...primaryInputState}/>

      <components_1.Layout style={styles.rowContainer} level='1'>
        <components_1.Input style={styles.input} status='success' placeholder='Success' {...successInputState}/>
        <components_1.Input style={styles.input} status='info' placeholder='Info' {...infoInputState}/>
      </components_1.Layout>

      <components_1.Layout style={styles.rowContainer} level='1'>
        <components_1.Input style={styles.input} status='warning' placeholder='Warning' {...warningInputState}/>

        <components_1.Input style={styles.input} status='danger' placeholder='Danger' {...dangerInputState}/>
      </components_1.Layout>

      <components_1.Layout style={styles.rowContainer} level='1'>
        <components_1.Input style={styles.input} status='basic' placeholder='Basic' {...basicInputState}/>

        <react_native_1.View style={styles.controlContainer}>
          <components_1.Input style={styles.input} status='control' placeholder='Control' {...controlInputState}/>
        </react_native_1.View>
      </components_1.Layout>

    </>);
};
exports.InputStatusShowcase = InputStatusShowcase;
const styles = react_native_1.StyleSheet.create({
    input: {
        flex: 1,
        margin: 2,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
});
//# sourceMappingURL=inputStatus.component.js.map