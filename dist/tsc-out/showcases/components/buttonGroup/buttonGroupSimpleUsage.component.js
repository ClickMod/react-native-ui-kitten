"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroupSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonGroupSimpleUsageShowcase = () => {
    const [text, setText] = react_1.default.useState('Press any button');
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.ButtonGroup>
        <components_1.Button onPress={() => setText('Left button pressed')}>
L
        </components_1.Button>
        <components_1.Button onPress={() => setText('Middle button pressed')}>
M
        </components_1.Button>
        <components_1.Button onPress={() => setText('Right button pressed')}>
R
        </components_1.Button>
      </components_1.ButtonGroup>

      <components_1.Text style={styles.text}>
        {text}
      </components_1.Text>

    </components_1.Layout>);
};
exports.ButtonGroupSimpleUsageShowcase = ButtonGroupSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 8,
    },
});
//# sourceMappingURL=buttonGroupSimpleUsage.component.js.map