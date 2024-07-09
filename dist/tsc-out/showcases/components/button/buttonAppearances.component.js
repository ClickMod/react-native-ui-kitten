"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonAppearancesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonAppearancesShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Button style={styles.button} appearance='filled'>
      FILLED
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='outline'>
      OUTLINE
    </components_1.Button>

    <components_1.Button style={styles.button} appearance='ghost'>
      GHOST
    </components_1.Button>

  </components_1.Layout>);
exports.ButtonAppearancesShowcase = ButtonAppearancesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
});
//# sourceMappingURL=buttonAppearances.component.js.map