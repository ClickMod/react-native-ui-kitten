"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStatesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonStatesShowcase = () => (<components_1.Layout style={styles.container} level='1'>
    <components_1.Button style={styles.button}>
      Text/ACTIVE
    </components_1.Button>
    <components_1.Button style={styles.button} disabled={true}>
      DISABLED
    </components_1.Button>

  </components_1.Layout>);
exports.ButtonStatesShowcase = ButtonStatesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
});
//# sourceMappingURL=buttonStates.component.js.map