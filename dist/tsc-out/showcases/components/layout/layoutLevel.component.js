"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutLevelShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const LayoutLevelShowcase = () => (<components_1.Layout style={styles.container}>

    <components_1.Layout style={styles.layout} level='4'>
      <components_1.Text>
4
      </components_1.Text>
    </components_1.Layout>

    <components_1.Layout style={styles.layout} level='3'>
      <components_1.Text>
3
      </components_1.Text>
    </components_1.Layout>

    <components_1.Layout style={styles.layout} level='2'>
      <components_1.Text>
2
      </components_1.Text>
    </components_1.Layout>

    <components_1.Layout style={styles.layout} level='1'>
      <components_1.Text>
1
      </components_1.Text>
    </components_1.Layout>

  </components_1.Layout>);
exports.LayoutLevelShowcase = LayoutLevelShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=layoutLevel.component.js.map