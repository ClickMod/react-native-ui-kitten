"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseStyleSheetSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const react_native_1 = require("react-native");
const UseStyleSheetSimpleUsageShowcase = () => {
    const styles = (0, components_1.useStyleSheet)(themedStyles);
    return (<react_native_1.View style={styles.container}>
      <components_1.Text category='h4' status='control'>
        I use success color as background!
      </components_1.Text>
    </react_native_1.View>);
};
exports.UseStyleSheetSimpleUsageShowcase = UseStyleSheetSimpleUsageShowcase;
const themedStyles = components_1.StyleService.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'color-success-default',
    },
});
//# sourceMappingURL=useStyleSheetSimpleUsage.component.js.map