"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividerSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const DividerSimpleUsageShowcase = () => (<>
    <react_native_1.View style={styles.details}>
      <components_1.Avatar size='giant' source={require('../../assets/icon.png')}/>
      <components_1.Text style={styles.title} category='h6'>
UI Kitten
      </components_1.Text>
    </react_native_1.View>
    <components_1.Divider />
    <components_1.Button style={styles.installButton}>
INSTALL
    </components_1.Button>
  </>);
exports.DividerSimpleUsageShowcase = DividerSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    title: {
        marginHorizontal: 8,
    },
    installButton: {
        marginVertical: 4,
    },
});
//# sourceMappingURL=dividerSimpleUsage.component.js.map