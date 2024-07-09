"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithStylesSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const ThemedComponent = ({ eva }) => (<react_native_1.View style={eva.style.container}>
    <components_1.Text style={{ color: eva.theme['color-success-default'] }} category='h4'>
      I use info as background color and success as text color!
    </components_1.Text>
  </react_native_1.View>);
exports.WithStylesSimpleUsageShowcase = (0, components_1.withStyles)(ThemedComponent, theme => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme['color-info-default'],
    },
}));
//# sourceMappingURL=withStylesSimpleUsage.component.js.map