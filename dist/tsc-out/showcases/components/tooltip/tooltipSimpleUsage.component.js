"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipSimpleUsageShowcase = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@ui-kitten/components");
const TooltipSimpleUsageShowcase = () => {
    const [visible, setVisible] = react_1.default.useState(false);
    const renderToggleButton = () => (<components_1.Button onPress={() => setVisible(true)}>
      TOGGLE TOOLTIP
    </components_1.Button>);
    return (<components_1.Tooltip anchor={renderToggleButton} visible={visible} onBackdropPress={() => setVisible(false)}>
      Welcome to UI Kitten 😻
    </components_1.Tooltip>);
};
exports.TooltipSimpleUsageShowcase = TooltipSimpleUsageShowcase;
//# sourceMappingURL=tooltipSimpleUsage.component.js.map