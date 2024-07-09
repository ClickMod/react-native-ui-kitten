"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputStatesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const InputStatesShowcase = () => {
    const [value, setValue] = react_1.default.useState('');
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Input style={styles.input} value={value} placeholder='Active' onChangeText={nextValue => setValue(nextValue)}/>

      <components_1.Input style={styles.input} disabled={true} placeholder='Disabled'/>

    </components_1.Layout>);
};
exports.InputStatesShowcase = InputStatesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        margin: 2,
    },
});
//# sourceMappingURL=inputStates.component.js.map