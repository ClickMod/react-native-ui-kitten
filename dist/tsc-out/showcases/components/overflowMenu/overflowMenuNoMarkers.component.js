"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowMenuNoMarkersShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const OverflowMenuNoMarkersShowcase = () => {
    const [visible, setVisible] = react_1.default.useState(false);
    const [selectedTitle, setSelectedTitle] = react_1.default.useState('No items selected');
    const onUsersPress = () => {
        setSelectedTitle('Users');
        setVisible(false);
    };
    const onOrdersPress = () => {
        setSelectedTitle('Orders');
        setVisible(false);
    };
    const onTransactionsPress = () => {
        setSelectedTitle('Transactions');
        setVisible(false);
    };
    const renderToggleButton = () => (<components_1.Button onPress={() => setVisible(true)}>
      TOGGLE MENU
    </components_1.Button>);
    return (<components_1.Layout style={styles.container} level='1'>
      <components_1.Text category='h6'>
        {selectedTitle}
      </components_1.Text>
      <components_1.OverflowMenu visible={visible} anchor={renderToggleButton} onBackdropPress={() => setVisible(false)}>
        <components_1.MenuItem title='Users' onPress={onUsersPress}/>
        <components_1.MenuItem title='Orders' onPress={onOrdersPress}/>
        <components_1.MenuItem title='Transactions' onPress={onTransactionsPress}/>
      </components_1.OverflowMenu>
    </components_1.Layout>);
};
exports.OverflowMenuNoMarkersShowcase = OverflowMenuNoMarkersShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 144,
    },
});
//# sourceMappingURL=overflowMenuNoMarkers.component.js.map