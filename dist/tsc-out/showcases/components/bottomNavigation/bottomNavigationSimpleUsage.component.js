"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const react_native_1 = require("react-native");
const BottomNavigationSimpleUsageShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<react_native_1.View style={styles.container}>
      <react_native_1.View style={styles.contentContainer}>
        <components_1.Text category='h4' style={styles.text}>
          Content
        </components_1.Text>
      </react_native_1.View>
      <components_1.BottomNavigation selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
        <components_1.BottomNavigationTab title='USERS'/>
        <components_1.BottomNavigationTab title='ORDERS'/>
        <components_1.BottomNavigationTab title='TRANSACTIONS'/>
      </components_1.BottomNavigation>
    </react_native_1.View>);
};
exports.BottomNavigationSimpleUsageShowcase = BottomNavigationSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: '#EEF1F6',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
});
//# sourceMappingURL=bottomNavigationSimpleUsage.component.js.map