"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ModalSimpleUsageShowcase = () => {
    const [visible, setVisible] = react_1.default.useState(false);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.Button onPress={() => setVisible(true)}>
        TOGGLE MODAL
      </components_1.Button>

      <components_1.Modal visible={visible}>
        <components_1.Card disabled={true}>
          <components_1.Text>
Welcome to UI Kitten 😻
          </components_1.Text>
          <components_1.Button onPress={() => setVisible(false)}>
            DISMISS
          </components_1.Button>
        </components_1.Card>
      </components_1.Modal>

    </components_1.Layout>);
};
exports.ModalSimpleUsageShowcase = ModalSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 192,
    },
});
//# sourceMappingURL=modalSimpleUsage.component.js.map