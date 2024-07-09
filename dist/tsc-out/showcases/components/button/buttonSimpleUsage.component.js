"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonSimpleUsageShowcase = () => {
    const [counter, setCounter] = react_1.default.useState(0);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Button onPress={() => setCounter(counter + 1)}>
        BUTTON
      </components_1.Button>

      <components_1.Text style={styles.text}>
        {`Pressed ${counter} times`}
      </components_1.Text>

    </components_1.Layout>);
};
exports.ButtonSimpleUsageShowcase = ButtonSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 8,
    },
});
//# sourceMappingURL=buttonSimpleUsage.component.js.map