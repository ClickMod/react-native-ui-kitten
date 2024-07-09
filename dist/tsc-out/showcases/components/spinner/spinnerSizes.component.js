"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerSizesShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const SpinnerSizesShowcase = () => (<components_1.Layout style={styles.container} level='1'>

    <components_1.Spinner size='tiny'/>

    <components_1.Spinner size='small'/>

    <components_1.Spinner size='medium'/>

    <components_1.Spinner size='large'/>

    <components_1.Spinner size='giant'/>

  </components_1.Layout>);
exports.SpinnerSizesShowcase = SpinnerSizesShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
});
//# sourceMappingURL=spinnerSizes.component.js.map