"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeDatepickerSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const RangeDatepickerSimpleUsageShowcase = () => {
    const [range, setRange] = react_1.default.useState({});
    return (<components_1.Layout style={styles.container} level='1'>

      <components_1.RangeDatepicker range={range} onSelect={nextRange => setRange(nextRange)}/>

    </components_1.Layout>);
};
exports.RangeDatepickerSimpleUsageShowcase = RangeDatepickerSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        minHeight: 360,
    },
});
//# sourceMappingURL=rangeDatepickerSimpleUsage.component.js.map