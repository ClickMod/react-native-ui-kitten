"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPagerLazyLoadingShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ViewPagerLazyLoadingShowcase = () => {
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(0);
    const shouldLoadComponent = (index) => index === selectedIndex;
    return (<components_1.ViewPager selectedIndex={selectedIndex} shouldLoadComponent={shouldLoadComponent} onSelect={index => setSelectedIndex(index)}>
      <components_1.Layout level='2' style={styles.tab}>
        <components_1.Text category='h5'>
Tab 1
        </components_1.Text>
      </components_1.Layout>
      <components_1.Layout level='2' style={styles.tab}>
        <components_1.Text category='h5'>
Tab 2
        </components_1.Text>
      </components_1.Layout>
    </components_1.ViewPager>);
};
exports.ViewPagerLazyLoadingShowcase = ViewPagerLazyLoadingShowcase;
const styles = react_native_1.StyleSheet.create({
    tab: {
        height: 192,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=viewPagerLazyLoading.component.js.map