"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("@ui-kitten/components");
const IconSimpleUsageShowcase = () => (<components_1.Icon style={styles.icon} fill='#8F9BB3' name='star'/>);
exports.IconSimpleUsageShowcase = IconSimpleUsageShowcase;
const styles = react_native_1.StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
});
//# sourceMappingURL=iconSimpleUsage.component.js.map