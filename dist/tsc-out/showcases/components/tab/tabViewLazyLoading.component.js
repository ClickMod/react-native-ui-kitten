"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabViewLazyLoadingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const TabViewLazyLoadingShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    const shouldLoadComponent = (index) => index === selectedIndex;
    return (<components_1.TabView selectedIndex={selectedIndex} shouldLoadComponent={shouldLoadComponent} onSelect={index => setSelectedIndex(index)}>
      <components_1.Tab title='USERS'>
        <components_1.Layout style={styles.tabContainer}>
          <components_1.Text category='h5'>
            USERS
          </components_1.Text>
        </components_1.Layout>
      </components_1.Tab>
      <components_1.Tab title='ORDERS'>
        <components_1.Layout style={styles.tabContainer}>
          <components_1.Text category='h5'>
            ORDERS
          </components_1.Text>
        </components_1.Layout>
      </components_1.Tab>
      <components_1.Tab title='TRANSACTIONS'>
        <components_1.Layout style={styles.tabContainer}>
          <components_1.Text category='h5'>
            TRANSACTIONS
          </components_1.Text>
        </components_1.Layout>
      </components_1.Tab>
    </components_1.TabView>);
};
exports.TabViewLazyLoadingShowcase = TabViewLazyLoadingShowcase;
const styles = react_native_1.StyleSheet.create({
    tabContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=tabViewLazyLoading.component.js.map