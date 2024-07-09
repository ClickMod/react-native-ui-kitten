"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseThemeSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const UseThemeSimpleUsageShowcase = () => {
    const theme = (0, components_1.useTheme)();
    return (<react_native_1.View style={[styles.container, { backgroundColor: theme['color-primary-default'] }]}>
      <components_1.Text category='h4' status='control'>
        I use primary color as background!
      </components_1.Text>
    </react_native_1.View>);
};
exports.UseThemeSimpleUsageShowcase = UseThemeSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=useThemeSimpleUsage.component.js.map