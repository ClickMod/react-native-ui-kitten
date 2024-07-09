"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSizeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const useInputState = (initialValue = '') => {
    const [value, setValue] = react_1.default.useState(initialValue);
    return { value, onChangeText: setValue };
};
const InputSizeShowcase = () => {
    const smallInputState = useInputState();
    const mediumInputState = useInputState();
    const largeInputState = useInputState();
    const multilineInputState = useInputState();
    return (<>

      <components_1.Input style={styles.input} size='small' placeholder='Small' {...smallInputState}/>

      <components_1.Input style={styles.input} size='medium' placeholder='Medium' {...mediumInputState}/>

      <components_1.Input style={styles.input} size='large' placeholder='Large' {...largeInputState}/>

      <components_1.Input multiline={true} textStyle={styles.inputTextStyle} placeholder='Multiline' {...multilineInputState}/>

    </>);
};
exports.InputSizeShowcase = InputSizeShowcase;
const styles = react_native_1.StyleSheet.create({
    input: {
        marginVertical: 2,
    },
    inputTextStyle: {
        minHeight: 64,
    },
});
//# sourceMappingURL=inputSize.component.js.map