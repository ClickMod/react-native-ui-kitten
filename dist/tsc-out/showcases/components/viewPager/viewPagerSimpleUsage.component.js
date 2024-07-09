"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPagerSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ViewPagerSimpleUsageShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    return (<components_1.ViewPager selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <components_1.Layout style={styles.tab} level='2'>
        <components_1.Text category='h5'>
USERS
        </components_1.Text>
      </components_1.Layout>
      <components_1.Layout style={styles.tab} level='2'>
        <components_1.Text category='h5'>
ORDERS
        </components_1.Text>
      </components_1.Layout>
      <components_1.Layout style={styles.tab} level='2'>
        <components_1.Text category='h5'>
TRANSACTIONS
        </components_1.Text>
      </components_1.Layout>
    </components_1.ViewPager>);
};
exports.ViewPagerSimpleUsageShowcase = ViewPagerSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    tab: {
        height: 192,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=viewPagerSimpleUsage.component.js.map