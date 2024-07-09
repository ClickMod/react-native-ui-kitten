"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowMenuWithoutDividerShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const OverflowMenuWithoutDividerShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(null);
    const [visible, setVisible] = react_1.default.useState(false);
    const onItemSelect = (index) => {
        setSelectedIndex(index);
        setVisible(false);
    };
    const renderToggleButton = () => (<components_1.Button onPress={() => setVisible(true)}>
      TOGGLE MENU
    </components_1.Button>);
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.OverflowMenu appearance='noDivider' anchor={renderToggleButton} visible={visible} selectedIndex={selectedIndex} onSelect={onItemSelect} onBackdropPress={() => setVisible(false)}>
        <components_1.MenuItem title='Users'/>
        <components_1.MenuItem title='Orders'/>
        <components_1.MenuItem title='Transactions'/>
      </components_1.OverflowMenu>

    </components_1.Layout>);
};
exports.OverflowMenuWithoutDividerShowcase = OverflowMenuWithoutDividerShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 144,
    },
});
//# sourceMappingURL=overflowMenuWithoutDivider.component.js.map