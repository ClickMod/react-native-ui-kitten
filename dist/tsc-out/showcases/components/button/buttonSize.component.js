"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonSizeShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ButtonSizeShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Button style={styles.button} size='tiny'>
      TINY
    </components_1.Button>

    <components_1.Button style={styles.button} size='small'>
      SMALL
    </components_1.Button>

    <components_1.Button style={styles.button} size='medium'>
      MEDIUM
    </components_1.Button>

    <components_1.Button style={styles.button} size='large'>
      LARGE
    </components_1.Button>

    <components_1.Button style={styles.button} size='giant'>
      GIANT
    </components_1.Button>

  </components_1.Layout>);
exports.ButtonSizeShowcase = ButtonSizeShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
});
//# sourceMappingURL=buttonSize.component.js.map